function setup() {
    createCanvas(windowWidth, windowHeight);// create a canvas the size of the window
    //畫布的顏色為#F0DCCA(F0為十六進位的質，翻成10進位是202)
    background(240, 220, 202);
    
  }
  
  function draw() {//畫圓函數
      //畫布的顏色為#F0DCCA(F0為十六進位的質，翻成10進位是202)
      background(240, 220, 202);
      //畫圓的顏色為#8D9F87(8D為十六進位的質，翻成10進位是141)
      fill(141, 159, 135);
      //畫圓的邊框為#6F9283(6F為十六進位的質，翻成10進位是111)
      stroke(111, 146, 131);
      //畫圓的邊框寬度為10
      strokeWeight(10);
      //在視窗中間畫一個圓，寬高為200
      //ellipse(windowWidth/2, windowHeight/2, 200, 200);
      //依照上面圓的顏色和框線顏色，從視窗的最左邊，產生連續的圓，到視窗的最右邊
      for (var i = 0; i < windowWidth+200; i+=200){
          ellipse(i, windowHeight/2, 200, 200);
      }
  
  }
  //當視窗大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }