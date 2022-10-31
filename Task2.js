function checkSpam(str)
{
 str=str.toLowerCase();
 if (str.includes("xxx") || str.includes("viagra"))
  return true; 
    return false;
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));