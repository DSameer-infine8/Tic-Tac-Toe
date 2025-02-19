let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let newgameBtn = document.querySelector(".newgameBtn");
let showWin = document.querySelector(".showWin");
let hiddenMsg = document.querySelector(".hidden-msg");

let turnO = true;//to start game 

let resetNewGame= () =>{
    resetColor();
    let turnO = true;
    enableAllBtns();
    hiddenMsg.classList.add("hide");
}

//there are total 8 winning conditions
const winnerPat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//this funtion is use change text value X later O repetedly
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO == true){
            box.innerText="O"
            turnO =false;
        }else{
            box.innerText="X"
            turnO =true;
        }
        box.disabled =true;

        checkWinner();
    })
})

//to check the winner if the winner condition satisifies
const checkWinner = () =>{
    for(let patter of winnerPat){
        let pos1V= boxes[patter[0]].innerText;
        let pos2V= boxes[patter[1]].innerText;
        let pos3V= boxes[patter[2]].innerText;

        if(pos1V !="" && pos2V !="" && pos3V !=""){
            if(pos1V === pos2V && pos2V === pos3V){
                let p1= boxes[patter[0]].style.background="#343434";
                let p2= boxes[patter[1]].style.background="#343434";
                let p3= boxes[patter[2]].style.background="#343434";
                
                let c1=boxes[patter[0]].style.color="white";
                let c2=boxes[patter[1]].style.color="white";
                let c3=boxes[patter[2]].style.color="white";
                console.log(pos1V +"is Winner");
                showWinner(pos1V);
                disableAllBtns();
            }
        }
    }

};

//winner board is hidden , showes up when checkWinner(); calls..
const showWinner = (winner) =>{
    showWin.innerText=`🏅 Winner ${winner} 🏆`;
    hiddenMsg.classList.remove("hide");
};


//diables all the buutons once winner shows up..
const disableAllBtns=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

//enables all buttons when reset or new game button is clicked..
const enableAllBtns=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


resetBtn.addEventListener("click",() =>{
    resetNewGame();
})

newgameBtn.addEventListener("click",() =>{
    resetNewGame();
})

//winner box color are again brought back to initial color..
const resetColor = () =>{
    for(let patter of winnerPat){
        let pos1V= boxes[patter[0]].innerText;
        let pos2V= boxes[patter[1]].innerText;
        let pos3V= boxes[patter[2]].innerText;

        if(pos1V !="" && pos2V !="" && pos3V !=""){
            if(pos1V === pos2V && pos2V === pos3V){
                let p1= boxes[patter[0]].style.background="white";
                let p2= boxes[patter[1]].style.background="white";
                let p3= boxes[patter[2]].style.background="white";
                
                let c1=boxes[patter[0]].style.color="orange";
                let c2=boxes[patter[1]].style.color="orange";
                let c3=boxes[patter[2]].style.color="orange";
            }
        }
    }

};