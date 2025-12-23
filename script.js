const form = document.getElementById("gpaForm");
const subjectDiv = document.getElementById("subjects");
const resultDiv = document.getElementById("result");
const addBtn = document.getElementById("addSubject");


function getPoints(score) {
  if (score >= 70) return 5;  //A
  else if (score >= 60) return 4; //B
  else if (score >= 50) return 3; //C
  else if (score >= 45) return 2; //D
  else if (score >= 40) return 1; //E
  else return 0; //F
}


function addSubject() {
  const div = document.createElement("div");
  div.classList.add("subject");
  div.innerHTML = `
  <input type= "number" placeholder="Score" class="score" required>
  <input type= "number" placeholder="Units" class="units" required>
  `;
  subjectDiv.appendChild(div);
}


form.addEventListener("submit", function (e) {
  e.preventDefault();

  const scores = document.querySelectorAll(".score");
  const units = document.querySelectorAll(".units");

  let totalQualityPoints = 0;
  let totalUnits = 0;
   
  scores.forEach((scoreInput, i) => {
    let score = parseInt(scoreInput.value);
    let unit = parseInt(units[i].value);

    let points = getPoints(score);

    totalQualityPoints += points * unit;
    totalUnits += unit;
  });

  let gpa = (totalQualityPoints / totalUnits).toFixed(2);
  resultDiv.textContent = `Your GPA is ${gpa}`;
});

addSubject();

addBtn.addEventListener("click", addSubject);
