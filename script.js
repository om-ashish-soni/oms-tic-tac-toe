let moves = 0
let mem = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const move = (e) => {
    let val = e.target.innerHTML
    if (val == "1" || val == "2") return alert("invalid move")
    val = (moves % 2) + 1
    e.target.innerHTML = parseInt(val)
    let id = parseInt(event.target.id)
    mem[id]=val
    let result = checkWinner()
    if (result.hasOwnProperty("win")) {
        for(let i=0;i<9;i++){
            mem[i]=0;
            document.getElementById(i).innerHTML = "&nbsp"
        }
        document.getElementById("msg").innerHTML = result.winner + " has won the match"
    }
    moves++
}
const checkWinner = () => {
    // console.log("moves : mem : ",mem)
    if(checkLine(mem[0],mem[1],mem[2])) return doneGame()
    if(checkLine(mem[3],mem[4],mem[5])) return doneGame()
    if(checkLine(mem[8],mem[7],mem[8])) return doneGame()
    if(checkLine(mem[0],mem[3],mem[6])) return doneGame()
    if(checkLine(mem[1],mem[4],mem[7])) return doneGame()
    if(checkLine(mem[2],mem[5],mem[8])) return doneGame()
    if(checkLine(mem[0],mem[4],mem[8])) return doneGame()
    if(checkLine(mem[2],mem[4],mem[6])) return doneGame()

    return {}
}
const checkLine=(a,b,c)=>{
    if(isValidElement(a) && isValidElement(b) && isValidElement(c)){
        return a==b && b==c
    }
    return false
}
const isValidElement=(a)=>{
    return a==1 || a==2
}
const doneGame = () => {
    const winner = 1 + (moves % 2)
    return { win: true, winner: winner }
}