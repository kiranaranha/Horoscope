
//function changes the number of days depending on the month selected
function monthChange(){
    var month = document.getElementById("monthBox").value;
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    document.getElementById("dayBox").innerHTML = '';
    for(var i= 1; i <= monthDays[month - 1]; i++){
        document.getElementById("dayBox").innerHTML += ("<option value=" + 'i' + ">" + i + "</option>");
    }
}

function getSign(){
    var month = document.getElementById("monthBox").value;
    var day = document.getElementById("dayBox").value;
    var signList = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];
    var sign = '';
    if(month == 1){
        if(day >= 20){
            sign = signList[1];
        }else{
            sign = signList[0]
        }
    }
    if(month == 2){
        if(day >= 19){
            sign = signList[2];
        }else{
            sign = signList[1];
        }
    }
    if(month == 3){
        if(day >= 21){
            sign = signList[3];
        }else{
            sign = signList[2];
        }
    }
    if(month == 4){
        if(day >= 20){
            sign = signList[4];
        }else{
            sign = signList[3];
        }
    }
    if(month == 5){
        if(day >= 21){
            sign = signList[5];
        }else{
            sign = signList[4];
        }
    }
    if(month == 6){
        if(day >= 23){
            sign = signList[6];
        }else{
            sign = signList[5];
        }
    }
    if(month == 7){
        if(day >= 23){
            sign = signList[7];
        }else{
            sign = signList[6];
        }
    }
    if(month == 8){
        if(day >= 23){
            sign = signList[8];
        }else{
            sign = signList[7];
        }
    }
    if(month == 9){
        if(day >= 21){
            sign = signList[9];
        }else{
            sign = signList[8];
        }
    }
    if(month == 10){
        if(day >= 23){
            sign = signList[10];
        }else{
            sign = signList[9];
        }
    }
    if(month == 11){
        if(day >= 22){
            sign = signList[11];
        }else{
            sign = signList[10];
        }
    }
    if(month == 12){
        if(day >= 22){
            sign = signList[12];
        }else{
            sign = signList[11];
        }
    }
    return sign;
}


function getHoroscope(){
    document.getElementById("output").innerHTML = getSign();
}