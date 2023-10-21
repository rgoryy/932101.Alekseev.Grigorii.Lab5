var buttons = document.querySelectorAll(".block-button");
var modals = document.querySelectorAll(".modal");

buttons.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    modals[index].classList.add("open");
  });
});

modals.forEach(function(modal) {
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('open');
        }
    });
});