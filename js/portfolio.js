$(document).ready(function() {
    //name and line fade 
    $('#name').hide().fadeIn(800);
    $('.line').animate({
        width: '+=99%'
    });
    $('.mainNav').hide().fadeIn(800);
    $('.mobileNav').hide().fadeIn(800);

    //click buttons
    $('a:not(".externalLink")').on('click', function(e) {
        e.preventDefault();
        var url = this.href;
        $('#container').empty();
        $('#content').load(url).hide().fadeIn(800);;
    });

    //change the navigation for bigger screens
    function reSize() {
        $('.different').on('mouseover resize', function() {
            if ($(window).width() > 767) {
                $(this).css({
                    "opacity": "0.8",
                    "filter": "alpha(opacity=80)"
                }); //opacity change
                $(this).find('.mobileNavIconsIndex').css({
                    'display': 'none'
                }); //hide icon
                var $child = $(this).find('.bigScreenNavText'); //store text 
                $child.css({
                    'display': 'block',
                    'font-size': '40px'
                }); //change navText display
            }
        })
        $('.different').on('mouseout resize', function() {
            $(this).css({
                "opacity": "1",
                "filter": "alpha(opacity=100)"
            }); //opacity change
            $(this).find('.mobileNavIconsIndex').css({
                'display': 'block'
            }); //bring icon back
            var $child = $(this).find('.bigScreenNavText'); //store text
            $child.css({
                'display': 'none',
                'font-size': '0px'
            }); //change navText display
        })
    }

    //animation for article info
    if ($(window).width() > 767) {
        $('.articleInfo').hide();

        $('.article').on('mouseover', function() {
            if ($(window).width() > 767) {
                $(this).next().show();
                $(this).next().css({
                    'bottom': '-200px'
                });
                $(this).next().animate({
                    'bottom': '0px',
                    duration: 1000
                });
            }
        });
        $('.article').on('mouseout', function() {
            $(this).next().animate({
                'bottom': '-200px',
                duration: 1000
            });
            $(this).next().hide();
        })
    }

    /*hover main page nav*/
    $(window).on('load resize DOMNodeInserted', function() {
        var windowWidth = $(window).width();
        if (windowWidth > 767) {
            reSize();
        }
    })


});