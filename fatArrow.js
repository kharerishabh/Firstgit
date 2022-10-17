class Student {
    static i = 0;
    constructor(name, age, phone_no, board_marks){
    Student.i = Student.i+1;
    this.name = name;
    this.age = age;
    this.phone_no = phone_no;
    this.board_marks = board_marks;
    }
    eligibleForPlacement(minAge){
      return (minMarks) => {
        if(this.board_marks > minMarks && this.age > minAge){
         console.log(`${this.name} is ready for placement`);
           return true;
        }
        else{
          console.log(`${this.name} is not ready for placement`);
          return false
        }
      }
    }
  }
  const stu1 = new Student('Rishabh', 20, 7007376, 50);
  const stu2 = new Student('Rahul', 19, 7007376, 41);
  const stu3 = new Student('Ram', 27, 7007376, 40);
  const stu4 = new Student('Shyam', 23, 7007376, 39);
  const stu5 = new Student('Radhe', 24, 7007376, 60);
  
  console.log(stu1.eligibleForPlacement(18)(40));
  console.log(stu2.eligibleForPlacement(18)(40));
  console.log(stu3.eligibleForPlacement(18)(40));
  console.log(stu4.eligibleForPlacement(18)(40));
  console.log(stu5.eligibleForPlacement(18)(40));
  
  console.log(`The no of student created is ${Student.i}`);