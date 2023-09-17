let  count = 0
let countPl = document.getElementById("count-pl")
let psgCnt  = document.getElementById("psg-cnt")
function increment(){
    count += 1
    countPl.innerText = count
}
function save(){
    let sum = count + " - "
    psgCnt.textContent += sum
    count = 0
    countPl.innerText = count
}