window.addEventListener('load', function() {
    //表单验证

    // 手机号码
    var tel = document.querySelector('#tel');
    var telspan = document.querySelector('.telspan');
    var phone = /^1[3-9]\d{9}$/;
    tel.addEventListener('blur', function() {
        if (phone.test(tel.value)) {
            telspan.className = 'success';
            telspan.innerHTML = '输入正确~';
        } else {
            telspan.className = 'wrong';
            telspan.innerHTML = '请输入正确的手机号码';
        }
    });

    var qq = document.querySelector('#qq');
    var telqq = document.querySelector('.telqq');



});