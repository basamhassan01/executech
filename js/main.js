$(document).ready(function() {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // cleck event on toggle menu
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })

    // owl carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    });

});


// Newsletter Email List Script
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwbB3Qhr-4NZm-SWkajsd37b1Srtlw5Vop9dOkfUT1xDL-tQ2PSz6lhjIOrm9heKM0h8Q/exec'
  const form = document.forms['submit-to-google-sheet']
  const newsMsg =document.getElementById("news-msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        newsMsg.innerHTML = "Thank You For Subscribing!"
        setTimeout(function(){
            newsMsg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


  // Animation Code block
  window.addEventListener('scroll', reveal);
  window.addEventListener('resize', reveal);

  function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {

      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if(revealtop < windowheight -revealpoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
