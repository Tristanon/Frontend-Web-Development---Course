//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Rock Paper Scissors!
//Solution 1:
const rps = (p1, p2) => {
  if(p1 == 'rock'){
    if(p2 == 'paper'){
      return "Player 2 won!";
    }else if(p2 == p1){
      return "Draw!";
    }else if(p2 == "scissors"){
      return "Player 1 won!";
    }
  }
  if(p1 == 'paper'){
    if(p2 == "scissors"){
      return "Player 2 won!";
    }else if(p2 == p1){
      return "Draw!";
    }else if(p2 == "rock"){
      return "Player 1 won!";
    }
  }
  if(p1 == 'scissors'){
    if(p2 == 'paper'){
      return "Player 1 won!";
    }else if(p2 == p1){
      return "Draw!";
    }else if(p2 == "rock"){
      return "Player 2 won!";
    }
  }
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//Rock Paper Scissors!
//Solution 2:
const rps = (p1, p2) => {
  if(p1 == p2){
    return "Draw!"
  }
  rule = {paper:'rock',rock:'scissors',scissors:'paper'};
  if(p2 == rule[p1]){
    return "Player 1 won!";
  }else{
    return "Player 2 won!";
  }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------//
