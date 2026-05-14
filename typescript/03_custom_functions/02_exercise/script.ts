/**
 * =====================================
 * 問題：showMessage を完成させる
 *
 * 条件：
 * - 引数に型をつける
 * - 戻り値の型をつける
 * - text と type を使って表示する
 *
 * ヒント：
 * - type は "error" または "success"
 * =====================================
 */
function addItem(text: string): void {
  const list = document.getElementById('list') as HTMLUListElement;
  const li = document.createElement('li') as HTMLLIElement;

  li.textContent = text;
  list.appendChild(li);
}

function showMessage(text: string, type: 'error' | 'success') {
  // ここに実装
  if (type === 'error') text += '❌';
  else if (type === 'success') text += '✅';

  addItem(text);
}

function run() {
  const list = document.getElementById('list') as HTMLUListElement;
  list.innerHTML = '';

  showMessage('保存できました', 'success');
  showMessage('エラーが発生しました', 'error');

  // 型確認
  // showMessage("テスト", "warning");
}

(window as any).run = run;
