function showDaysInMonth() {
  // ここにコードを書いてください
  // ヒント: Number() で入力値を数値に変換する
  // ヒント: うるう年の判定: (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  // ヒント: switch 文で月に対応する日数を求める
  //   - 1,3,5,7,8,10,12月 → 31日
  //   - 4,6,9,11月 → 30日
  //   - 2月 → うるう年なら29日、それ以外は28日
  // ヒント: 三項演算子でうるう年かどうかを表示する
  // ヒント: #days-output の textContent に結果を表示する
  const month = Number(document.getElementById('month-input').value);
  const year = Number(document.getElementById('year-input').value);
  const output = document.getElementById('days-output');
  output.textContent = '';

  const isLeap = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  let days = 0;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = isLeap(year) ? 29 : 28;
      break;
  }

  let p = document.createElement('p');
  p.textContent = days + '日';
  output.appendChild(p);
  p = document.createElement('p');
  p.textContent = isLeap(year);
  output.appendChild(p);
}
