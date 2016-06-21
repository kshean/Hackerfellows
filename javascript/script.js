function convertToCelsius(temp){
    var result = (temp - 32) * (5/9);
    return result;
    
}

function convertTemp(temp, unit){
    if(unit === "c"){
        var result = temp * (9/5) + 32;
        return result;
        
    }else{
        var result = (temp - 32) * (5/9);
        return result;
        
    }

    
}

function getTemp(){
    var f = document.getElementById('temp').value;
    //console.log(f);
    var output = convertToCelsius(f);
    console.log(output);
    document.getElementById('output').value = output;
    
    
}
