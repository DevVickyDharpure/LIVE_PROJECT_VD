let getNumber = 0;
    let num1 = 0;
    let num2 = 0;
    document.getElementById("display").innerHTML = 0;
    const getText = (text) => {
        document.getElementById("display").innerHTML += text;
        getNumber += text;
        additionOn = false;
        if (text == ' + ') {
            additionOn = true;
        }
        if (additionOn) {
            num1 = getNumber
        }
        if (text != ' + ') {
            num2 = getNumber
        }
        console.log(getNumber)
        console.log(" num 1 : " + num1)
        console.log("num 2 : " + num2)
    }
    const allClear = () => {
        document.getElementById("display").innerHTML = " ";
        getNumber += text;
    }
    const add = () => {

    }