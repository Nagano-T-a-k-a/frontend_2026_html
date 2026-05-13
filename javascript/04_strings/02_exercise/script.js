function generateGreeting() {
  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - #input-name, #input-age, #input-place, #input-hobby の値を取得する
   * - テンプレートリテラル（バッククォート）を使ってメッセージを作成する
   * - #greeting-output の textContent にメッセージを設定する
   *
   * 表示例:
   *   はじめまして！
   *   私の名前は田中 太郎です。
   *   年齢は24歳で、東京出身です。
   *   趣味は読書です。
   *   よろしくお願いします！
   *
   * ヒント:
   * - テンプレートリテラルの中で改行すると、実際に改行される
   * - document.getElementById('input-name').value で値を取得できる
   * =========================================
   */

  const name = document.getElementById('input-name').value;
  const age = document.getElementById('input-age').value;
  const place = document.getElementById('input-place').value;
  const hobby = document.getElementById('input-hobby').value;
  const output = document.getElementById('greeting-output');
  output.textContent = '';

  const greeting = `はじめまして！
私の名前は${name}です。
年齢は${age}歳で、${place}出身です。
趣味は${hobby}です。
よろしくお願いします！
`;

  const p = document.createElement('p');
  p.textContent = greeting;
  output.appendChild(p);
}
