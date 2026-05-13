function generateSplitMessage() {
  // ここにコードを書いてください
  // ヒント: 入力値を取得して Number() で数値に変換する
  // ヒント: 1人分 = Math.floor(合計 / 人数)  (小数点切り捨て)
  // ヒント: テンプレートリテラルで複数行のメッセージを作成する
  // ヒント: #split-output の textContent に設定する
  const eventName = document.getElementById('event-name').value;
  const totalBill = Number(document.getElementById('total-bill').value);
  const numPeople = Number(document.getElementById('num-people').value);
  const output = document.getElementById('split-output');
  output.textContent = '';

  const billOnePerson = Math.floor(totalBill / numPeople);

  const message = `今回は${eventName}にお集まりいただき、誠にありがとうございます。
合計金額は${totalBill}円だったため、お一人当たり${billOnePerson}円頂戴いたします。`;

  const p = document.createElement('p');
  p.textContent = message;
  output.appendChild(p);
}
