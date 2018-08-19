function listenProjects(){
     $('.projects-link').on('click', () =>{
         $('html, body').animate({
             scrollTop: $("#projects").offset().top - 100
         }, 1000);
     })
}

function listenContact(){
    $(".contact-link").on('click', () => {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    })
}

function init(){
    listenContact();
    listenProjects();
}

$(init)
