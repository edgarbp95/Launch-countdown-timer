const divCountdown = document.querySelector(".countdown");

let timeNow = new Date("5/10/2022");

console.log(timeNow)

const getTime = dateEnd => {
    let now = new Date(),
        time = (new Date(dateEnd) - now + 1000) / 1000,
        seconds = ('0' + Math.floor(time % 60)).slice(-2),
        minutes = ('0' + Math.floor(time / 60 % 60)).slice(-2),
        hours = ('0' + Math.floor(time / 3600 % 24)).slice(-2),
        days = Math.floor(time / (3600 * 24));
 
    return {
        seconds,
        minutes,
        hours,
        days,
        time
    }
};


const countDown = (dateEnd,div)=>{
    

    let timerUpdate =  setInterval(()=>{
      let currentTime = getTime(dateEnd)

      div.innerHTML = `<div class="count_days ">
    <div class="days mid_box">
      <div class="top box"></div>
      <div class="mid"> 
       <div class="mid_ball left"></div>
       <div class="mid_ball rigth"></div>
      </div>
      <div class="bottom box"></div>
      <p class="number">${currentTime.days}</p>
    </div>
    <p class="text">Days</p>
   </div>
   <div class="count_hours ">
    <div class="hours mid_box">
      <div class="top box"></div>
      <div class="mid">
        <div class="mid_ball left"></div>
        <div class="mid_ball rigth"></div>
      </div>
      <div class="bottom box"></div>
      <p class="number">${currentTime.hours}</p>
    </div>
    <p class="text">Hours</p>
   </div>
   <div class="count_minutes ">
    <div class="minutes mid_box">
      <div class="top box"></div>
      <div class="mid">
       <div class="mid_ball left"></div>
       <div class="mid_ball rigth"></div>
      </div>
      <div class="bottom box"></div>
      <p class="number">${currentTime.minutes}</p>
    </div>
    <p class="text">Minutes</p>
   </div>
   <div class="count_seconds mid_box">
    <div class="seconds ">
      <div class="top box"></div>
      <div class="mid">
       <div class="mid_ball left"></div>
       <div class="mid_ball rigth"></div>
      </div>
      <div class="bottom box"></div>
      <p class="number">${currentTime.seconds}</p>
    </div>
    <p class="text">Seconds</p>
   </div>`

      const top = document.querySelectorAll(".top");
      const bottom = document.querySelectorAll(".bottom");
      const number = document.querySelectorAll(".number");
      top[3].style.animation = "slideUp 0.2s forwards"

      
      bottom[3].style.animation = "slideDown 0.2s forwards"

      number[3].style.animation = "aparecer 0.3s forwards"

      if(number[3].innerHTML==59){
        top[2].style.animation = "slideUp 0.2s forwards"
        bottom[2].style.animation = "slideDown 0.2s forwards"
        number[2].style.animation = "aparecer 0.3s forwards"
      } else if(number[2].innerHTML==59 && number[3].innerHTML==59){
        top[1].style.animation = "slideUp 0.2s forwards"
        bottom[1].style.animation = "slideDown 0.2s forwards"
        number[1].style.animation = "aparecer 0.3s forwards"
      } else if(number[1].innerHTML==23 && number[2].innerHTML==59 && number[3].innerHTML==59){
        top[0].style.animation = "slideUp 0.2s forwards"
        bottom[0].style.animation = "slideDown 0.2s forwards"
        number[0].style.animation = "aparecer 0.3s forwards"
      }

  },1000)
 
}

countDown("5/10/2022",divCountdown)