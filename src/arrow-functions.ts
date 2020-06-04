export {};
//アロー関数に対するアノテーション
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);
//returnの記述を省略できる
console.log(bmi(1.78, 86));

