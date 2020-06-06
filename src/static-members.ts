export {};

// 静的メンバ

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    //     "Hey, guys! This is Astushi! Are you interested in TypeScript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}
// 動的メンバへのアクセス、毎回インスタンスを作る必要がある
// let me = new Me();
// console.log(me.isProgrammer);

//静的メンバへのアクセス、newインスタンス作らない
console.log(Me.isProgrammer);
console.log(Me.work());
