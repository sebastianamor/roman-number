const numbers = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const romanNU = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  
  convertBtn.addEventListener("click", result);

   

  function convertToRoman(num) {
    if (num === 0) {
      return '';
    }
    for (var i = 0; i < romanNU.length; i++) {
      if (num >= romanNU[i][0]) {
        return romanNU[i][1] + convertToRoman(num - romanNU[i][0]);
      }
    }
  }

