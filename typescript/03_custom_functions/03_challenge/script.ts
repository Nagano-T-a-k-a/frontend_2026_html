function addItem(text: string): void {
  const list = document.getElementById('cart-list') as HTMLUListElement;
  const li = document.createElement('li');

  li.textContent = text;
  list.appendChild(li);
}

/**
 * ===========================================
 * 問題：calculateTotal を完成させる
 *
 * 条件：
 * - prices は数値の配列
 * - 合計を return する
 * ===========================================
 */

function calculateTotal(prices: number[]): number {
  // ここに実装
  return prices.reduce((a, b) => a + b, 0);
}

/**
 * ===========================================
 * 問題：applyDiscount を完成させる
 *
 * 条件：
 * - total と percent に型をつける
 * - 割引後の金額を return する
 * ===========================================
 */

function applyDiscount(total: number, percent: number): number {
  // ここに実装
  return total * (1 - percent / 100);
}

function runChallenge(): void {
  const list = document.getElementById('cart-list') as HTMLUListElement;
  list.innerHTML = '';

  const prices = [1200, 800, 3500, 650];

  const total = calculateTotal(prices);
  const discounted = applyDiscount(total, 10);

  addItem('合計: ' + total + '円');
  addItem('割引後 (10%引き): ' + discounted + '円');

  // 型確認
  // applyDiscount("1000", 10);
}

(window as any).runChallenge = runChallenge;
