
document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.querySelector("#dialog");
  const openButton = document.querySelector("#openButton"); 
  const closeButton = document.querySelector("#closeButton"); 


  openButton.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const dialog1 = document.querySelector("#dialog1");
  const openButton1 = document.querySelector("#openButton1"); 
  const closeButton1 = document.querySelector("#closeButton1"); 


  openButton1.addEventListener("click", () => {
    dialog1.showModal();
  });

  closeButton1.addEventListener("click", () => {
    dialog1.close();
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const dialog2 = document.querySelector("#dialog2");
  const openButton2 = document.querySelector("#openButton2"); 
  const closeButton2 = document.querySelector("#closeButton2"); 


  openButton2.addEventListener("click", () => {
    dialog2.showModal();
  });

  closeButton2.addEventListener("click", () => {
    dialog2.close();
  });
});







