//图片按钮轮播
$(function () {
    var listLen = $(".imgbox a").length, i=0,setInter,speen = 3000;
    /*图片轮播*/
    $(".idbox a:first").addClass("active");
    $(".idbox a:first").show();
    $(".idbox a").each(function(index,element){
        $(element).click(function(){
            i = index;
            $(this).addClass("active").siblings().removeClass("active");
            $(".imgbox a").eq(index).animate({
                opacity:"show"
            },300).siblings().animate({
                opacity:"hide"
            },300);
        })
        $(element).hover(function(){
            clearInterval(setInter);
        },function(){
            outPlay();
        });
    });
    out_fun = function(){
        if(i < listLen){
            i++;
        }else{
            i=0;
        };
        $(".idbox a").eq(i).addClass("active").siblings().removeClass("active");
        $(".imgbox a").eq(i).animate({
            opacity:"show"
        },300).siblings().animate({
            opacity:"hide"
        },300);
    }
    outPlay = function(){
        setInter = setInterval("out_fun()",speen);
    }
    outPlay();
})

//点击按钮返回顶部
$(function () {
       $(".backtop").click(function () {
           document.body.scrollTop = document.documentElement.scrollTop = 0;
       })
       $(window).scroll(function() {
            var $_scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if($_scrollTop > 1000) {
                $(".backtop").fadeIn();
            } else {
                $(".backtop").fadeOut();
            }
       });
})
