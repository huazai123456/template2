//轮播图效果
$(function () {
    var con1_pic=$(".con1_left_pic");
        num=$(".con1_left_num");
        showNum=num.find("a");
        aWidth=con1_pic.find("a").eq(0).width();
    var timer=null;
    var iNow=0;
    showNum.click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index=$(this).index();
        con1_pic.animate({
            "left":-aWidth*iNow,
        })
    });
    timer=setInterval(function(){
        iNow++;
        if(iNow>showNum.length-1){
            iNow=0;
        }
        showNum.eq(iNow).trigger("click");
    },3000);
})
//旋转木马轮播效果
$(function () {
    var box = document.querySelector('.con2_list_infor');
    var slide = document.querySelector('.con2_list_pic');
    var arrow = document.querySelector('.con2_list_arrow');
    var lis = slide.getElementsByTagName('a');
    var json = [ 
        {   //  1
            width:700,
            bottom:40,
            left:260,
            opacity:100,
            z:4,
            id:1
        },
        {  // 2
            width:500,
            bottom:-20,
            left:550,
            opacity:80,
            z:3,
            id:2
        },
        {   // 3
            width:300,
            bottom:-80,
            left:820,
            opacity:60,
            z:2,
            id:3
        },
        {  // 4
            width:100,
            bottom:-140,
            left:1080,
            opacity:40,
            z:1,
            id:4
        },
        {   //5
            width:100,
            bottom:-140,
            left:40,
            opacity:40,
            z:1,
            id:5
        },
        {   //6
            width:300,
            bottom:-80,
            left:100,
            opacity:60,
            z:2,
            id:6
        },
        {   //7
            width:500,
            bottom:-20,
            left:170,
            opacity:80,
            z:3,
            id:7
        }
    ];
    box.addEventListener('mouseover', function(){
       animate(arrow, {opacity: 100});
    });
    box.addEventListener('mouseout', function(){
        animate(arrow, {opacity: 0});
    });

    var next = document.querySelector('.next');
    var prev = document.querySelector('.prev');
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