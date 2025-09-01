let time=[10,3,5]
let colorsTop=["#ff0000","#ffee00","#0011ff"]
let colorsBottom=["#ff0000","#ffee00","#0011ff"]
//let colorsBottom=["#ff00d4ff","#ffee00","#00ffe1ff"]
const topColorDivs=document.querySelectorAll(".top")
const bottomColorDivs=document.querySelectorAll(".bottom")
requestAnimationFrame(update)
function update(){
    let date=new Date()
    let min=date.getMinutes();
    if(min<10){
        min="0"+min
    }
    time[0]=date.getHours()%12
    time[1]=min.toString().charAt(0)
    time[2]=min.toString().charAt(1)
    if(date.getHours()>11){
        document.body.style.backgroundColor="black"
    }else{
        document.body.style.backgroundColor="grey"
    }
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