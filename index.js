let turn = "X";
const turnForEl = document.querySelector(".turn-for");
const boxes = document.getElementsByClassName("box");
const winBorder = document.querySelector(".win-border");
const winner = document.getElementById("winner");
const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", () => {
  location.reload();
});
const winChecks = () => {
  let boxContent = document.querySelectorAll(".box span");

  let winScenes = [
    [0, 1, 2, 19, 49, 0],
    [0, 4, 8, 19, 161, 225],
    [0, 3, 6, -93, 160, 90],
    [1, 4, 7, 20, 160, 90],
    [2, 5, 8, 131, 160, 90],
    [3, 4, 5, 19, 160, 0],
    [6, 7, 8, 19, 272, 0],
    [2, 4, 6, 19, 159, 135],
  ];
  winScenes.forEach((e, i) => {
    if (
      boxContent[e[0]].innerText === boxContent[e[1]].innerText &&
      boxContent[e[1]].innerText === boxContent[e[2]].innerText &&
      boxContent[e[0]].innerHTML != ""
    ) {
      winBorder.style.transform = `translate(${e[3]}px,${e[4]}px) rotate(${e[5]}deg)`;
      winBorder.style.opacity = "1";
      turnForEl.style.animation = "anim 1s linear infinite";

      boxContent[e[0]].style.fontSize = "90px";
      boxContent[e[1]].style.fontSize = "90px";
      boxContent[e[2]].style.fontSize = "90px";
      turnForEl.style.display = "none";

      winner.innerText = boxContent[e[0]].innerHTML + " have won this game";
      restartBtn.style.display = "block";
    }
  });
};

Array.from(boxes).forEach((box, i) => {
  box.addEventListener("click", (e) => {
    const boxContent = e.target.querySelector("span");
    boxContent.innerHTML = turn;
    turn === "O" ? (turn = "X") : (turn = "O");
    winChecks();

    turnForEl.innerHTML = `Turn for ${turn}`;
  });
});
