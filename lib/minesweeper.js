// alert("Good luck!"); // Of course you can remove this (annoying) line ;)
const table = document.getElementById('minesweeper');
table.insertAdjacentHTML('beforeend', '<tr><td class="unopened"></td><td class="unopened"></td><td class="unopened"></td></tr>');
const squares = document.querySelectorAll('.unopened');
const rows = document.querySelectorAll('#minesweeper .unopened');
rows.forEach((row) => {
  console.log(row);
  // row.insertAdjacentHTML('afterbegin', '<td class="unopened"></td>');
  // row.insertAdjacentHTML('beforeend', '<td class="unopened"></td>');
  // row.classList.remove('unopened');
});

squares.forEach((square) => {
  square.addEventListener("mousedown", (e) => {
    e.preventDefault();
    console.log(e.button);
    if (e.button === 0) { // if left-click
      square.classList.toggle('opened');
    } else if (e.button === 2) { // if right-click
      square.classList.toggle('flagged');
    }
  });
});
