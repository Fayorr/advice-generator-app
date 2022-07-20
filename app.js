// const axios = require('axios');
const button = document.querySelector('.btn');
const adviceBlock = document.querySelector('.adviceBlock');
const adviceNum = document.querySelector('.adviceNum');



button.addEventListener("click", generateAdvice);

async function generateAdvice(){
    try{
         let randomAdviceId = Math.floor(Math.random() * 251) + 1;

        const response = await axios.get(`https://api.adviceslip.com/advice/${randomAdviceId}`)
        
        const randomAdvice = response.data.slip.advice;

        adviceBlock.innerHTML = `${randomAdvice}`;
        adviceNum.innerHTML = `Advice #${randomAdviceId}`
    }
    catch(error){
        console.log("There is an Error:", error)
    }
}
generateAdvice();
window.addEventListener('load', generateAdvice);
