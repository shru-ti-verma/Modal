

const button = document.querySelector(".btn");
  const modal = document.querySelector(".modal");
     const  close = document.querySelector(".close")

button.addEventListener("click",openPop);
close.addEventListener("click",closepop);
modal.addEventListener("click",closepop);


function openPop(e) {
  e.preventDefault();
  modal.style.display ="block";
};

function closepop() {
  modal.style.display = "none";
};

