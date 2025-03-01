const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result=document.querySelector('.result')
  if(height==""||isNaN(height)){
    result.innerHTML="Please enter valid height"
  }else if (weight==""||isNaN(weight)){
    result.innerHTML=`Please enter valid ${weight}`
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if(bmi<18.6){
        result.innerHTML=`Your BMI is underweight ${bmi} `
    }else if(18.6<bmi<24.9){
          result.innerHTML=`Your BMI is Normal range ${bmi}`
    }else{
        result.innerHTML=`Your BMI is overweight ${bmi} `
    }
  }
})