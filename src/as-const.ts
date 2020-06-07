export {};

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const;

nickname = 'Ham';

//as constすることですべてreadonlyになる
// ネストも全て
let profile = {
  name: 'Atsushi',
  height: 178
} as const;

// profile.name = 'Ham';
// profile.height = 180;