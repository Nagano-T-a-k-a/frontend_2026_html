function calculate(operator) {
  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - #num1 と #num2 の値を Number() で数値に変換する
   * - operator が '+', '-', '*', '/' の場合に対応した計算をする
   * - 結果を #result に表示する
   *   例: "10 + 3 = 13"
   * - '/' の場合、num2 が 0 の場合は「0で割ることはできません」と表示する
   *
   * ヒント:
   * - document.getElementById('num1').value で値を取得できる
   * - if / else if を使って演算子を判定する
   * =========================================
   */
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const result = document.getElementById('result');
  result.textContent = '';

  let resultText = '';
  switch (operator) {
    case '+':
      resultText = `${num1 + num2}`;
      break;
    case '-':
      resultText = `${num1 - num2}`;
      break;
    case '*':
      resultText = `${num1 * num2}`;
      break;
    case '/':
      resultText = num2 === 0 ? '0で割ることはできません' : `${num1 / num2}`;
      break;
  }

  const p = document.createElement('p');
  p.textContent = resultText;
  result.appendChild(p);
}
