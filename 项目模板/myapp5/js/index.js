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
