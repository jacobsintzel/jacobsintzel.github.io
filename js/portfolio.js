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
        $('#container').remove();
        $('#content').load(url +'#container').delay(500).hide().fadeIn(800);
    });

    //change the navigation for bigger screens
    function reSize() {
        $('.different').on('mouseover resize', function() {
                $(this).css({
                    "opacity": "0.9",
                    "filter": "alpha(opacity=90)"
                }); //opacity change
            if ($(window).width() > 767) {
                $(this).find('.mobileNavIconsIndex').css({
                    'display': 'none'
                }); //hide icon
                var $child = $(this).find('.bigScreenNavText'); //store text
                if($(window).width() > 896){
                $child.css({
                    'display': 'block',
                    'font-size': '50px',
                    'font-weight':'900',
                    'text-decoration':'underline'
                });//change navText display
                var retrieveAttr=this.id.toUpperCase();//retrieve lower case id on .different & make uppercase
                var thisImage="url('images/"+retrieveAttr+".jpg')"//variable for displaying specific image
                $(this).css({'background-image': thisImage, 'background-repeat':'no-repeat', 'background-position':'center', 'background-size':'cover'})
                }else{
                  $child.css({
                    'display': 'block',
                    'font-size': '30px',
                    'font-weight':'900',
                    'text-decoration':'underline'
                    }); //change navText display
                    var retrieveAttr=this.id.toUpperCase();//retrieve lower case id on .different & make uppercase
                    var thisImage="url('images/"+retrieveAttr+".jpg')"//variable for displaying specific image
                    $(this).css({'background-image': thisImage, 'background-repeat':'no-repeat', 'background-position':'center', 'background-size':'cover'});
                }
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
            $(this).css({'background-image': ''})
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
