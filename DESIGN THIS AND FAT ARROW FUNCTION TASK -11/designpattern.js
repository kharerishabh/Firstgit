class Student {
    static i = 0;
    constructor(name, age, phone_no, board_marks){
    Student.i = Student.i+1;
    this.name = name;
    this.age = age;
    this.phone_no = phone_no;
    this.board_marks = board_marks;
    }
    printEligibilty(){
      if(this.board_marks > 40){
        console.log(`${this.name} is eligible`);
      }
      else{
        console.log(`${this.name} is not eligible`);
      }
    }
  }
  const stu1 = new Student('Rishabh', 20, 7007376, 50);
  const stu2 = new Student('Rahul', 21, 7007376, 35);
  const stu3 = new Student('Ram', 22, 7007376, 40);
  const stu4 = new Student('Shyam', 23, 7007376, 39);
  const stu5 = new Student('Radhe', 24, 7007376, 60);
  
  stu1.printEligibilty();
  stu2.printEligibilty();
  stu3.printEligibilty();
  stu4.printEligibilty();
  stu5.printEligibilty();
  console.log(`The no of student created is ${Student.i}`);