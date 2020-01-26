const handleHR = function (data) {
    // console.log(data)
    snakeArray[data['player']].heartrate = data['hr']
    console.log(snakeArray[data['player']].heartrate)
}