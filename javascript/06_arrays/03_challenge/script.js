function processNumbers() {
  // ここにコードを書いてください
  // ヒント: document.getElementById('numbers-input').value で入力値を取得
  // ヒント: .split(',') でカンマ区切りの文字列を配列にする
  // ヒント: .map(Number) で文字列の配列を数値の配列に変換する
  // ヒント: .filter(n => n % 2 === 0) で偶数だけ取り出す
  // ヒント: .map(n => n * 2) で各要素を2倍にする
  // ヒント: 各ステップの結果を #numbers-output に innerHTML で表示する
  let numbers = document.getElementById('numbers-input').value;
  const output = document.getElementById('numbers-output');
  output.textContent = '';

  // numbers = numbers.split(',');
  // let p = document.createElement('p');
  // p.textContent = numbers.join(', ');
  // output.appendChild(p);

  // numbers = numbers.map(Number);
  // p = document.createElement('p');
  // p.textContent = numbers.join(', ');
  // output.appendChild(p);

  // numbers = numbers.filter(n => n % 2 === 0);
  // p = document.createElement('p');
  // p.textContent = numbers.join(', ');
  // output.appendChild(p);

  // numbers = numbers.map(n => n * 2);
  // p = document.createElement('p');
  // p.textContent = numbers.join(', ');
  // output.appendChild(p);

  const answers = [];
  numbers = numbers.split(',');
  answers.push(numbers);

  numbers = numbers.map(Number);
  answers.push(numbers);

  numbers = numbers.filter(n => n % 2 === 0);
  answers.push(numbers);

  numbers = numbers.map(n => n * 2);
  answers.push(numbers);

  answers.forEach((array, i) => {
    p = document.createElement('p');
    p.textContent = `${i + 2}.　　` + array.join(', ');
    output.appendChild(p);
  })
}
