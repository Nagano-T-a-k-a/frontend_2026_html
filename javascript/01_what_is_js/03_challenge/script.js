let isDark = false;

function toggleTheme() {
  // ここに #main-box の背景色を白と黒で切り替えるコードを書いてください
  // ヒント: isDark フラグを使って現在の状態を管理する
  //         document.getElementById('main-box').style.backgroundColor で色を変更する
  //         文字色も一緒に切り替えると見やすくなります
  const darkMode = { color: '#555', textColor: '#fff' };
  const lightMode = { color: '#fff', textColor: '#333' };
  const mainBox = document.getElementById('main-box');

  if (isDark) {
    mainBox.style.backgroundColor = lightMode.color;
    mainBox.style.color = lightMode.textColor;
  } else {
    mainBox.style.backgroundColor = darkMode.color;
    mainBox.style.color = darkMode.textColor;
  }

  isDark = !isDark;
}

function addText() {
  // ここにテキストを #text-list に追加するコードを書いてください
  // ヒント:
  // - document.getElementById('text-input').value で入力値を取得する
  // - 空の場合は何もしない
  // - document.createElement('li') でリストアイテムを作成する
  // - 入力欄を空にする（入力後にクリアする）
  const input = document.getElementById('text-input');
  const list = document.getElementById('text-list');
  const value = input.value;

  if (value === '') return;

  const li = document.createElement('li');
  li.textContent = value;
  list.appendChild(li);

  input.value = '';
}

function clearList() {
  // ここに #text-list を空にするコードを書いてください
  document.getElementById('text-list').textContent = '';
}
