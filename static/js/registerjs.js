/**
 * Created by Ty on 2016/7/28.
 */

window.onload = function()               //切换选项卡：登录，注册
{
    document.getElementById("username").addEventListener("blur",validateusn,false);
    document.getElementById("pwd").addEventListener("blur",validatepwd,false);      //首次输入密码是否大于六位
    document.getElementById("con").addEventListener("blur",validatecon,false);      //再次输入密码是否与之前一致

}

$(function(){
    $('#formbackground').height($(window).height());
    $('#formbackground').width($(window).width());



});



function validatename(element)
{
    var obj = document.getElementById(element);
    var objmsg = document.getElementById(element+"msg");
    if (obj.value.indexOf(" ") <0 && obj.value.length>=4)   //format
    {
        //obj.className="right";
        //objmsg.innerHTML='<img src="picture/1.jpg" alt="输入正确" width="16px" height="16px"/>';
        document.getElementById("tippbox").style.display = "none";
        document.getElementById("errtip").innerHTML = "";

        return  true;
    }
    else
    {
        //obj.className="wrong";
       // objmsg.innerHTML='<img src="picture/2.png" alt="输入错误" width="16px" height="16px"/>';
        document.getElementById("tippbox").style.display = "block";
        document.getElementById("errtip").innerHTML = "用户名不能少于4位或使用空格";
        document.getElementById("username").setAttribute("placeholder","用户名不能少于4位或使用空格");
        return false;
    }

}

function validateusn()
{
    return validatename("username");
}


function validateempty(element)                   // 首次输入密码是否不少于6位，正确返回true
{
    var obj = document.getElementById(element);
    var objmsg = document.getElementById(element+"msg");
    if (obj.value.length>=6)   //format
    {
       // obj.className="right";
        //objmsg.innerHTML='<img src="picture/1.jpg" alt="输入正确" width="16px" height="16px"/>';
        document.getElementById("tippbox").style.display = "none";
        document.getElementById("errtip").innerHTML = "";
        return  true;
    }
    else
    {
        //obj.className="wrong";
        //objmsg.innerHTML='<img src="picture/2.png" alt="输入错误" width="16px" height="16px"/>';
        document.getElementById("tippbox").style.display = "block";
        document.getElementById("errtip").innerHTML = "密码不能少于6位";
        document.getElementById("pwd").setAttribute("placeholder","密码不能少于6位");
        return false;
    }
}

function validatepwd()
{
    return validateempty("pwd");
}

function validaterepeat(srcname,desname)                 //确认密码是否正确
{
    var src = document.getElementById(srcname);
    var des = document.getElementById(desname);
    var elementmsg = document.getElementById(desname+"msg");
    if(src.value==des.value)
    {
       // des.className="right";
        //elementmsg.innerHTML='<img src="picture/1.jpg" alt="输入正确" width="16px" height="16px"/>';
        document.getElementById("tippbox").style.display = "none";
        document.getElementById("errtip").innerHTML = "";
        return  true;
    }
    else
    {
       // des.className="wrong";
        // elementmsg.innerHTML = "输入错误";
       // elementmsg.innerHTML='<img src="picture/2.png" alt="输入错误" width="16px" height="16px"/>';
        document.getElementById("tippbox").style.display = "block";
        document.getElementById("errtip").innerHTML = "输入密码不一致";
        document.getElementById("con").setAttribute("placeholder","输入密码不一致");
        return false;
    }
}

function validatecon()           //确认密码是否正确
{
    if(validateempty("con"))
    {
        return validaterepeat("pwd","con");
    }
    else
    {
       // document.getElementById("conmsg").innerHTML='<img src="picture/2.png" alt="输入错误" width="16px" height="16px"/>';
        document.getElementById("tippbox").style.display = "block";
        document.getElementById("errtip").innerHTML = "输入密码不一致";
        document.getElementById("con").setAttribute("placeholder","输入密码不一致");
        return false;
    }
}

function showemail()                        //email格式是否正确,正确返回true
{
    var msg = document.getElementById("email");
    var tipmsg= document.getElementById("emailtip");
    if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(msg.value))                           //format    \w+@\w+\.\w+
    {
        //msg.className="right";
        // tipmsg.innerHTML = "输入正确";
       // tipmsg.innerHTML='<img src="picture/1.jpg" alt="输入正确" width="16px" height="16px"/>';
        document.getElementById("tippbox").style.display = "none";
        document.getElementById("errtip").innerHTML = "";
        return  true;
    }

    else
    {
       // msg.className="wrong";
        //tipmsg.innerHTML='<img src="picture/2.png" alt="输入错误" width="16px" height="16px"/>'
        document.getElementById("tippbox").style.display = "block";
        document.getElementById("errtip").innerHTML = "邮箱格式错误";
        document.getElementById("email").setAttribute("placeholder","邮箱格式错误");
        return false;
    }
}

function validemail()
{
    return showemail();
}

function reP(){
    if( document.getElementById('oImg').style.display == "block")
        document.getElementById('oImg').style.display = "none";
    else
        document.getElementById('oImg').style.display = "block";
}

function reH(){
    if( document.getElementById('oImg').style.display == "block")
        document.getElementById('oImg').style.display = "none";
    else
        document.getElementById('oImg').style.display = "block";
}






(function($){
    $.fn.drag = function(options){
        var x, drag = this, isMove = false, defaults = {
        };
        var options = $.extend(defaults, options);
        //添加背景，文字，滑块
        var html = '<div class="drag_bg"></div>'+
                    '<div class="drag_text" onselectstart="return false;" unselectable="on">拖动滑块验证</div>'+
                    '<div class="handler handler_bg"></div>';
        this.append(html);

        var handler = drag.find('.handler');
        var drag_bg = drag.find('.drag_bg');
        var text = drag.find('.drag_text');
        var maxWidth = drag.width() - handler.width();  //能滑动的最大间距

        //鼠标按下时候的x轴的位置
        handler.mousedown(function(e){
            isMove = true;
            x = e.pageX - parseInt(handler.css('left'), 10);
        });

        //鼠标指针在上下文移动时，移动距离大于0小于最大间距，滑块x轴位置等于鼠标移动距离
        $(document).mousemove(function(e){
            var _x = e.pageX - x;
            if(isMove){
                if(_x > 0 && _x <= maxWidth){
                    handler.css({'left': _x});
                    drag_bg.css({'width': _x});
                }else if(_x > maxWidth){  //鼠标指针移动距离达到最大时清空事件
                    dragOk();
                }
            }
        }).mouseup(function(e){
            isMove = false;
            var _x = e.pageX - x;
            if(_x < maxWidth){ //鼠标松开时，如果没有达到最大距离位置，滑块就返回初始位置
                handler.css({'left': 0});
                drag_bg.css({'width': 0});
            }
        });

        //清空事件
        function dragOk(){
            handler.removeClass('handler_bg').addClass('handler_ok_bg');
            text.text('验证通过');
            drag.css({'color': '#fff'});
            handler.unbind('mousedown');
            $(document).unbind('mousemove');
            $(document).unbind('mouseup');
        }
    };
})(jQuery);
