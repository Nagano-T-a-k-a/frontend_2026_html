function showWeatherMessage() {
  /**
   * =========================================
   * ここにコードを書いてください
   *
   * 要件:
   * - #weather-select の value を取得する
   * - if / else if / else で天気に応じたメッセージを決める
   *   - 'sunny'  → 「今日は晴れです。お出かけ日和ですね！」
   *   - 'cloudy' → 「今日は曇りです。念のため傘を持っていきましょう。」
   *   - 'rainy'  → 「今日は雨です。傘を忘れずに！」
   *   - 'snowy'  → 「今日は雪です。暖かくして出かけましょう。」
   *   - それ以外 → 「天気情報が不明です。」
   * - #weather-message の textContent にメッセージを設定する
   *
   * ヒント:
   * - document.getElementById('weather-select').value で選択値を取得できる
   * =========================================
   */
  const weather = document.getElementById('weather-select').value;
  const output = document.getElementById('weather-message');
  output.textContent = '';

  let message = '';
  if (weather === 'sunny') {
    message = '今日は晴れです。お出かけ日和ですね！';
  } else if (weather === 'cloudy') {
    message = '今日は曇りです。念のため傘を持っていきましょう。';
  } else if (weather === 'rainy') {
    message = '今日は雨です。傘を忘れずに！';
  } else if (weather === 'snowy') {
    message = '今日は雪です。暖かくして出かけましょう。';
  } else {
    message = '天気情報が不明です。';
  }

  output.textContent = message;
}
