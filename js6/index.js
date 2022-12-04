const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  // завдання 1 - створити функцію, яка повертає список предметів для конкретного студента
  const getSubjects = (student) => {
    const studentKeys = Object.keys(student.subjects);
  
    let studentSubjects = studentKeys.map((sk) => {
      let upperSubject = sk[0].toUpperCase() + sk.slice(1);
      return upperSubject.replace("_", " ");
    });
    return studentSubjects;
  };
  console.log(getSubjects(students[0]));

  // завдання 2 - створити функцію, яка повертає середню оцінку по усім предметам для переданого студента
  const getAverageMark = (students) => {
    const subjectValues = Object.values(students.subjects).flat();
    const subjectMarks = subjectValues.reduce((acc, item) => acc + item);
    return (subjectMarks / subjectValues.length).toFixed(2);
  };
  console.log(getAverageMark(students[0]));

  // завдання 3 - створити функцію, яка повертає інформацію загального виду по переданому студенту
  const getStudentInfo = (students) => {
    return {
      name: students.name,
      course: students.course,
      averageMark: getAverageMark(students),
    };
  };
  console.log(getStudentInfo(students[0]));

  // завдання 4 - створити функцію, яка повертає імена студентів у алфавітному порядку
  const getStudentsNames = (students) => students.map((sn) => sn.name).sort();
  console.log(getStudentsNames(students));

  // завдання 5 - створити функцію, яка повертає кращого студента зі списку по показнику середньої оцінки
  const getBestStudent = (students) =>  {
  const bestMark = students.map((elem) => +getAverageMark(elem));
  let maxMark = bestMark.indexOf(Math.max(...bestMark));
  return students[maxMark].name;
  };
  console.log(getBestStudent(students));

  // завдання 6 - створити функцію, яка повертає об'єкт, в якому ключі це букви у слові, а значення – кількість їх повторень
  const calculateWordLetters = (str) => {
    const arrOfLetters = str.split('')
    const count = {};

    arrOfLetters.forEach(function(i) {
      count[i] = (count[i] || 0) + 1; 
    });
  return count
  }
  console.log(calculateWordLetters('test'))