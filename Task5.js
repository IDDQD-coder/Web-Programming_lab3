function Fizzbuzz(num)
{
 console.log('Результат:');
 let str='';
 for(var i = 1; i<num+1;i++)
 {
    if (i%3==0) str='fizz'
 if (i%5==0) str+='buzz'
    if (str!='') console.log(str);
    else console.log(i);
    str='';
    }
}
Fizzbuzz(20);