const clock=document.querySelector('.clock')
setInterval(()=>{
  const date= new Date().toLocaleTimeString();
  clock.innerHTML=date;
},1000)