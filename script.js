
//function changes the number of days depending on the month selected
function monthChange(){
    var month = document.getElementById("monthBox").value;
    var monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    document.getElementById("dayBox").innerHTML = '';
    for(var i= 1; i <= monthDays[month - 1]; i++){
        document.getElementById("dayBox").innerHTML += ("<option value=" + 'i' + ">" + i + "</option>");
    }
}

function determineSign(day, month){
    var signList = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];
    if(month == 1){
        if(day >= 20){
            return signList[1];
        }else{
            return signList[0]
        }
    }
    if(month == 2){
        if(day >= 19){
            return signList[2];
        }else{
            return signList[1];
        }
    }
    if(month == 3){
        if(day >= 21){
            return signList[3];
        }else{
            return signList[2];
        }
    }
    if(month == 4){
        if(day >= 20){
            return signList[4];
        }else{
            return signList[3];
        }
    }
    if(month == 5){
        if(day >= 21){
            return signList[5];
        }else{
            return signList[4];
        }
    }
    if(month == 6){
        if(day >= 23){
            return signList[6];
        }else{
            return signList[5];
        }
    }
    if(month == 7){
        if(day >= 23){
            return signList[7];
        }else{
            return signList[6];
        }
    }
    if(month == 8){
        if(day >= 23){
            return signList[8];
        }else{
            return signList[7];
        }
    }
    if(month == 9){
        if(day >= 21){
            return signList[9];
        }else{
            return signList[8];
        }
    }
    if(month == 10){
        if(day >= 23){
            return signList[10];
        }else{
            return signList[9];
        }
    }
    if(month == 11){
        if(day >= 22){
            return signList[11];
        }else{
            return signList[10];
        }
    }
    if(month == 12){
        if(day >= 22){
            return signList[12];
        }else{
            return signList[11];
        }
    }
}

function determineHoroscope(sign) {
}

function determineImage(sign){

}

function onSubmit() {
    var sign = determineSign(document.getElementById("dayBox").value, document.getElementById("monthBox").value);
    document.getElementById("output").innerHTML = sign;
    var horoscope = determineHoroscope(sign);
}