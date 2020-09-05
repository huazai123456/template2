//点击菜单切换内容
$(function () {
    var lis = document.getElementById("ul1").getElementsByTagName("li");
    var divs = $(".con1_list1");
    for(var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function() {
            for(var j = 0; j < lis.length; j++) {
                lis[j].className = "";
            }
            this.className = "active";
            for(var i = 0; i < divs.length; i++) {
                divs[i].style.display = "none";
            }
            divs[this.index].style.display = "block";
        }
    }
});
//侧边栏滑进滑出及返回顶部
$(function () {
   $(".onoroff a").toggle(function () {
       $(this).css("background","url('./images/left4.png')");
       $(".cebian").animate({right:"-208px"});
       
   },function () {
       $(this).css("background","url('./images/left2.png')");
       $(".cebian").animate({right:"10px"});
       $(".backtop").click(function () {
           document.body.scrollTop = document.documentElement.scrollTop = 0;
       })
   })
})
//轮播图
$(function () {
    var index = 0;
    var timer = setInterval(function(){
        after();
    },2000) 
    function before() {
       var imgObj = $(".con2_lunbo_pic a img");
        index--;
        if(index < 0){
            index = 4;
        }
        imgObj.fadeOut(1000);    
        imgObj.eq(index).fadeIn(1000);
    }
    function after() {
       var imgObj = $(".con2_lunbo_pic a img");
        index++;
        if(index > 4){
            index = 0;
        }
        imgObj.fadeOut(1000);    
        imgObj.eq(index).fadeIn(1000);
    }
    $('.prev').click(function(){
        clearInterval(timer);
        before();
        timer=setInterval(function(){
            before();;
        },3000);
    });
    $('.next').click(function(){
        clearInterval(timer);
        after();
        timer=setInterval(function(){
            after();
        },3000);
    });
})


