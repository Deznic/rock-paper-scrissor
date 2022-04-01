var rock = "rock"
var paper = "paper"
var scissor = "scissor"
var rps = [rock, paper, scissor]
function computerPlay(){
    return rps[Math.floor(Math.random() * (2-0+1)+0)]
}
function judge(plrSelection, botSelection) {
    if (plrSelection == botSelection) {
        return "Equal! "+plrSelection+" is the same as "+ botSelection;
    } else {
        if(plrSelection == rock && botSelection == paper){
            return msg(true, plrSelection, botSelection)
        } else if (plrSelection == paper && botSelection == rock){
            return msg(false, plrSelection, botSelection)
        } else if (plrSelection == rock && botSelection == scissor){
            return msg(false, plrSelection, botSelection)
        } else if (plrSelection == paper && botSelection == scissor) {
            return msg(true, plrSelection, botSelection)
        } else if (plrSelection == scissor && botSelection == rock) {
            return msg(true, plrSelection, botSelection)
        } else if (plrSelection == scissor && botSelection == paper) {
            return msg(false, plrSelection, botSelection)
        }
    }
}
function playerSelect(){
    return plrans = prompt("type answer (rock,paper,scissor)").toLocaleLowerCase();
}
function msg(lose,pl,bt){
    switch (lose) {
        case false:
            return "You win! "+pl+" beats "+bt
            break;
        case true:
            return "You lose! "+bt+" beats "+pl
            break;
    }
}
function game(){
    for (i = 0; i < 5; i++){
        console.log(judge(playerSelect(),computerPlay()))
    }
}
game();