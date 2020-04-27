$(document).ready(function(){

    $("header, .info").ripples({
        dropRadius: 10,
        perturbance:0.1,
    });
    //BOTÃO TOGGLER
    $('.navbar-toggler').on('click', function(){
        $('.navbar-toggler').toggleClass('change')
    })

    // MAGNIFIC POP UP
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',
    

        gallery:{
            enabled: true
        }
    })

    // CARROEL DE IMAGENS DO CARDAPIO
    $('.carrosel').slick({
        centerMode: true,
        mobileFirst: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    })

// CARROSEL DE IMAGENS DA CHURRASCARIA
$(".fotos-churrascaria").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 700,
    infinite: true,
    speed: 2000,
    arrows: false,
    fade: true,
    cssEase: 'linear',

})

// FIXAR O MENU DE NAVEGAÇÃO NO TOPO DA PÁGINA
$(window).scroll(function(){
    let position = $(this).scrollTop();

    if(position >= 718){
        $('.navbar').addClass('navbar-background');
        $('.navbar').addClass('fixed-top');
    }else{
        $('.navbar').removeClass('navbar-background');
        $('.navbar').removeClass('fixed-top');
    }
});

// BOTÃO DE VOLTAR AO TOPO DA PÁGINA
$(window).scroll(function(){
    let position = $(this).scrollTop();

    if(position >= 718){
        $('#voltar-topo').addClass('scrollTop');
    }else{
        $('#voltar-topo').removeClass('scrollTop');
    }
});

})

