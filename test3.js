
let area=0;
let peri=0;
let bula=0;
let qula=0;


function _Compute(){
let bula=document.getElementById('addBase').value;
let qula=document.getElementById('addHeight').value;
bula=Math.abs(bula);
qula=Math.abs(qula);


if (bula<135&&
    qula<135){

area=bula*qula;
peri=bula*2+qula*2;
document.getElementById('showu').value=('Area of rectangle is '+area);
document.getElementById('showme').value=('Perimeter of rectangle is '+peri);
let c=document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.rect(20,20,bula*5,qula*5);
ctx.stroke();
return
}
else{
    document.getElementById('showu').value=("Numbers Are Too Big")
    document.getElementById('showme').value=("Numbers must be under 135")
}
}
function _Area(){
    let c=document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.rect(20,20,bula*5,qula*5);
ctx.stroke();
ctx.fillStyle="red";
ctx.fill();
return
}
function _Peri(){
    let c=document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.rect(20,20,bula*5,qula*5);
ctx.stroke();
ctx.fillStyle="blue";
ctx.fill();
return
    }



 
