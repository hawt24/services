(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    const $logo = $('#logo');
    const $brandText = $('#brand-text');

    function switchToBlueLogo() {
        $logo.attr('src', 'img/EMs.png');
        $brandText.addClass('blue');
    }

    function switchToWhiteLogo() {
        $logo.attr('src', 'img/EMs logo 1.png');
        $brandText.removeClass('blue');
    }

    // Sticky Navbar and Logo switch on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
            switchToBlueLogo();
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
            switchToWhiteLogo();
            
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });


 
function emailSend() {
    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var messageBody = "Name: " + userName +
                      "<br/>Email: " + email +
                      "<br/>Subject: " + subject +
                      "<br/>Message: " + message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "your-smtp-username",
        Password: "your-smtp-password",
        To: 'kemalsiraj24@gmail.com',
        From: "website@example.com",
        Subject: subject,
        Body: messageBody
    }).then(
        message => {
            if (message === 'OK') {
                alert("Message sent successfully!");
            } else {
                alert("Failed to send message. Please try again.");
            }
        }
    );
}


    
})(jQuery);

