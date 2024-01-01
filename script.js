const form = document.querySelector("form");
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const subject = document.getElementById("subject")
const message = document.getElementById("textarea")

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "xenawihadush@gmail.com",
        Password : "807348216829E800A4058C4DA71430F698B9",
        To : 'xenawihadush@gmail.com',
        From : "xenawihadush@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == 'OK'){
            Swal.fire({
                title: "Success!",
                text: "Sent!",
                icon: "success"
              });
        }
      }
    );
}

function checkInput(){
    const items = document.querySelectorAll(".item");
    for(const item of items){
        if(item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        item.addEventListener("keyup", () => {
            if(item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput()

    // sendEmail();

});


$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
            // $('.dark-mode').addClass('show');
        }else{
            $('.navbar').removeClass('sticky');
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
        // if (this.scrollY > 10){
        //     $('.dark-mode').addClass('show');
        // }else{
        //     $('.dark-mode').removeClass('show');
        // }
    });

    // slide up script

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })

    // toggle menu/navbarscript
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // typing Animation script

    var typed = new Typed(".typing", {
        strings: ['Developer', 'Freelancer', 'Designer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    var typed = new Typed(".typing-2", {
        strings: ['Developer', 'Freelancer', 'Designer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});