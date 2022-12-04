const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

// Розділити студентів на пари
debugger
function pairs(students){
    const maleArray = [];
    const femaleArray = [];
    const pair = [];
    
    for (let i = 0; i < students.length; i++) {
    const isFemale = students[i].endsWith("а");
        if (isFemale) {
            femaleArray.push(students[i]);
            continue;
        }
        maleArray.push(students[i]);
    }
    
    for (let i = 0; i < femaleArray.length; i++) {
        pair.push(maleArray[i], femaleArray[i]);
    }
    return pair;
}
const studentsPairs = pairs(students);
console.log(studentsPairs);

//Зіставити студентів і пари

function themesForStudentPairs(studentsPairs){
    const pairThemes = [];
    for(let i = 0; i < studentsPairs.length; i++) {
        conglutination = studentsPairs[i].join(" i ");
        pairThemes.push([conglutination, themes[i]]);
    }
    return pairThemes;
}
const studentsThemes = themesForStudentPairs(studentsPairs);
console.log(studentsThemes);

// Зіставити оцінки з студентами

function studentsMarks(students, marks){
    const score = [];
    for(i = 0; i < students.length; i++){
    score.push([students[i], marks[i]])
    }
    return score;
}
const studentsScores = studentsMarks(students,marks);
console.log(studentsScores);

// Поставити випадкову оцінку
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min++)) + min;
  }
  
function randomMark(studentsThemes) {
   const randomThemesResult = [];
   const minMark = 1;
   const maxMark = 5;
   for (let i = 0; i < studentsThemes.length; i++) {
      let randomThemesScore = getRandomNumber(0, minMark, maxMark);
      randomThemesResult.push(studentsThemes[i].concat(randomThemesScore));
   }
   return randomThemesResult;
  }
  
  const randomScores = randomMark(studentsThemes);
  console.log(randomScores);


