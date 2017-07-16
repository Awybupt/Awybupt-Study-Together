/**
 * Created by Ty on 2017/2/16.
 */


  var className = 'tooltip-box';

    var isIE = navigator.userAgent.indexOf('MSIE') > -1;

    function showTooltip(obj, id, html, width, height) {
        if (document.getElementById(id) == null) {

            var tooltipBox;
            tooltipBox = document.createElement('div');
            tooltipBox.className = className;
            tooltipBox.id = id;
            tooltipBox.innerHTML = html;

            obj.appendChild(tooltipBox);

            tooltipBox.style.width = width ? width + 'px' : 'auto';
            tooltipBox.style.height = height ? height + 'px' : 'auto';

            if (!width && isIE) {
                tooltipBox.style.width = tooltipBox.offsetWidth;
            }

            tooltipBox.style.position = "absolute";
            tooltipBox.style.display = "block";

            var left = obj.offsetLeft;
            var top = obj.offsetTop + 50;

            if (left + tooltipBox.offsetWidth > document.body.clientWidth) {
                var demoLeft = document.getElementById("demo").offsetLeft;
                left = document.body.clientWidth - tooltipBox.offsetWidth - demoLeft;
                if (left < 0) left = 0;
            }

            tooltipBox.style.left = left + 'px';
            tooltipBox.style.top = top + 'px';

            obj.onmouseleave = function () {
                setTimeout(function () {
                    //document.getElementById(id).style.display = "none";
                     $(".tooltip-box").fadeOut(300);
                }, 500);
            };

        } else {
            document.getElementById(id).style.display = "block";
        }
    }

    var t5 = document.getElementById("tooltip5");

    t5.onmouseenter = function () {

        $(".tooltip-box").fadeIn(500);            //add
        var _html = '<div id="mycard" style="width:150px">' +
                '<p><strong>昵称</strong></p>' +
                '<p>tags</p>' +
                '<p><a>关注 </a><a> 粉丝</a></p>'+
                '<a><input style="width:50px" class="btn btn-success btn-sm" value="私信" /> <input style="width:70px;" class="btn btn-primary btn-sm" value="加好友" /></a>' +
                '</div>';
        showTooltip(this, "t5", _html, 300);
    };