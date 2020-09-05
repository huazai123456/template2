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
//点击菜单切换内容
$(function () {
    var lis = document.getElementById("ul1").getElementsByTagName("li");
    var divs = $(".list");
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