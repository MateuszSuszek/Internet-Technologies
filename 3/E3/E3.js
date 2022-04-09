

function startAnimating(){
    setInterval(animate, 250);
}

let x = 0;
const blockList = document.querySelectorAll("div.block");

function animate(){

    if(parseInt(window.getComputedStyle(blockList[x]).getPropertyValue("top")) == 130){
        
        blockList[x].classList.remove("animateDown");
        blockList[x].classList.add("animateUp");
        
    }else if(parseInt(window.getComputedStyle(blockList[x]).getPropertyValue("top")) == 80){
        
        blockList[x].classList.remove("animateUp");
        blockList[x].classList.add("animateDown");
        
    }
         
    x = (x + 1) % 5;
}

