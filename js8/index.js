class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.dismissed = false;
        this.marksArr = marks;
    }
    get getInfo() {
        return `Студент курсу ${this.course} в ${this.university}, ${this.fullName}.`;
    }
    get marks() {
        if(!this.dismissed) {
          return this.marksArr;
        } else {
          return null;
        }
    }
    set marks(mark) {
        if(this.marks) {
        this.marksArr.push(mark);
        return this.marksArr;
        } else {
        return null;
    }
    }
    get getAverageMark() {
        if(!this.dismissed) {
        return this.marksArr.reduce((accum, curr) => {
            accum += curr
            return accum;
        }, 0) / this.marks.length;
        } else {
        return null;
        }
    }
    get dismiss(){
        this.dismissed = true;
      }
    
      get recover(){
        this.dismissed = false;
      }
}


//1.
const student1 = new Student("Cursor Education", "Front-End", "Ярослава Кучерява", [5, 4, 4, 5]);

//2.
console.log(student1.getInfo);
//3.
console.log(student1.marks);
//4.
student1.marks = 5;
//5.
console.log(student1.getAverageMark);
//6.
student1.dismiss;
console.log(student1.marks);
console.log(student1.getAverageMark);
//7.
student1.recover
console.log(student1.marks);
console.log(student1.getAverageMark);
