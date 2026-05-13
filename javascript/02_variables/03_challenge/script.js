function calcBMI() {
  // ここにコードを書いてください
  // ヒント: Number() で文字列を数値に変換する
  // ヒント: 身長は cm → m に変換が必要 (÷ 100)
  // ヒント: BMI = 体重 / (身長m * 身長m)
  // ヒント: bmi.toFixed(2) で小数点2桁に丸める
  // ヒント: if/else で判定して document.getElementById('bmi-result').textContent に表示する
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const resultDiv = document.getElementById('bmi-result');
  resultDiv.textContent = '';
  // mに直す
  const height = Number(heightInput.value) / 100;
  const weight = Number(weightInput.value);

  const bmi = weight / (height * height);
  let text = `BMI: ${bmi.toFixed(2)}　　`;
  if (bmi < 18.5) {
    text += 'やせ';
  } else if (bmi < 25) {
    text += '普通';
  } else {
    text += '肥満';
  }

  const p = document.createElement('p');
  p.textContent = text;
  resultDiv.appendChild(p);
}
