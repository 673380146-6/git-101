//ทวนcallback

function calculate(x,y){
    setTimeout(()=>{
        console.log("กำลังคำนวน....")
        return x+y
    },3000)
}

function display(result){
    console.log(`ผลบวก = ${result} ` )
}

const sum = calculate(100,50)
display(sum)

console.log("789456")
console.log("hi")
console.log("hi")
console.log("dhifoi")