require([
    'jquery',
    'accordion',
    'filter/owl.carousel'
], function (jQuery) {
    if(jQuery(window).width() > 767) {
        jQuery(window).scroll(function () {
            var scroll = jQuery(window).scrollTop();

            if (scroll >= 100) {
                jQuery(".page-wrapper").addClass("fixed-wrapper");
                jQuery(".page-header").addClass("fixed");
                jQuery(".nav-sections").addClass("fixed-nav");
                jQuery(".page-main").css("margin-top", "230px");
            } else {
                jQuery(".page-wrapper").removeClass("fixed-wrapper");
                jQuery(".page-header, .nav-sections").removeClass("fixed");
                jQuery(".nav-sections").removeClass("fixed-nav");
                jQuery(".page-main").css("margin-top", "0");
            }
        });
    }

    if(jQuery(window).width() <= 767) {
        jQuery('.page-title-wrapper').prependTo('.product-licence-input');
    }

    jQuery(document).ready(function () {
        if (jQuery('#go-to-top').length) {
            var scrollTrigger = 100, // px
                backToTop = function () {
                    var scrollTop = jQuery(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        jQuery('#go-to-top').addClass('show');
                    } else {
                        jQuery('#go-to-top').removeClass('show');
                    }
                };
            backToTop();
            jQuery(window).on('scroll', function () {
                backToTop();
            });
            jQuery('#go-to-top').on('click', function (e) {
                e.preventDefault();
                jQuery('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
    });

    jQuery(document).ready(function () {
        // Checkout aggrements checkbox
        jQuery('.checkout-agreement').addClass('custom field');

        jQuery('.tooltip-versand').click(function () {
            jQuery('.tooltip-versand-open').toggle();
        });
        jQuery('.click-more2').hide();
        jQuery('.click-more3').hide();

        jQuery('.click-more5').click(function () {
            jQuery(this).hide();
            jQuery('.more5').show();
            jQuery('.click-more2').show();

        });
        jQuery('.click-more2').click(function () {
            jQuery(this).hide();
            jQuery('.more2').show();
            jQuery('.click-more3').show();
        });
        jQuery('.click-more3').click(function () {
            jQuery(this).hide();
            jQuery('.more3').show();
        });

        jQuery('.description-product').click(function () {
            jQuery(this).hide();
            jQuery('.more-description').show();
        });
        
        // Accordion
        jQuery('#footer-mobile, .footer-top-mob #element').accordion({
            collapsible: true,
            heightStyle: 'content',
            active: '-1',
            animate: {duration: 300, easing: 'easeOutCubic'}
        });

        jQuery(".login-toggler > .field label").click (function(){
            var $this = jQuery(this);
            var target = $this.data('content');
            jQuery('.login-toggler > .field label').not($this).each(function(){
                var $other = jQuery(this);
                var otherTarget = $other.data('content');
                jQuery(otherTarget).hide();
            });

            jQuery(target).show();

        });

        jQuery('.mobile-slide').owlCarousel({ 
            nav: true, 
            dots: true,  
            items: 1 ,
            autoplay:true,  
            loop:true,
            navClass:['owl-prev','owl-next'],
            navigation : true,
            stagePadding: 0,
            margin:0,
            singleItem:true,
            autoHeight : true,
        });
        jQuery(".close-nav").on("click", function() {
            var html = jQuery('html');
            if (html.hasClass('nav-open')) {
                html.removeClass('nav-open');
                setTimeout(function () {
                    html.removeClass('nav-before-open');
                }, 300);
            }
        })
    })
    
});
