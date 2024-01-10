interface Teacher {
  readonly firstName: string;
  readonly fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

// task 1 - Let's build a Teacher interface
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

// task 2 - Extending the Teacher class
interface Directors extends Teacher {
  numberOfReports: number;
}

// task 3 - Printing teachers
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = function (firstName, lastName) {
  return `${firstName[0]}. ${lastName}`;
};

// task 4 - Writing a class
interface Student {
  firstName: string;
  lastName: string;
}

class StudentClass implements Student {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
