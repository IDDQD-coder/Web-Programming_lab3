function palindrome(str)
{
 let str1= str.split('').reverse().join('');
 if (str1===str) return true;
    else
    return false;
}
console.log(palindrome('racecar'));
console.log(palindrome('pooop'));
console.log(palindrome('table, ,elbat'));