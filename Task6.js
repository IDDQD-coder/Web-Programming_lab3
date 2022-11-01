
function findVowels(str)
{
    let res=0
    res+=str.split('').filter(str => str=='a').length;
    res+=str.split('').filter(str => str=='e').length;
    res+=str.split('').filter(str => str=='i').length;
    res+=str.split('').filter(str => str=='o').length;
    res+=str.split('').filter(str => str=='u').length;
    return res
}
console.log(findVowels('hello'));
console.log(findVowels('why'));
console.log(findVowels('hello dear friend, do you like js?'));

