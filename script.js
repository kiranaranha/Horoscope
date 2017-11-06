
// global vaiables
var signList = ['capricorn', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius'];
var textList = [
    "going to experience something very good, that will make you happy. " +
    "You will achieve something great at your work or school. " +
    "However you will also have extreme constipation that you may never fully recover from.",
    "soon going to resolve an intense conflict and bring peace to humanity. " +
    "But your sarcastic sense of humor will cause troubles for you.",
    "going to have a spiritual experience from which you will gain a new prospective on life. " +
    "You will also trip over a rock 3 times in the next month. ",
    "going to receive an unexpected gift from someone. " +
    "You also will lose your cell phone.",
    "going to unintentionally make a famous piece of art. " +
    "Your enemies will seek revenge by pranking you.",
    "going to meet a someone who will change your life forever. You will also be attacked by a chinchilla. ",
    "going to eat the best meal of your life in the next month. " +
    "Others will envy you for having better food than them. " +
    "You may have to escape them by moving to another country. ",
    "going to accidentally cause a social and political revolution which will change the world forever. " +
    "You will also eat something that will make you gassy for six months. ",
    "going to develop a extremely useful skill in the next year. " +
    "A chicken will scratch you soon, causing a mild disease. ",
    "going to visit a new place, where you will be worshipped by the local people. " +
    "You will latter sit on a pine cone",
    "going to win a large prize that will come with food. " +
    "You will also get pooped on by a bird. ",
    "going to meet the wolds cutest puppy and win one million dollars. " +
    "You will also fall in a well and never escape. "
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
    var month = document.getElementById("monthBox").value;
    var day = document.getElementById("dayBox").value;
    var name = document.getElementById("name").value;
    var sign = determineSign(day, month);
    var horoscope = determineHoroscope(sign);
    var msg = specialMsg(day, month);
    var text = "";

    if (month == 0) {
        text = 'Please enter your date of birth!'
    }
    if (name != "" && month > 0) {
        text = "Hello " + name + "! You are " + horoscope + '<br />' + msg;
    } else if(month > 0){
        text = "You are " + horoscope + '<br />' + msg;
    }

    document.getElementById("output").innerHTML = text;
    document.getElementById("image").innerHTML = "<img src=" + "'" + determineImage(sign) + "'" + "/>";
}