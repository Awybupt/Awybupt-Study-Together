/**
 * Created by Ty on 2017/2/16.
 */

 $(function () { $('#myModalcon').on('hide.bs.modal', function () {
           ///alert("eqw");
      $(this).removeData('modal');})

    });



 //$("#myModalcon").on("hidden.bs.modal", function() {        // no use
         //   $(this).removeData("bs.modal");
        //});



        //$('#myModalcon').on('hidden', function() {
          //  $(this).removeData('modal');
        //});


/*      return top     */
    $(function(){
	var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\">" +
                    "<div class=\"btn btn-wx\">" +
                        "<img class=\"pic\" src=\"/static/picture/weixin.jpg\" /></div>" +
                    "<div class=\"btn btn-phone\">" +
                         "<img class=\"phone\" src=\"/static/picture/weixin.jpg\" /></div>" +
                    "<div class=\"btn btn-top\"></div>" +
                "</div>";

	$("#top").html(tophtml);
	$("#izl_rmenu").each(function(){
        $(this).find(".btn-wx").mouseenter(function(){
			$(this).find(".pic").fadeIn("slow");
		});
		$(this).find(".btn-wx").mouseleave(function(){
			$(this).find(".pic").fadeOut("slow");
		});
		$(this).find(".btn-phone").mouseenter(function(){
			$(this).find(".phone").fadeIn("slow");
		});
		$(this).find(".btn-phone").mouseleave(function(){
			$(this).find(".phone").fadeOut("slow");
		});
		$(this).find(".btn-top").click(function(){
			$("html, body").animate({
				"scroll-top":0
			},"fast");
		});
	});


    $("#izl_rmenu .btn-wx").hide();                //add
    $("#izl_rmenu .btn-phone").hide();         //add
	var lastRmenuStatus=false;
	$(window).scroll(function(){
		var _top=$(window).scrollTop();
		if(_top>200){
			$("#izl_rmenu").data("expanded",true);
            $("#izl_rmenu .btn-wx").fadeIn(1000);            //add
            $("#izl_rmenu .btn-phone").fadeIn(1500);
            $("#izl_rmenu .btn-top").fadeIn(2000);
		}else{
			$("#izl_rmenu").data("expanded",false);
            $("#izl_rmenu .btn-wx").fadeOut(1000);              //add
            $("#izl_rmenu .btn-phone").fadeOut(1500);
            $("#izl_rmenu .btn-top").fadeOut(2000);
		}
		if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$("#izl_rmenu").data("expanded");
			if(lastRmenuStatus){
				$("#izl_rmenu .btn-top").slideDown();

			}else{
				$("#izl_rmenu .btn-wx").slideUp();

			}
		}
	});
});

/*      return top     */



        function locking(){
         document.all.zzjs_net.style.display="block";
         document.all.zzjs_net.style.width=document.body.clientWidth;
         document.all.zzjs_net.style.height=document.body.clientHeight;
         document.all.www_zzjs_net.style.display='block';
        }
        function Lock_CheckForm(theForm){
         document.all.zzjs_net.style.display='none';document.all.www_zzjs_net.style.display='none';
         return false;
        }

        $(document).ready(function(){

        $(".rollpic").css("height", $(window).width()*0.618);
        //$("#broad").css("height", $(window).height());
        $("#jumontop").fadeIn(4000);
        $("#d11").fadeIn(1000);
        $("#d22").fadeIn(2000);
        $("#d33").fadeIn(3000);



        $("#showcomt").click(function(){            //显示评论//

            $("#icomment").slideToggle(1500);
        });


    });


    function show(){
        var box = document.getElementById("content");
        var text = box.innerHTML;

        var newBox = document.createElement("div");
        var btn = document.createElement("a");
        newBox.innerHTML = text.substring(0,200);
        btn.innerHTML = text.length > 200 ? "显示全部" : "";
        btn.href = "###";


        btn.onclick = function(){
            if (btn.innerHTML == "显示全部"){
                btn.innerHTML = "收起";
                newBox.innerHTML = text;
            }else{
                btn.innerHTML = "显示全部";
                newBox.innerHTML = text.substring(0,200);
            }
        };


        box.innerHTML = "";
        box.appendChild(newBox);
        box.appendChild(btn);
    }
    show();


    //关注问题
    function fcs(ix) {
        var fc = document.getElementById("cancelfs"+ix);
        var ffc = document.getElementById("fs"+ix);
        if(fc.style.display == "none")
        {
            fc.style.display = "inline";
            ffc.style.display = "none";
        }

        else if(fc.style.display == "inline")
        {
            fc.style.display = "none";
            ffc.style.display = "inline";
        }

    }


    //赞
    function compliment(ix) {
        var fc = document.getElementById("cancelcpt"+ix);
        var ffc = document.getElementById("compliment"+ix);
        if(fc.style.display == "none")
        {
            fc.style.display = "inline";
            ffc.style.display = "none";
        }

        else if(fc.style.display == "inline")
        {
            fc.style.display = "none";
            ffc.style.display = "inline";
        }

    }


 //收藏
    function collection(ix) {
        var fc = document.getElementById("cancelclt"+ix);
        var ffc = document.getElementById("clt"+ix);
        if(fc.style.display == "none")
        {
            fc.style.display = "inline";
            ffc.style.display = "none";
        }

        else if(fc.style.display == "inline")
        {
            fc.style.display = "none";
            ffc.style.display = "inline";
        }

    }

