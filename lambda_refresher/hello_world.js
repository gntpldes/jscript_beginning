    let min = 0;
    let max = 9;
    
    let generatedNumber = Math.floor(Math.random()*max) + min; 
    
    callback(null, generatedNumber); 
