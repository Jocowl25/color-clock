let time=[10,3,5]
let colorsTop=["#ff0000","#15ff00ff","#0011ff"]
let colorsBottom=["#ff0000","#00ff33ff","#0011ff"]
//let colorsBottom=["#ff00d4ff","#ffee00","#00ffe1ff"]
const topColorDivs=document.querySelectorAll(".top")
const bottomColorDivs=document.querySelectorAll(".bottom")
requestAnimationFrame(update)
function update(){
    let date=new Date()
    time[2]=date.getMinutes().toString().charAt(1)
    time[1]=date.getMinutes().toString().charAt(0)
    time[0]=date.getHours()%12
    time.forEach((time,i)=>{
        if(time==0){
        topColorDivs[i].style.backgroundColor="black"
        bottomColorDivs[i].style.backgroundColor="black"
        }else{
        topColorDivs[i].style.backgroundColor=colorsTop[(time-1)%3]
        bottomColorDivs[i].style.backgroundColor=colorsBottom[Math.ceil(time/3)-1]
        }
    })
    requestAnimationFrame(update)
}