const celsius=document.querySelector('#celsius')
const Fahrenheit=document.querySelector('#Fahrenheit')

window.addEventListener("load",()=>celsius.focus());
celsius.addEventListener("input",()=>{
    Fahrenheit.value=((celsius.value*9)/5+32).toFixed(2);
if(!celsius.value) Fahrenheit.value="";
})
Fahrenheit.addEventListener("input",()=>{
   celsius.value=(((Fahrenheit.value-32)*5)/9).toFixed(2);
if(!Fahrenheit.value) celsius.value="";
})