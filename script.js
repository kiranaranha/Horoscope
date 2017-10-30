
//function changes the number of days depending on the month selected
function monthChange(){
    var month = document.getElementById("monthBox").value;
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    document.getElementById("dayBox").innerHTML = '';
    for(var i= 1; i <= monthDays[month - 1]; i++){
        document.getElementById("dayBox").innerHTML += ("<option value=" + 'i' + ">" + i + "</option>");
    }
}

function getSign() {
    var month = document.getElementById("monthBox").value;
    var day = document.getElementById("dayBox").value;
    var signList = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];
    var sign = '';

    for(var i = 1; i >= 12'; i++){
        if(i == ))
            if(month == i && day <= 19){
                sign = signList[i];
            }
            if(month == i && day >= 19){
                sign = signList[i + 1];
            }
    }


}


function getHoroscope(){
    getSign();
}