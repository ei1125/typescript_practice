export {};

class Mahotsukai {}
class Souryo {}
//classでは多重継承できない
// class Taro extends Mahotsukai, Souryo {}

//処理の実態が分からないような宣言＝シグネチャー
interface Kenja {
  ionazun(): void;
}

interface Senshi{
  kougeki(): void;
}

//interfaceで多重継承のようなことができる、多重実装
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
