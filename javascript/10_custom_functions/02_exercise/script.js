function addItem(text) {
  const list = document.getElementById('list');
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

/**
 * =====================================
 * ここに関数を書いてください
 *
 * showMessage(text, type)
 * =====================================
 */
function showMessage(text, type) {
  let message = text;
  if (type === 'error') message += '❌';
  else if (type === 'success') message += '✅';

  addItem(message);
}

function run() {
  const list = document.getElementById('list');
  list.innerHTML = '';

  showMessage('保存できました', 'success');
  showMessage('エラーが発生しました', 'error');
}
