
  // When the user scrolls down 20px from the top of the document, slide down the navbar
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("banner").style.top = "0";
    } else {
      document.getElementById("banner").style.top = "-130px";
     
      
    }
  }




  window.addEventListener("scroll", function(){
    var header =document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })

  function menushow() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  




