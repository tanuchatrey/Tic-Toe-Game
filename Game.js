let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset');
let newgamebtn = document.querySelector('#new');
let msg = document.querySelector('.msg');
let msgbtn = document.querySelector('#msg-btn');

let turnO = true;

const winpattren =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const reset = () => {
    turnO = true;
    enableboxes();
    msg.classList.add("hide");
}



boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was cllicked");
    if (turnO) {
        box.innerText = "O";
        turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;

    checkwin();
    });
   
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}


const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

}
const showWinner = (winner) => {
    msgbtn.innerText=`Congratulation! winner is ${winner}`;
    msg.classList.remove("hide");
}

const checkwin = () => {
    for (let pattern of winpattren){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val !='' && pos2val !='' && pos3val !=''){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("WINNER!",pos1val);
                showWinner(pos1val);
            }
        }
    }
    
};

newgamebtn.addEventListener("click" , reset);
resetbtn.addEventListener("click" , reset);
