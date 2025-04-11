function setup() {
    createCanvas(windowWidth, windowHeight); // create a canvas the size of the window
    colorMode(HSB); // 設定顏色模式為 HSB
    background(240, 220, 202);
  }
  
  function draw() {
      background(50, 60, 45);
      fill(90, 50, 50); // 使用 HSB 顏色模式
      stroke(71, 45, 45); // 使用 HSB 顏色模式
      strokeWeight(5);
      
      // 根據滑鼠的 x 座標來調整圖形的大小
      let size = map(mouseX, 0, windowWidth, 50, 100);
      
      // 使用雙重迴圈來連續產生圖形
      for (let i = 0; i < windowWidth; i += size + 10) {
          for (let j = 0; j < windowHeight; j += size + 10) {
              rectMode(CENTER);
              rect(i, j, size, size);
              ellipse(i, j, size, size);
          }
      }
  }
  
  //當視窗大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }