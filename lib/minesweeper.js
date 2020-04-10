// alert("Good luck!"); // Of course you can remove this (annoying) line ;)
const squares = document.querySelectorAll('.unopened');
squares.forEach((square) => {
  square.addEventListener("mousedown", (e) => {
    e.preventDefault();
    console.log(e.button);
    if (e.button === 0) {
      square.classList.toggle('opened');
    } else if (e.button === 2) {
      square.classList.toggle('flagged');
    }
  });
});
