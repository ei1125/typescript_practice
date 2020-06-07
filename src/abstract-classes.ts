export {};
//抽象メソッド、実装漏れをなくす仕組み
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}
//cry()がないとエラーが出る
class Tiger extends Animal {
  cry() {
    return 'grrrr';
  }
}
