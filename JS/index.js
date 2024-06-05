/// <reference types="../@types/jquery" />

//Start slide menu
$('.openIcon').on('click', function(){
    $(".slider").css("left", "0")
})

$('.close').on('click', function(){
    $(".slider").css("left", "-250px")
})




//End slide menu


// Start slider down section

$('.singers').on('click', function(e){
    let inner =  $(e.target);
    $('.singer-info').not(inner.next()).slideUp(500);
    inner.next().slideToggle(500);
})

// End slider down section


/* Start Counter section */

   window.onload = function() {
   
    countDownToTime("2024-01-31T03:15:30");
  }

  function countDownToTime(countTo) {
  
    let futureDate = new Date(countTo);
        futureDate = (futureDate.getTime()/1000);

    let now = new Date();
        now = (now.getTime()/1000);

    timeDifference = (futureDate - now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {countDownToTime(countTo)}, 1000);
}


/* End Counter section */

/* Start Contact section */

$('textarea').on('keyup', function(){
    
    let length = $(this).val().length;
    $('.char').text(
        100-length <= 0 ? 'Your available character finish' : 100-length
    )

})

/* End Contact section */