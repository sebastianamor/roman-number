const numbers = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

function convert(num) { 
  if(num < 1){ return "";}
  if(num >= 1000){ return "M" + convert(num - 1000);}
  if(num >= 900){ return "CM" + convert(num - 900);}
  if(num >= 500){ return "D" + convert(num - 500);}
  if(num >= 400){ return "CD" + convert(num - 400);}
  if(num >= 100){ return "C" + convert(num - 100);}
  if(num >= 50){ return "L" + convert(num - 50);}
  if(num >= 40){ return "XL" + convert(num - 40);}
  if(num >= 10){ return "X" + convert(num - 10);}
  if(num >= 9){ return "IX" + convert(num - 9);}
  if(num >= 5){ return "V" + convert(num - 5);}
  if(num >= 4){ return "IV" + convert(num - 4);}
  if(num >= 1){ return "I" + convert(num - 1);}  
}
const resultElement = document.getElementById('output')
convertBtn.addEventListener('click', () => {
    const inputValue = parseInt(numbers.value);
    const convertedNumber = convert(inputValue);
    resultElement.textContent = convertedNumber;
});
  const checkUserInput = () => {
  const inputInt = parseInt(numbers.value);

  if (!numbers.value || isNaN(inputInt)) {
    result.innerHTML = "<h1>有効な番号を入力してください</h1>";
    return;
  }

  if (inputInt === -1) {
    result.innerHTML = "1 以上の数値を入力してください";
    return;
  } if (inputInt === 4000) {
    result.innerHTML = "3999 以下の数値を入力してください";
    return;
  } if (inputInt === 3999) {
    result.innerHTML = "MMMCMXCIX";
    return;
  } 
  
  
};

convertBtn.addEventListener("click", checkUserInput);

numbers.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});