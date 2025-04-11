function setup() {
  createCanvas(windowWidth, windowHeight); // create a canvas the size of the window
  colorMode(HSB); // 設定顏色模式為 HSB
}

function draw() {
 
  // 根據滑鼠的 x 座標來調整色相
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  // 根據滑鼠的 y 座標來調整亮度
  let brightness = map(mouseY, 0, windowHeight, 0, 100);

  fill(hue, 100, brightness); // 使用 HSB 顏色模式
  stroke(51, 100, 100); // 設定邊框顏色為金色 (HSB)
  strokeWeight(5); // 設定邊框寬度

  // 在滑鼠位置畫一個圓，寬高為 200px
  ellipse(mouseX, mouseY, 200, 200);
}

// 當視窗大小改變時，重新設定畫布的寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}