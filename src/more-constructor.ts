export {};
//コンストラクターではメンバー変数の初期化を行っている
//typescriptではconstructorメソッドの引数にアクセス修飾子をつけることで自動で初期化処理をしてくれる
class Person {
  constructor(public name: string, protected age: number){}
}

const me = new Person('はむさん', 43);
console.log(me);
