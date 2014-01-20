(function($){
    $.get('./top.html',function(html){
        $('#content').append(html);
    });
})(jQuery);