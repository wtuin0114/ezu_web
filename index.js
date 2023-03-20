function janken(myAnswer) {
    const enemyAnswers = ["ぐー", "ちょき", "ぱー"] 
    const enemyAnswer  = enemyAnswers[Math.floor(Math.random()*enemyAnswers.length)]
    console.log(`自分:${myAnswer} 相手:${enemyAnswer}`)

    let thisResult
    if ( myAnswer == enemyAnswer ) {
        thisResult = `<p id="jankenResult">自分:${myAnswer} 相手:${enemyAnswer}<br />アイコ！</p>`
    } else if ((myAnswer == "ぐー" && enemyAnswer == "ちょき") || (myAnswer == "ちょき" && enemyAnswer == "ぱー") || (myAnswer == "ぱー" && enemyAnswer == "ぐー")) {
        thisResult = `<p id="jankenResult">自分:${myAnswer} 相手:${enemyAnswer}<br />カチ！</p>`
    } else {
        thisResult = `<p id="jankenResult">自分:${myAnswer} 相手:${enemyAnswer}<br />マケ！</p>`
    }

    let result = document.getElementById("jankenResult")
    result.remove()
    result = document.getElementById("janken")
    result.insertAdjacentHTML("afterend", thisResult)
}