let main = document.querySelector(".menu");
let menubtn = document.querySelector(".fa-bars");

menubtn.addEventListener("click", function(){
  if (menubtn.classList.contains("fa-bars")){
  main.style.left = "0";
  menubtn.classList = "fa fa-times"
  }

  else{
    main.style.left = "-256px";
    menubtn.classList = "fa fa-bars"
  }
})
