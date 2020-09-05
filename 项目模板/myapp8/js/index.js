//轮播图1
$(function () {
    var con1_lis=$(".con1_lis");
        con1_pic=$(".con1_pic");
        con1_point=$(".con1_point");
        showPoint=con1_point.find("a");
        aWidth=con1_pic.find("a").eq(0).width();
    var timer=null;
    var iNow=0;
    showPoint.click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index=$(this).index();
        con1_pic.animate({
            "left":-aWidth*iNow,
        })
    });

    timer=setInterval(function(){
        iNow++;
        if(iNow>showPoint.length-1){
            iNow=0;
        }
        showPoint.eq(iNow).trigger("click");
    },3000);
})
//轮播图2
$(function () {
    var a = ['con3_pic1','con3_pic2','con3_pic3','con3_pic4','con3_pic5'];
    var timer = setInterval(function () {
        before();
    },3000);
    function before() {
        for(var i=0;i<a.length;i++){
            $('.con3_pic>a:eq('+i+')').attr("class",a[i]);
        }
        var prev = a.pop();
        a.unshift(prev);
    };
    function after() {
        for (var i = 0; i <a.length; i++) {
            $('.con3_pic>a:eq('+i+')').attr("class",a[i]);
        }
        var next = a.shift();
        a.push(next);
    };
    $('.prev3').click(function(){
        clearInterval(timer);
        before();
        timer=setInterval(function(){
            before();
        },3000);
    });
    $('.next3').click(function(){
        clearInterval(timer);
        after();
        timer=setInterval(function(){
            before();
        },3000);
    });
})
//轮播图3
$(function () {
   var index = 0;
   var timer = setInterval(function () {
       left();
   },3000);
   function left() {
       index--;
       if (index < 0){
           index = 3;
       }
       console.log(index);
       $(".con4_pic a").eq(index).fadeIn().siblings().fadeOut();
   };
   function right() {
       index++;
       if (index > 3){
           index = 0;
       }
       $(".con4_pic a").eq(index).fadeIn().siblings().fadeOut();
   };
   $(".prev4").click(function () {
       clearInterval();
       left();
   })
    $(".next4").click(function () {
       clearInterval();
       right();
    })
})