const ABSENT = 0
const FULL_TIME_HOUR = 8
const PART_TIME_HOUR = 4
let workingDays = 0
let empRateArray = [0,80,160]
function getEmployeeWage(attendance,map1){
let empWage = 0

switch(attendance){
    case 1 : empWage = empRateArray[2]*FULL_TIME_HOUR
    workingDays++
    map1.set(workingDays,empRateArray[2])
    console.log("Employee is fulltime present employee wage",empWage)
    break
    case 2 : empWage = empRateArray[1]*PART_TIME_HOUR
    console.log("Employee is partime present with employee wage",empWage)
    workingDays++
    map1.set(workingDays,empRateArray[1])

    break
    case 0 :console.log("Employee is absent",empWage)
    workingDays++
    map1.set(workingDays,empRateArray[0])
}
}
let empMap = new Map()
for(let i = 0;i<10;i++){
    let attendance = Math.floor(Math.random()*3)
    console.log(attendance)
    getEmployeeWage(attendance,empMap)
}
let fullTimeArrayWithKey = new Array()
let fullTimeArrayWithValue = new Array()
empMap.forEach((value,key,map)=>{
if(value==160){fullTimeArrayWithKey.push(key) ;fullTimeArrayWithValue.push(value)
}
})
console.log(empMap)
console.log(fullTimeArrayWithKey)
console.log(fullTimeArrayWithValue)
let firstApperance = fullTimeArrayWithKey[0]
console.log("At",firstApperance,"day full time occured first time")
let fulltimeCheck = fullTimeArrayWithValue.every(x=>x==160)
console.log(fulltimeCheck)
let checkAnyPartTime = fullTimeArrayWithValue.includes(80)
console.log(checkAnyPartTime)
let totalDays = 0
empMap.forEach((value,key,map)=>{if(value==160 || value==80)totalDays++})
console.log(totalDays,"are total working days.")
