$(document).ready(function(){
    $('#btnFadeOut').click(function(){
        $('#box').fadeOut(3000, function(){
            $('#btnFadeOut').text("It's Gone");
        });
    });
});

$(document).ready(function(){
    $('#btnFadeIn').click(function(){
        $('#box').fadeIn(3000)
    });
});

$(document).ready(function(){
    $('#btnFadeTog').click(function(){
        $('#box').fadeToggle(1000)
    });
});

$(document).ready(function(){
    $('#btnSlideTog').click(function(){
        $('#box').slideDown(1000)
    });
});

$(document).ready(function(){
    $('#btnSlideTog').click(function(){
        $('#box').slideUp(1000)
    });
});

$(document).ready(function(){
    $('#btnSlideTog').click(function(){
        $('#box').slideToggle(1000)
    });
});
