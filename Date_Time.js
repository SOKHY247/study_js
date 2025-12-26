 // Date object = Object that contain values represent dates and times
 //                 These date objects can be change and formatted

 // Date
 const date = new Date();

const year = date.getFullYear()
 const month = date.getMonth()
 const day = date.getDate();
const hour = date.getHours()
 const minutes = date.getMinutes()
 const seconds =date.getSeconds()
 const dayOfweek = date.getDay()

 date.setFullYear(2025)
 date.setMonth(0)
console.log(date)

 const date1 = new Date("2025-12-07")
 const date2 = new Date ("2026-01-01")

 if (date2 > date1){
     console.log("Happy new Year!👨‍💻 sokhy ")
 }