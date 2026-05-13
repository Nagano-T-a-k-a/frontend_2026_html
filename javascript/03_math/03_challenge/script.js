function calcTip() {
  // ここにコードを書いてください
  // ヒント: Number() で入力値を数値に変換する
  // ヒント: チップ金額 = 請求金額 * (チップ率 / 100)
  // ヒント: 合計 = 請求金額 + チップ金額
  // ヒント: 1人分 = 合計 / 人数
  // ヒント: toFixed(2) で小数点2桁に丸める
  // ヒント: document.getElementById('tip-result').innerHTML に表示する

  const bill = Number(document.getElementById('bill').value);
  // %を小数に直す
  const tipRate = Number(document.getElementById('tip-rate').value) / 100;
  const people = Number(document.getElementById('people').value);
  const output = document.getElementById('tip-result');
  output.textContent = '';

  const tip = bill * tipRate;
  const total = bill + tip;

  const p1 = document.createElement('p');
  p1.textContent = `チップ: ${tip.toFixed(2)}`;
  output.appendChild(p1);
  const p2 = document.createElement('p');
  p2.textContent = `合計: ${total.toFixed(2)}`;
  output.appendChild(p2);
  const p3 = document.createElement('p');
  p3.textContent = `一人当たりの金額: ${total / people}`;
  output.appendChild(p3);
}
