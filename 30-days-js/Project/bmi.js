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
    result.innerHTML = `<span>${bmi}</span>`;
  }
})