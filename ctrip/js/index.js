window.addEventListener('load', function() {

    var banner = document.querySelector('.banner');
    var b_ul = document.querySelector('.b_ul');
    var b_ol = document.querySelector('.b_ol');
    var bannerWidth = banner.offsetWidth;
    //1、利用定时器自动轮播图片
    var index = 0;
    var timer = setInterval(function() {
        index++;
        var translatex = -index * bannerWidth;
        b_ul.style.transition = 'all .5s';
        b_ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);
    b_ul.addEventListener('transitionend', function() {
        //2、无缝滚动
        if (index >= 3) {
            index = 0;
            b_ul.style.transition = 'none'; //去掉过渡效果
            var translatex = -index * bannerWidth;
            b_ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            b_ul.style.transition = 'none'; //去掉过渡效果
            var translatex = -index * bannerWidth;
            b_ul.style.transform = 'translateX(' + translatex + 'px)';
        }
        //3、小圆点跟随变化效果
        //把ol里面带有current类名的li选出来，去掉类名
        b_ol.querySelector('li.current').classList.remove('current');
        //让当前索引号的小li 加上 current
        b_ol.children[index].classList.add('current');
    });
    //4、手指滑动轮播图
    var startX = 0;
    var moveX = 0;
    var flag = false;
    b_ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer); //手指触摸时就停止计时器
    });
    b_ul.addEventListener('touchmove', function(e) {
        moveX = e.targetTouches[0].pageX - startX;
        var translatex = -index * bannerWidth + moveX;
        b_ul.style.transition = 'none'; //去掉过渡效果
        b_ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true;
        e.preventDefault();
    });
    b_ul.addEventListener('touchend', function(e) {
        if (flag) {
            //如果移动距离大于50像素，就播放上一张或者下一张图片
            if (Math.abs(moveX) > 50) {
                //右划播放上一张，moveX是正值；左划就是播放下一张，moveX是负值
                if (moveX > 0) {
                    index--;
                } else {
                    index++;
                }
                var translatex = -index * bannerWidth;
                b_ul.style.transition = 'all .5s';
                b_ul.style.transform = 'translateX(' + translatex + 'px)';
            } else { //如果移动距离小于50，则弹回去
                var translatex = -index * bannerWidth;
                b_ul.style.transition = 'all .5s';
                b_ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        //手指离开时继续开启计时器
        clearInterval(timer); //开启之前先清除下计时器
        timer = setInterval(function() {
            index++;
            var translatex = -index * bannerWidth;
            b_ul.style.transition = 'all .5s';
            b_ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    });

});