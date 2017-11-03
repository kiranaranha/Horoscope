
// global vaiables
var signList = ['capricorn', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius'];
var textList = [
    "You are ambitious, practical, responsible and sincere.",
    "You are a humantarian, inventive, unemotional, friendly, affectionate and sarcastic.",
    "You are spiritual, selfless, peace-loving, mysterius, kind and elusive.",
    "You are spntaneous, optimistic, courageous, adventurous, impatient and proud.",
    "You are stable, practical, artistic, stubborn, materialistic and possesive.",
    "You are tactful, versatile, witty, social, independent and intelligent.",
    "You are unpredictable, temperamental, indecisive, loyal, moody and sensitive.",
    "You are independent, warm, capable, social, and a good leader.",
    "You are perfectionistic, mannagerial, reliable, inflexible and independent,",
    "You are balanced, diplomatic, charming, indecisive, trustworthy and detached.",
    "You are independent, mysterious, loyal, manipulative, observant and passionate.",
    "You are courageous, frank, generous, tactless, creative, unredictable and likeable"
];

//function changes the number of days depending on the month selected
function monthChange(){
    var month = document.getElementById("monthBox").value;
    var monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    document.getElementById("dayBox").innerHTML = '';
    for(var i = 1; i <= monthDays[month - 1]; i++){
        document.getElementById("dayBox").innerHTML += ("<option value=" + i + ">" + i + "</option>");
    }
}

function determineSign(day, month){
    var signList = ['capricorn', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius'];
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
        if(day >= 21){
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
        if(day >= 23){
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
            return signList[0];
        }else{
            return signList[11];
        }
    }
}

function determineHoroscope(sign) {
    for(var i = 0; i <= 12; i++) {
        if(sign == signList[i]){
            return textList[i];
        }
    }
}

function determineImage(sign){
    var imageDir = "images/";
    for(var i = 0; i <= 12; i++) {
        if(sign == signList[i]) {
            var image = imageDir + signList[i] + '.gif';
            return image;
        }
    }
}

function specialMsg(day, month) {
    // special message
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var msg = "";
    if (day == dd && month == mm) {
        msg = "Happy Birthday!";
    }

    return msg;
}

function onSubmit() {
    var day = document.getElementById("dayBox").value;
    console.log(day);
    var month = document.getElementById("monthBox").value;
    var sign = determineSign(day, month);
    var horoscope = determineHoroscope(sign);
    var msg = specialMsg(day, month);
    document.getElementById("output").innerHTML = horoscope + '<br />' + msg;
    document.getElementById("image").innerHTML  = "<img src=" +"'" + determineImage(sign) + "'" + "/>";
}