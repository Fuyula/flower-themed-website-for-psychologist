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
