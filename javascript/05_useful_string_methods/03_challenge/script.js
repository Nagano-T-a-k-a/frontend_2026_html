function parseStation() {
  // ここにコードを書いてください
  // ヒント: .indexOf(';') でセミコロンの位置を見つける
  // ヒント: .slice(0, index) でセミコロンより前の部分を取得する
  // ヒント: .slice(0, 3) で最初の3文字（駅コード）を取得する
  // ヒント: .toUpperCase() で大文字に変換する
  // ヒント: .slice(index + 1) でセミコロンより後の部分（駅名）を取得する
  // ヒント: テンプレートリテラルで "コード: 駅名" の形式に組み立てる
  // ヒント: #station-output の textContent に設定する
  const stationData = document.getElementById('station-data').value;
  const output = document.getElementById('station-output');
  output.textContent = '';

  const sIndex = stationData.indexOf(';');
  const stationCode = stationData.slice(0, sIndex).slice(0, 3);
  const stationName = stationData.slice(sIndex + 1);

  const p = document.createElement('p');
  p.textContent = `${stationCode.toUpperCase()}: ${stationName}`;
  output.appendChild(p);
}
