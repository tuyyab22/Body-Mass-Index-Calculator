function calculateBmi() {
    var weight = document.techBMI.weight.value
    var height = document.techBMI.height.value
    if(weight > 0 && height > 0){	
    var finalBmi =( weight/((height*height)/10000));
    document.techBMI.bmi.value = finalBmi.toFixed(3);
     
    if(finalBmi < 18.5){
    document.techBMI.meaning.value = "You are unhealthy, too thin."
        }
     if(finalBmi > 18.5 && finalBmi < 24.9){
    document.techBMI.meaning.value = "You are healthy enough."
        }
     if(finalBmi > 24.9){
    document.techBMI.meaning.value = "You are overweight."
        }

        }
        else{
          alert("Data you've entered might be incorrect. Please check and try again.")
        }
    
        }

let bodyy=document.body
let pro=1;
document.getElementById('toggle').addEventListener('click',()=>{
  if(pro==1){
  bodyy.setAttribute('style','background-image: linear-gradient(to right, rgba(2,13,0,1),rgba(10,28,13,1));')
pro=2;  
result.classList.remove("btn-success")
result.classList.add("btn-dark")
calculate.classList.remove("btn-success")
calculate.classList.add("btn-dark")
clear.classList.remove("btn-success")
clear.classList.add("btn-dark")
bmiheading.classList.remove("btn-info")
bmiheading.classList.add("btn-secondary")
button1.classList.remove('btn-info')
button1.classList.add('btn-secondary')
button2.classList.remove('btn-info')
button2.classList.add('btn-secondary')
ans.style.backgroundColor="#67656b"
}
else{
bodyy.setAttribute('style','background-color: white');
pro=1;
ans.style.backgroundColor="#ffffff"
button1.classList.remove('btn-secondary')
button1.classList.remove('btn-secondary')
button1.classList.add('btn-info')
button2.classList.add('btn-info')
bmiheading.classList.remove("btn-secondary")
bmiheading.classList.add("btn-info")
result.classList.remove("btn-dark")
result.classList.add("btn-success")
calculate.classList.remove("btn-dark")
calculate.classList.add("btn-success")
clear.classList.remove("btn-dark")
clear.classList.add("btn-success")
}
})

