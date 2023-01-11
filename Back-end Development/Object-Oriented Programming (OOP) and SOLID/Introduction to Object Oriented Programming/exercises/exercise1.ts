interface ErrorMessage {
  message: string;
};

class Student {
  private _registration: string;
  private _name: string;
  private _examScores: number[];
  private _schoolWorkScores: number[];

  constructor (reg: string, name: string) {
    this._registration = reg;
    this._name = name;
    this._examScores = [];
    this._schoolWorkScores = [];
  };

  get name (): string {
    return this._name;
  };

  get registration (): string {
    return this._registration;
  };

  get examScores (): number[] {
    return this._examScores;
  };

  set name (name: string) {
    if (name.length < 3) {
      throw new Error("Error: name must contain more than 3 characteres");      
    } else {
      this._name = name;
    }
  };

  set examScores (value: number[]) {
    if (value.length !== 4) {
      throw new Error("Error: examScores must contain 4 items")
    } else {
      this._examScores = value;
    }
  }

  set schoolWorkScores (value: number[]) {
    if (value.length !== 2) {
      throw new Error("Error: schoolWorkScores must contain 2 items")
    } else {
      this._schoolWorkScores = value;
    }
  }

  getScoresSum (): number {
    const examsSum = this._examScores.reduce((acc, curr) => acc + curr, 0);

    const schoolWorksSum = this._schoolWorkScores.reduce((acc, curr) => acc + curr, 0);
    
    return examsSum + schoolWorksSum;
  };

  getAverageScore (): number {
    const score = this.getScoresSum();

    const divider = this._examScores.length + this._schoolWorkScores.length;    

    return score/divider;
  };
};

const student1 = new Student("student1", "Philip");

// try {
  //   student1.name = "Philip Lages"; 
  //   console.log("Name: ", student1.name);  
// } catch (error: unknown) {
  //   const { message } = error as ErrorMessage;
  //   console.log(message);  
  // }
  
  try {    
  student1.examScores = [7, 8, 9, 10];
  console.log(student1.examScores);  
  student1.schoolWorkScores = [6, 8];
} catch (error: unknown) {
  const { message } = error as ErrorMessage;
  console.log(message);  
}

console.log("Sum: ", student1.getScoresSum());
console.log("Average: ", student1.getAverageScore().toFixed(2));