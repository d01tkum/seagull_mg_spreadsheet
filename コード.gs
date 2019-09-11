function myFunction() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();//① アクティブ状態のスプレッドシートを取得
  var sheet = spreadsheet.getActiveSheet();//② アクティブ状態のシートを取得
  var cell = sheet.getRange('BF2');//③ セルの指定
  cell.setValue('Hello world!');//④ 値の設定
}

function myFunction4(row_number) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();//① アクティブ状態のスプレッドシートを取得
  var sheet = spreadsheet.getActiveSheet();//② アクティブ状態のシートを取得
  var range = sheet.getRange('B2:B5');//③ セルの範囲指定
  var values = range.getValues();//④ 値の取得
  Logger.log(values);//ログに出力
}

// 中間決算の結果を返す
// row_number = 中間決算を行う行番号
function getInterimResult(rowNumber) {
  
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();//① アクティブ状態のスプレッドシートを取得
  var sheet = spreadsheet.getActiveSheet();//② アクティブ状態のシートを取得
  
  var cell = sheet.getRange('BF1');//③ セルの指定
  cell.setValue('Hello world!');//④ 値の設定
  
  // ① sum(F13:F16) + sum(F20:FrowNumber)を求める
  // ② F列のrowNumberより上において、0でない最初の数（1つ上）を求める
  // ③ 受取手形 = ① - ②
  // K列のrowNumberに、③の値を埋め込む
  
  // ① sum(AM13:AM16) + sum(AM20:AMrowNumber)を求める
  // ② AM列のrowNumberより上において、0でない最初の数（1つ上）を求める
  // ③ 支払手形 = ① - ②
  // AM列のrowNumberに、③の値を埋め込む
}


// ① sum(F13:F16) + sum(F20:FrowNumber)を求める
function getSumAbove(cell){
  // sum(F13:F16) + sum(F20:cell)
  // return vlaue
}


// ② F列のrowNumberより上において、0でない最初の数（1つ上）を求める
function getOneUpsideCellValue(cell){

  // return value
}


function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('追加メニュー') // メニューの追加
    .addItem('中間決算', 'myFunction') // 項目の追加
    .addSeparator()//区切り線
    .addSubMenu(SpreadsheetApp.getUi().createMenu('追加サブメニュー') // サブメニューの追加
      .addItem('サブメニューの項目1', 'test') //サブメニューの項目1の追加
      .addItem('サブメニューの項目２', 'test') //サブメニューの項目2の追加
    )
  .addToUi();
  
}