// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// Use toUpperCase() method to convert the string letters to upper case
name = name.toUpperCase();
console.log(name);


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
// Create function that will set first letter of every word in the string to uppercase
function setFirstLetterUpperCase(word) {
    // Split the words by spaces between them and store in var lowerCaseWords
    var lowerCaseWords = word.toLowerCase().split(" ");
    // Map lowerCaseWords in var stringResult
    var stringResult = lowerCaseWords.map(
        // Create a function that will get every word in lowerCaseWords 
        function(stringValue) {
            // Return the first letter to upperCase 
            return stringValue.replace(stringValue.charAt(0), stringValue.charAt(0).toUpperCase());
        });
    // Combine string result words by using .join(" ") and add spaces.
    return stringResult.join(" ");
}

sentence = setFirstLetterUpperCase(sentence);
console.log(sentence);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';

// First Solution
// Use Regular Expression/ REGEX that extract numbers in the String
money = Number(money.replace(/[^0-9.-]+/g,""));
// money = money.match(number);

console.log(money);

// Second Solution use substr/substring
// As per checking the symbol composed of 3 character 
// Value starts at secondMoney.substring(3); 
var secondMoney = '￥20'; // ï¿¥20
secondMoney = secondMoney.substring(3); 

console.log(secondMoney);

