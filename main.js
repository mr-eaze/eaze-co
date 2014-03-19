$(document).ready(function() { 

    $('img').hide();
    $('img').each(function(i) {
        if (this.complete) {
            $(this).fadeIn(1500);
        } else {
            $(this).load(function() {
                $(this).fadeIn();
            });
        }
    });
});