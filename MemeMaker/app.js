const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); //캔버스에 그림을 그릴때 사용함
canvas.width = 800;
canvas.height = 800;

//ctx.fillRect(50, 50, 100, 100); //canvas 안에 사각형을 만드는 함수. 사각형의 가로는 x, 세로는 y, 각각 크기도 지정
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

//setTimeout (() => {
//    ctx.fill();
//}, 5000); 5초 뒤에 다음 함수가 실행됨.

ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
