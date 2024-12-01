document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.querySelector("dialog");
    const openButton = document.querySelector("#openButton"); 
    const closeButton = document.querySelector("#closeButton"); 
  
    openButton.addEventListener("click", () => {
      dialog.showModal();
    });
  
    closeButton.addEventListener("click", () => {
      dialog.close();
    });
  });