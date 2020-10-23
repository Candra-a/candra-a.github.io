let item = document.getElementById("item");
let item2 = document.getElementById("item2");
let score = 0

for (let i = 0; i < item.children.length; i++) {
    for (let j = 0; j < item2.children.length; j++) {

    }
}

function scoring() {
    score++
    document.getElementById("score").innerHTML = `Score: ${score}`
}
function scoring1() {
    score = 0
    document.getElementById("score").innerHTML = `Score: 0`
}
setTimeout(function timer() {
    alert(`Times Up!! Your Score ${score}`); },30000)