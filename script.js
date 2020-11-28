const $response = document.getElementById('time')
const $title = document.getElementById('title')
const $selectDate = document.getElementById('selectDate')
const $countDown = document.getElementById('countdown')
const $day = document.getElementById('day')
const $month = document.getElementById('month')
const $year = document.getElementById('year')

//months have 31 days
const month31 = ['1','3','5','7','8','10','12'];

//months have 30 days
const month30 = ['4','6','9','11'];

//Set days
function setDays() {  

  month = $month.value
  const days = []
  
  let daysInMonth = 28;
  if(month31.includes(month)){
	  daysInMonth = 31;
  }else if(month30.includes(month)){
	  daysInMonth = 30;
  }
  
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(`<option >${i}</option>`) 
  }
  
  $day.innerHTML = days.join('')
}

//add event listener 
$month.addEventListener('change', function(event){
	
	setDays()
})

//add event listener 
$countDown.addEventListener('click', function(event){
	let inputTime = new Date($year.value+'-'+$month.value+'-'+$day.value+' 00:00');
  timer = setInterval(function (){
	let now = new Date();  
   let seconds = (inputTime - now) / 1000; 
   if(seconds > 0) {
	   const daysDiff = parseInt(seconds / 3600 /24)
       const hourDiff = parseInt(seconds / 3600 % 24);  
       const minutesDiff = parseInt(seconds / 60 % 60);  
       const secondsDiff = parseInt(seconds % 60 );  
	   $title.innerHTML = `Countdown`
	   $response.innerHTML = `${daysDiff} : ${hourDiff} : ${minutesDiff} : ${secondsDiff}`
		$selectDate.innerHTML = `<button onClick='window.location.reload()'>Change Countdown</button>`
    } else {
		clearInterval(timer);
    }
  },1000)
})

setDays()
