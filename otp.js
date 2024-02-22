function showOtpLayout(){
    document.querySelector("#otpLayout").style.display="flex"
}
function closeOtpLayout(){
    document.querySelector("#otpLayout").style.display="none"
}

var otpNum=""
function otpGen()
{
    var num1=Math.floor(Math.random()*10);
    var num2=Math.floor(Math.random()*10);
    var num3=Math.floor(Math.random()*10);
    var num4=Math.floor(Math.random()*10);
    otpNum=""+num1+num2+num3+num4;
    document.querySelector("#otp").innerHTML=otpNum;
}

function otpAccess(){
    var userOtp=document.querySelector("#enterOtp") .value ;
    if(userOtp==otpNum)
    {
        document.querySelector("#subOtp").type="submit"
        document.querySelector("form").action="https://www.tesla.com"
    }
    else{
        document.querySelector("#status").innerHTML="Access Denied"
        document.querySelector("#status").style.color="red"

    }
}
