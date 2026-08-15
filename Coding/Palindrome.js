function isPalindrome(str){
    let rev= str.split("").reverse().join("");
     return str === rev;

}
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));