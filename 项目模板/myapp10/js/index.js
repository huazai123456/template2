//旋转木马轮播效果
$(function () {
    var box = document.querySelector('.con3');
    var slide = document.querySelector('.con3_infor');
    var arrow = document.querySelector('.arrow');
    var lis = slide.getElementsByTagName('li');
    var json = [ 
        {   //  1
            width:760,
            bottom:60,
            left:200,
            opacity:100,
            z:5,
            id:1
        },
        {  // 2
            width:560,
            bottom:140,
            left:600,
            opacity:80,
            z:4,
            id:2
        },
        {   // 3
            width:560,
            bottom:260,
            left:500,
            opacity:60,
            z:3,
            id:3
        },
        {  // 4
            width:560,
            bottom:300,
            left:300,
            opacity:40,
            z:2,
            id:4
        },
        {   //5
            width:560,
            bottom:260,
            left:80,
            opacity:60,
            z:3,
            id:5
        },
        {   //6
            width:560,
            bottom:140,
            left:0,
            opacity:80,
            z:4,
            id:6
        }
    ];
    box.addEventListener('mouseover', function(){
       animate(arrow, {opacity: 100});
    });
    box.addEventListener('mouseout', function(){
        animate(arrow, {opacity: 0});
    });

    var next = document.querySelector('.next3');
    var prev = document.querySelector('.prev3');
    var timer = null;
    var flag = true;
    next.addEventListener('click', function(){
        clearInterval(timer);
        if(flag == true){
            move(true);
            flag = true;
        }
    });
    next.addEventListener('mouseleave', function(){
        clearInterval(timer);
        run();
    });
    prev.addEventListener('click', function(){
        clearInterval(timer);
        if(flag == true){
            move(false);
            flag = true;
        }
    });
    prev.addEventListener('mouseleave', function(){
       clearInterval(timer);
       run();
    });
    move();
    run();
    function run(){
        timer = setInterval(function(){
            if(flag == true){
                flag = false;
                move(true);
            }
        },5000);
    }
    function move(x){
        if(x != undefined){
            if(x){
              json.push(json.shift());
            }else{
              json.unshift(json.pop());
            };
        };
        for(var i = 0; i<json.length; i++){
            animate(lis[i],{
              width: json[i].width,
              bottom: json[i].bottom,
              left: json[i].left,
              opacity: json[i].opacity,
              zIndex: json[i].z,
            },function(){
                flag = true;
            })
        };
    }
    function animate(obj, json, callback){
        clearInterval(obj.timers);
        obj.timers = setInterval(function(){
            var stoped = true;
            for(var k in json){
                var leader = 0;
                if(k == 'opacity'){
                  leader = Math.round(getStyle(obj, k)*100) || 100;
                }else {
                  leader = parseInt(getStyle(obj, k)) || 0;
                };
                var step = (json[k]-leader)/10;
                step = step > 0? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                if(k == 'opacity'){
                  obj.style[k] = leader/100;
                  obj.style['filter'] = 'alpha(opacity='+ leader +')';
                }else if(k == 'zIndex'){
                  obj.style['zIndex'] = json[k];
                }else{
                  obj.style[k] = leader + "px";
                }
                if(leader != json[k]){
                  stoped = false;
                }
            };
            if(stoped){
                clearInterval(obj.timers);
                callback && callback();
            };
        },50);
    };
    //获取属性值
    function getStyle(obj, attr){
      if(obj.currentStyle){
        return obj.currentStyle[attr];
      }else{
        return window.getComputedStyle(obj, null)[attr];
      };
    };
})
//点击按钮返回顶部
$(function () {
       $(".backtop").click(function () {
           document.body.scrollTop = document.documentElement.scrollTop = 0;
       })
})