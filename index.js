let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
    let card1 = document.getElementById('section-3-card-1');
    let card2 = document.getElementById('section-3-card-2');

    let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop){
        card1.className = "card animate__animated animate__fadeInDown animate__delay-1s";
        card2.className = "card animate__animated animate__fadeInDown animate__delay-2s";
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

}, false);

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "60%";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
function collapseDropdown() {
  const status = document.getElementById("sidenav-dropdown-content").style.display;
  if (status == "block"){
    document.getElementById("sidenav-dropdown-content").className = "sidenav-dropdown-content hide";
    setTimeout(() => {
      document.getElementById("sidenav-dropdown-content").style.display = "none";
    }, 450)
    
  }
  else {
    document.getElementById("sidenav-dropdown-content").style.display = "block";
    document.getElementById("sidenav-dropdown-content").className = "sidenav-dropdown-content show"
  }
}
// Get the button:
let mybutton = document.getElementById("go-to-top-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}