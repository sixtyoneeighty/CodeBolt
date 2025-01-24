export function stripIndents(arg0,...values) {
   if(typof(arg0)!=="string"){
      const processedString=arg0.reduce((acc,curr,index)=>{
         acc+=curr+(values[index]??'');
         return acc;
      },'');
      return _stripIndents(processedString);
   }
   return _stripIndents(arg0);
}
function _stripIndents(value){
   return value
   .split("\n")
   .map((line)=>line.trim())
   .join("\n")
   .trimStart()
   .replace(/[\r\n]$/,'');
}