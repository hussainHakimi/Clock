
    const secondHand = document.querySelector('.hand-second');
    const minutesHand = document.querySelector('.hand-minutes');
    const hourHand = document.querySelector('.hand-hour');

    function setTime(){
      const now = new Date();

      const second = now.getSeconds();
      const secondDegree = ((second / 60) * 360) + 90 ;
      secondHand.style.transform = `rotate(${secondDegree}deg)`;
      
      const minutes = now.getMinutes();
      const minutesDegrees = ((minutes / 60) * 360) + 90;
      minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

      const hour = now.getHours();
      const hourDegrees = (hour / 12) * 360;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }


    setInterval(setTime, 1000);
  
    console.log(Date());