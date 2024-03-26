
    const res = document.getElementById("res")
    const btns = document.getElementById("btns")
    
    btns.addEventListener("click", function(e) {
        if (e.target.matches("#btn0, #btn1, #btnSum, #btnSub, #btnMul, #btnDiv")) {
            const btnValue = e.target.textContent;
            res.textContent += btnValue
        } else if (e.target.matches("#btnClr")) {
            res.textContent = ""
        } else if (e.target.matches("#btnEql")) {
            calculateResult()
        } 
    })

    function calculateResult() {
        try {
            const expression = res.textContent;
            const decimalResult = calculateExpression(expression);
            const binaryResult = decimalToBinary(decimalResult);
            res.textContent = binaryResult;
        } catch (error) {
            res.textContent = "Erro";
        }
     }

     function calculateExpression(expression) {
        const parts = expression.split(/([\+\-\*\/])/); 
        let result = parseInt(parts[0], 2); 
        for (let i = 1; i < parts.length; i ++) {
            const operator = parts[i];
            const number = parseInt(parts[i + 1], 2); 
            if (operator === "+") {
                result += number;
            } else if (operator === "-") {
                result -= number;
            } else if (operator === "*") {
                result *= number;
            } else if (operator === "/") {
                result /= number;
            }
        }
        return result;
    }

    function decimalToBinary(decimal) {
        return (decimal >>> 0).toString(2); 
    }
    




