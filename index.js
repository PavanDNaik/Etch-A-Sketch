let side = document.getElementById("side");
let grid = document.getElementById("container");
grid.style.height=`600px`;
grid.style.width=`600px`;

function getRandom(val){
    return Math.floor(Math.random()*val);
}
function changeColor(p,factor){
    p.style.backgroundColor=`rgb(${getRandom(225) - factor},${getRandom(225) - factor},${getRandom(225) - factor})`;
}

function mySketch(num){
    side.textContent = `${num} X ${num}`;
    grid.innerHTML="";
    size = (num*num);
    let pixel = []
    let intensity=[];
    for(let i=0;i<size;i++)
    {
        pixel[i]=document.createElement("div");
        pixel[i].style.height=`${600/num}px`;
        pixel[i].style.width=`${600/num}px`;
        intensity[i] = 1;
        grid.appendChild(pixel[i]);

        pixel[i].addEventListener("mouseover",()=>{
            changeColor(pixel[i],intensity[i]*22.5);
            intensity[i]+=1;
        });
    }
}

let slider = document.getElementById("slider");
mySketch(slider.value);
slider.oninput = function (){
    console.log(this.value);
    mySketch(this.value);
};
