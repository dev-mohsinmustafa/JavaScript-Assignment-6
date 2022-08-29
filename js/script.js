//Output / Result  kay box may show karny kay lay 
function showOutput(output){
    document.getElementById("output").innerHTML=output

}

//Output / Result    ko clear karny kay lay  
function clearOutput(){
    document.getElementById("output").innerHTML = " ";
    
}

//Input   ko Clear Karny kay lay

function clearInput(){
    inputText.value=" ";
    showNotification("The input has been","success")
}

// Current Date and Time waly box may ab ye date and time show ho ga //Note:ye date and time ap kay system sy lay ga jo bi ap kay system ki date and time ho ga ye wahi show karway ga.or jaab kwe dosara user is ko open karta hai apny system may to ye os kay system ki date and time show karway ga.
let rightNow = new Date();
document.getElementById("originalTextBox").innerHTML= rightNow;


//Get Name of Today waly button par ye function work hoga 

var dayNames = [ "Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Firday" , "Saturday" ] // var dayNames = ["0","1","2","3","4","5","6"]

function getNameofToday(){
    
    let rightNow =new Date();
    let theDay =  rightNow.getDay();
    let namrOfToday = dayNames[theDay]
    showOutput(namrOfToday)
} 

//Calculate Days Passed since I bron  waly button par ye function work hoga

function calculateDaysPassedSinceIBron(){
    let dob = document.getElementById("inputText").value;

    if(!dob){
        showNotification("Please Enter Your date of birth","error")
        return;
    }
    let today = new Date();
    let bornDate = new Date(dob);
                                //today time ko  Milli second  may convert karny kay lay hum  .getTime() karty hai.     

    let msDiff = today.getTime() - bornDate.getTime();  // Difference kay bad humary pass Milli second kay answer ay ga.

    // Ab hum nay Milli Second may sy Days nikalny hai
     
    let daysDiff = msDiff  / (1000 * 60 * 60 * 24);   //( Milli second * second * Minute * Hours ) isy sy humary pass Ek din a jy ga
    
    //dayDiif may ab jo value ay gi wo floating point may ay gi ab hum nay os ko remove karny kay lay Math.floor kary gy
    let html = Math.floor(daysDiff) + '<br>' + '<span style="color:#37CA1E; ">Days have been passed since you born </span>'
    showOutput(html)
}

// When is your next Birthday?  waly button par ye function work hoga
function nextBirthday(){
 let dob = document.getElementById("inputText").value;
 if(!dob){
     showNotification("Please Enter Your date of birth","error")
     return;
 }
 let today = new Date();
 let nextBirthDate = new Date(dob);
                                                      //Opar hum today ko bornDate sy substact kar rahy thy. lakin yeha par hum nextBirthDate ko today sy substract kary gy
 let msDiff = nextBirthDate.getTime() - today.getTime(); 
 
 let daysDiff = msDiff  /   (1000 * 60 * 60 * 24);
 
 let html = '<span style="color:#37CA1E; ">Your next birth day is </span> "'  + Math.floor(daysDiff) +  '"<span style="color:#37CA1E; ">days away </span>';
 showOutput(html)


}

//Great User  waly button par ye function work hoga

function greetUser(){
  let userName = prompt(" Enter your name");
   // greetUserName(userName)
   var time = new Date();
   var hour = time.getHours();
   var greet;
   if(hour > 0 && hour < 11){
       greet ="Good Morning";
   }else if( hour > 11 && hour <  16 )
   greet="Good Afternoon";
   else if(hour >16 && hour < 22)
   greet="Good Night"
   showOutput( greet + " " + userName)


}
// function greetUserName (userName){
//     var time = new Date();
//     var hour = time.getHours();
//     var greet;
//     if(hour > 0 && hour < 11){
//         greet ="Good Morning";
//     }else if( hour > 11 && hour <  16 )
//     greet="Good Afternoon";
//     else if(hour >16 && hour < 22)
//     greet="Good Night"
//     showOutput( greet + " " + userName)
// }



//Tell Time 1  waly button par ye function work hoga

// Note: is tarha kay same ab humary pass 3 button hai.ye to to abi 3 button hai agar hum ko is tarha kay or button kay zarrot ho to hum bar bar to ni ye code ko copy kary kay use karty rahy is sy to humara code or bi lengthy ho jy ga to hum apny code ko lengthy hony sy bachny kay lay hum function ko parametter kay through pass kar sakty hai ye simple ek hi function ban kar osy ko bar bar use kar sakty hai chaly hum nachy dakty hai kay kasy karna hai
 
//Ab hum is ko comment karty.

// function tellTimeOne(){         
//    var now = new Date();
//    var theHour = now.getHours();
//    var theMinute = now.getMinutes();
//    var thesecond = now.getSeconds();
//    output.innerHTML += "<br>You clicked the button @ " + theHour  + ":"  + theMinute  + ":"  + thesecond + "<br/>"
   
// }


//Ab hum nay ek function ban laya hai TellTime kay name sy ab hum is ko jatni bar bi use karna hai to hum tellTime ko anpy button wala jo function banya ho ga os kay lak dy gay jasy hum abi nachy use karty hai.
function tellTime(){
    var now = new Date();
   var theHour = now.getHours();
   var theMinute = now.getMinutes();
   var thesecond = now.getSeconds();
   output.innerHTML += "<br>You clicked the button @ " + theHour  + ":"  + theMinute  + ":"  + thesecond + "<br/>"
   
}


function tellTimeOne(){     //is hara hai kary gy
    tellTime();
}


//Tell Time 2 waly button par ye function work hoga

function tellTimeTwo(){
    tellTime();
}

//Tell Time 3 waly button par ye function work hoga

function tellTimeThree(){
    tellTime();
}


//Calculate Tax waly button par ye function work hoga

function calculateTax( price ,taxRate){           
    var tax = price * taxRate / 100;
    return tax;      //jab tax calculate ho jy ga tab hum tax  ko wapas return kar dy gy anpy function may or ye is  function sy  wapas nachy waly function may var tax = calculateTax( price ,taxRate); may a jy ga
}


function calculateTaxBtn(){
    var price = +prompt("Enter prize")
    var taxRate = 17;
    var tax = calculateTax( price ,taxRate); //yeha par hum perametter pass kar rahy hai  (Price , taxRate) ka jo kay opar bnaya hai osy may
    let html = "Tax :" + tax;
    showOutput(html)
}


//Calculate Total = Prize + Tax   waly button par ye function work hoga

function calculateTotal(price){
    if(price > 1000){
        var taxRate = 16;
    }else{
        var taxRate = 8;
    }
    var tax = calculateTax( price ,taxRate); //yeha par hum perametter pass kar rahy hai  (Price , taxRate) ka jo humnay opar phaly hi baya howa hai calculate tax waly button may  
    var total = price + tax;
    return total;

}

function calculateTotalBtn(){
    var price = +prompt("Enter prize");
    var total = calculateTotal(price);   //yeha par hum perametter pass kar rahy hai (price) ka jo opar banya hai osy may
    let html = "Total :" + total;
    showOutput(html)

}


//Toastify kay lay:

document.getElementById("clearOutputButton").onclick= function(){
    let outputBoxHTML = document.getElementById("output").innerHTML;
    audio.play();
    if(!outputBoxHTML.length){
        showNotification("It's already empty.","error") // is ("msg","type" ) may phaly hum massage baty hai or comma kay bad hum type baty hai
    }else{
        clearOutput(); //is kay matlab kay output agr to clear ho jati hai to ye show karway 
        showNotification("Output / Result box been cleared.","success") 
    }
}

//Toastify custom Function

function showNotification( msg ,type){

    let bgColor;
    if(type === "success"){
        bgColor = "linear-gradient(to right,#1D976C,#93F9B9)"
    }
    else if(type === "error"){
        bgColor ="linear-gradient(to right,#93291e,#ed213a)"
    }
    else{
        bgColor ="#000"
    }
                              //hum ye  Switch statement sy bi kar sakty hai
    // switch (type) {  
    //     case" success":
    //         bgColor = "linear-gradient(to right,#1D976C,#93F9B9)"
    //         break;
    //     case "error":
    //         bgColor ="linear-gradient(to right,#93291e,#ed213a)"
    //         break;
    
    //     default:
    //         bgColor= "#000";
    //         break;
    // }

    Toastify({
        text: msg,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: bgColor,
        },
      }).showToast();
}
