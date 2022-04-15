const addNumbers = (...nums) => {
    var returnMessage;
    var numberArray=[];
    var strArray = Array.from(nums[0]);
    for(var i=0;i<strArray.length;i++)
    {
        if(strArray[i]=='-')
        {
            numberArray.push(parseInt('-'+strArray[i+1]));
        }
        else if(!isNaN(strArray[i] && strArray[i]>0))
        {
            numberArray.push(parseInt(strArray[i]));
        }
    }
    // var strArray= Array.from(nums[0]);
     
     try{
        for(var i=0;i<strArray.length;i++){
            if(!isNaN(parseInt(strArray[i])) && parseInt(strArray[i])<0){
                returnMessage = Error("Negatives not allowed"+strArray[i]);
            }
            else if(!isNaN(parseInt(strArray[i])) && parseInt(strArray[i])>0){
               numberArray.push(parseInt(strArray[i]));
               returnMessage = numberArray.reduce((total,num)=>total+num,0);
            }
         }
     }  
     finally{
        console.log(numberArray);
        return returnMessage;
     }
    };
    
    module.exports = addNumbers;