document.addEventListener("DOMContentLoaded", function() {
    var accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach(function(header) {
      header.addEventListener("click", function() {
        this.classList.toggle("active");
  
        var accordionContent = this.nextElementSibling;
        if (accordionContent.style.display === "block") {
          accordionContent.style.display = "none";
        } else {
          accordionContent.style.display = "block";
        }
      });
    });
  });