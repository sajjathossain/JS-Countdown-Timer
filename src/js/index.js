const yearCount = document.querySelector("#year-count")
const monthCount = document.querySelector("#month-count")
const dayCount = document.querySelector("#day-count")
const hourCount = document.querySelector("#hour-count")
const minuteCount = document.querySelector("#minute-count")
const secondCount = document.querySelector("#second-count")
const dateInput = document.querySelector("#date-input")
const startBTN = document.querySelector("#btn")
let time = null

const assignTime = () => {
    document.querySelector("#title").innerHTML = time
    const date = new Date(time).getTime()
    const currentDate = new Date().getTime()
    const difference = Math.abs(date - currentDate)

    // constant times
    const milliseconds = 1
    const second = 1000 * milliseconds
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    const month = day * 30
    const year = month * 12

    // count times
    const theYear = Math.floor(difference / year)
    const theMonth = Math.floor((difference % year) / month)
    const theDay = Math.floor((difference % month)/ day)
    const theHour = Math.floor((difference % day ) / hour)
    const theMinute = Math.floor((difference % hour) / minute)
    const theSecond = Math.floor((difference % minute) / second)

    // assign values
    yearCount.innerHTML = theYear;
    monthCount.innerHTML = theMonth;
    dayCount.innerHTML = theDay;
    hourCount.innerHTML = theHour;
    minuteCount.innerHTML = theMinute;
    secondCount.innerHTML = theSecond;
    
}

const startTimer = () => {
    setInterval(assignTime, 1000)
}

document.addEventListener("DOMContentLoaded", () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const defaultDate = `Jan 01 ${parseInt(new Date().toString().split(" ")[3]) + 1}`
    time = defaultDate
    startTimer(defaultDate)
    
    let inputTime = null;
    startBTN.addEventListener("click", () => {
        inputTime = dateInput.value.split("-")
        inputTime = `${months[inputTime[1]-1]} ${inputTime[2]} ${inputTime[0]}`
        time = inputTime
        startTimer()
    })
    

})