export {};
//アクセス修飾子について

class Person {
  public name: string;
  protected age: number;
  protected nationality: string;
// 言語使用としてconstructorには戻り値に型設定しない
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}


let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
//console.log(taro.age);
//let hanako = new Person();

let robo = new Android('Robo', 150, 'labo');
console.log(robo.profile())
// console.log(robo.nationality);