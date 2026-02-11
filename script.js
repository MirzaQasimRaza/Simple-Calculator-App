let input = document.getElementById("input");
let buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let value = button.textContent.trim();

        switch(value){
            case "C":
                input.value = "";
                break;

            case "=":
                let expression = input.value.trim().replace(/X/g,'*');
                input.value = eval(expression);
                break;

            default:
                input.value += value;
                break;
        }
    })
})
