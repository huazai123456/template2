//图片按钮轮播
$(function () {
    var listLen = $(".con1_top_left_pic a").length, i=0,setInter,speen = 3000;
    /*图片轮播*/
    $(".con1_top_left_point a:first").addClass("active");
    $(".con1_top_left_point a:first").show();
    $(".con1_top_left_pic a").each(function(index,element){
        $(element).click(function(){
            i = index;
            $(this).addClass("active").siblings().removeClass("active");
            $(".con1_top_left_pic a").eq(index).animate({
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
        $(".con1_top_left_point a").eq(i).addClass("active").siblings().removeClass("active");
        $(".con1_top_left_pic a").eq(i).animate({
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
//点击菜单切换内容
$(function () {
    var lis = document.getElementById("ul1").getElementsByTagName("li");
    var divs = $(".list1");
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
//层叠轮播
$(function () {
    var a = ['con3_pic1','con3_pic2','con3_pic3','con3_pic4','con3_pic5'];
    var timer = setInterval(function () {
         before();
    },3000);
    function before() {
    	for(var i=0;i<a.length;i++){
             $('#con2_lists>a:eq('+i+')').attr("class",a[i]);
        }
        var prev = a.pop();
    	a.unshift(prev);
    };
    function after() {
    	for (var i = 0; i <a.length; i++) {
    		$('#con2_lists>a:eq('+i+')').attr("class",a[i]);
    	}
    	var next = a.shift();
    	a.push(next);
    };
    $('.prev').click(function(){
	    clearInterval(timer);
	    before();
	    timer=setInterval(function(){
	        before();
	    },3000);
	});
	$('.next').click(function(){
	    clearInterval(timer);
	    after();
	    timer=setInterval(function(){
	        before();
	    },3000);
	});
})