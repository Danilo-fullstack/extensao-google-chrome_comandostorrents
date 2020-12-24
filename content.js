console.log("Minha primeira extensao já está rodando!!")

// var classCSS = document.querySelectorAll('.cf')

// var demoClasses = document.querySelectorAll(".entry-content p").style.display = "block"
// console.log(document.querySelectorAll(".entry-content p"))


const demoClasses = document.querySelectorAll('.entry-content p, .entry-content div');

demoClasses.forEach(element => {
  element.style.display = "block";
});

demoClasses[0];

var adblock_detect = document.querySelector(".adblock_detect").style.display = "none"


