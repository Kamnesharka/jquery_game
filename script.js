$(document).ready(function() {
    let started = false;
    function hideCards() {
        $('.open').addClass('active');
        $('.open').removeClass('open');
        activeClass = undefined;
        timeOut = false;
    }
                
    $('.none').css('display', 'none');
    $('#start').on('click', function(event) {
        activeItems = 0;
        if(!started) {
            $('.img').addClass('active');
            $('#start').text('FINISH');
            started = true;
            $('.none').css('display', 'none');
            $('.img').removeClass('match');
            $('.img').removeClass('open');
            activeItems = 0;
        } else {
            $('.img').removeClass('active');
            $('#start').text('START');
            started = false;
        }
       
    })

    let classList = ['git', 'inst', 'telegram', 'twit', 'you'];
    let activeClass;
    let machedItems = $('.img').length / 2;
    let activeItems = 0;
    let timeOut = false;
    
    $('.img').on('click', function(event) {
        if(!started) {
            return;
        }
        if($(this).hasClass('open') || $(this).hasClass('match')){
            return;
        }
        if(timeOut) {
            return;
        }
        $(this).addClass('open');

        if(activeClass == undefined) {
            $(this).removeClass('active');
            
            for(let i=0; i<classList.length; i++) {
                if ($(this).hasClass(classList[i])) {
                    activeClass = classList[i];
                    break;
                } 
            }
        } else {
            $(this).removeClass('active');
            if($(this).hasClass(activeClass)){
                $(this).addClass('match');
                $('.' + activeClass).addClass('match');
                $('.' + activeClass).removeClass('open');
                activeClass = undefined;
                activeItems++;
                if(activeItems == machedItems) {
                    $('#start').text('START');
                    started = false;
                    
                    $('.none').css('display', 'block');
                }
                console.log(activeItems);
            } else {
                timeOut = true;
                setTimeout(hideCards, 2000);
            }   
        }
    })
})