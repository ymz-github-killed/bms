
// placeholder ie8 模拟
$(function () {
    function placeholderSupport() { // 判断浏览器是否支持 placeholder
        return 'placeholder' in document.createElement('input');
    }

    if (!placeholderSupport()) {
        $(document).on('focus', '[placeholder]', function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        });
        $(document).on('blur', '[placeholder]', function () {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        });
        $('[placeholder]').blur();
    };
});