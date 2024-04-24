const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

//getting the current date and adding 10days each time the application is openned
let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

const futureDate = new Date (tempYear , tempMonth , tempDay + 10, 11, 30, 0)

// this line takes the future date 
// let futureDate = new Date(2024,3,24,14,15,0)

const year = futureDate.getFullYear()
// console.log(year)

//getmonth will give the index of the month which is ectracted by passsing that index into our array name months
const month = months[futureDate.getMonth()]


const hours = futureDate.getHours()
// console.log(hours)

const minutes = futureDate.getMinutes()
// console.log(minutes)

let weekday = futureDate.getDay()
weekday = weekdays[weekday]
// console.log(weekday)

const date = futureDate.getDate()
// console.log(date)

giveaway.textContent = `giveaway ends on ${weekday}  ${date} , ${month}  ${year} after ${hours}:${minutes}`


// future time in ms
const futureTime = futureDate.getTime()
// console.log(futureTime)

function getRemainingTime() {
    const today = new Date().getTime()
    // console.log(today)
    //remaining time in miliseconds
    const remainingTime = futureTime - today
    
    //1s = 1000ms
    // 1min = 60s
    // 1hr = 60 min
    // 1day = 24hr

    // getting the days value in milisecind
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMin = 60 * 1000

    // calculate all values
    let days = remainingTime/oneDay
    days = Math.floor(days)
    
    let hours = Math.floor((remainingTime % oneDay) / oneHour)
    // console.log(hours)

    let minutes = Math.floor((remainingTime % oneHour) / oneMin)
    // console.log(minutes)

    let seconds = Math.floor((remainingTime % oneMin) / 1000)
    // console.log(seconds)

    // set values array
    const values = [days , hours , minutes , seconds]
    
    //formatting for display
    const formatting = (item) =>{
        if(item < 10){
            return ` 0${item}`
        }else{
            return item
        }
    }
    items.forEach((item , index) =>{
        item.innerHTML = formatting(values[index])
    })
    if (remainingTime < 0){
        clearInterval(countdown);
        deadline.innerHTML =`<h4 class= "expired"> sorry this giveaway has expired</h4>`
    }

}
//countdown
let countdown = setInterval(getRemainingTime,1000)
//  calling the getRemainingTime function after the set interval is attached
getRemainingTime()