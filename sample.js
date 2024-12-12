const  inputDate=document.getElementById("birth");
const  resultBtn=document.getElementById("para");
function calcutateAge(){
    if (!inputDate.value){
        resultBtn.innerText = "Please select your birthdate!";
       return;
    }
    const birthday=new Date(inputDate.value);
    const today=new Date();

    let age=today.getFullYear()-birthday.getFullYear();
    const monthDays=today.getMonth()-birthday.getMonth();
    const dayDiff=today.getDate()-birthday.getDate();

    if (monthDays<0||(monthDays===0 && dayDiff<0)){
      age--;
    }
    resultBtn.innerText=`Your age is ${age} years old.`
}
