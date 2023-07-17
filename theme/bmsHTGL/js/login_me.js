$(function () {
    var _url = "http://20.26.17.115:9100/bms";
    $(".j-logon").click(function () {
    	$(".juhua_box").css('display','flex');
        var _name = $(".j-name").val().length;
        var _psw = $(".j-psw").val().length;
        var _yzm = $(".j-yzm").val().length;
        var userLoginName1 = enString($(".j-name").val());
        var userLoginPassword1 = enString($(".j-psw").val());
        var validCode1 = $(".j-yzm").val();
        if (_name == '0') {
            alert('用户名不能为空');
        } else {
            if (_psw == '0') {
                alert('mima不能为空');
            } else {
                if (_yzm == '0') {
                    alert('验证码不能为空');
                } else {
                    $.ajax({ //登录
                        type: 'POST',
                        url: _url + '/login/logon.controller',
                        cache: "false",
                        data: {
                            "userLoginName": userLoginName1,
                            "userLoginPassword": userLoginPassword1,
                            "validCode": validCode1
                        },
                        dataType: 'json',
                        success: function (data) {
                        	$(".juhua_box").css('display','none');
                            if (data.messageCode == 'S100') {
                                $.ajax({ //初始化用户
                                    type: 'POST',
                                    url: _url + '/login/main.controller',
                                    dataType: 'json',
                                    success: function (data) {
                                        if (data.messageCode == 'S100') {
                                            //跳转首页链接
                                            window.location.href = _url + "/login/index.controller";
                                        }
                                    },
                                    error: function (xhr, type) {                                    	$(".juhua_box").css('display','flex');

                                    }
                                });
                            }
                        },
                        error: function (xhr, type) {
                        	$(".juhua_box").css('display','none');
                        }
                    });
                }
            }
        }
    })
})