//登录器背景按钮切换
$(function () {
    $(".btn1").hover(function () {
          $(this).addClass("btnn1");
    },function () {
          $(this).removeClass("btnn1");
    });
    $(".btn2").hover(function () {
          $(this).addClass("btnn2");
    },function () {
          $(this).removeClass("btnn2");
    });
    $(".btn3").hover(function () {
          $(this).addClass("btnn3");
    },function () {
          $(this).removeClass("btnn3");
    });
    $(".btn4").hover(function () {
          $(this).addClass("btnn4");
    },function () {
          $(this).removeClass("btnn4");
    });
});

//点击菜单切换内容
$(function () {
    var lis = document.getElementById("ul1").getElementsByTagName("li");
    var divs = $(".con1_center_list");
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
//图片按钮轮播
$(function () {
    var listLen = $(".con1_right_pic a").length, i=0,setInter,speen = 3000;
    /*图片轮播*/
    $(".con1_right_pic_li a:first").addClass("active");
    $(".con1_right_pic_li a:first").show();
    $(".con1_right_pic_li a").each(function(index,element){
        $(element).click(function(){
            i = index;
            $(this).addClass("active").siblings().removeClass("active");
            $(".con1_right_pic a").eq(index).animate({
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
        $(".con1_right_pic_li a").eq(i).addClass("active").siblings().removeClass("active");
        $(".con1_right_pic a").eq(i).animate({
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

