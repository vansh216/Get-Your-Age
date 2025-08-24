function main(){
 const dates=document.querySelector (".date")
  const data=document.querySelector (".data")
  const sbg= document.querySelector(".secondBackground")
    sbg.classList.toggle("none")
    dates.classList.toggle("none")
    data.classList.toggle("none")
     

} 
// start btm
 document.querySelector(".set").addEventListener("click",(e)=>{
   e.stopPropagation
   main()
   
})
// submit btn and date calculate 
function data(){
let date= document.getElementById("date").value;
let currentDate = new Date()
let dates = new Date(date)
console.log(currentDate)
console.log(dates)
let dateDiff= currentDate-dates;
const year = (dateDiff/(1000*60*60*24*365))

const month = (dateDiff/(1000*60*60*24*365))*12
const day = (dateDiff/(1000*60*60*24*365))*(12*30)
const hour = (dateDiff/(1000*60*60*24*365))*(12*30*60)
const second = (dateDiff/(1000*60*60*24*365))*(12*30*60*60)
let years=document.getElementById("year")
let months=document.getElementById("month")
let days=document.getElementById("day")
let hours=document.getElementById("hour")
let seconds=document.getElementById("second")
years.innerHTML=Math.floor(year)+" years"
months.innerHTML=Math.floor(month)+" months"
days.innerHTML=Math.floor(day)+" days"
hours.innerHTML=Math.floor(hour)+" hours"
seconds.innerHTML=Math.floor( second)+" seconds"
}
