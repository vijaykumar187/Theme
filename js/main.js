//DOM Elements

const time = document.getElementById("time"),
 greeting = document.getElementById("greeting"),
 name = document.getElementById("name"),
 focus = document.getElementById("focus");

const showAMPM = true

//Show Time

function showtime(){

    let today = new Date(),
     hour = today.getHours(),
     minutes  = today.getMinutes(),
     seconds = today.getSeconds()
    
    
    //Set AM or PM

    const ampm = hour >= 12 ? 'PM' : 'AM' 

    // 12hour Format

    hour = hour % 12 || 12 ;

    //output Time

    time.innerHTML = `${hour}<span>:</span>${addzeroes(minutes)}<span>:</span>${addzeroes(seconds)} ${showAMPM ? ampm : ''}`

    setTimeout(showtime, 1000)
}

// Add zeroes

function addzeroes(number){

    return (parseInt(number,10) < 10 ? '0' : '') + number ;
}

// set BG an Greetings

function setBGGreet(){

    let today = new Date(),
     hour = today.getHours();
    

    if(hour < 12){
        //morning

        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = "Good Morning"
    }
    else if(hour < 18){
        //afternoon

        document.body.style.backgroundImage = "url('../img/afternoon.jpg')"
        greeting.textContent = "Good Afternoon"
    }
    else{
        //evening

        document.body.style.backgroundImage = "url('../img/night.jpg')"
        greeting.textContent = "Good Evening"
        document.body.style.color = 'white' ;
    }
}

//get Name

function getName() {

    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]'
    }

    else{
        name.textContent = localStorage.getItem('name')
    }
}


//get Focus 
function getFocus() {

    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]'
    }

    else{
        focus.textContent = localStorage.getItem('focus')
    }
}

//set Name

function setName(e){

    if(e.type === 'keypress')
    {
        if(e.which === 13 || e.keyCode === 13)
        {
            localStorage.setItem('name',e.target.innetText)
            name.blur()
        }

    }
    else{
        localStorage.setItem('name',e.target.innetText)
    }

}


//set Focus

function setFocus(e){

    if(e.type === 'keypress')
    {
        if(e.which === 13 || e.keyCode === 13)
        {
            localStorage.setItem('focus',e.target.innetText)
            focus.blur()
        }

    }
    else{
        localStorage.setItem('focus',e.target.innetText)
    }

}


name.addEventListener('keypress',setName)
name.addEventListener('blur',setName)

focus.addEventListener('keypress',setFocus)
focus.addEventListener('blur',setFocus)

//run 
showtime()
setBGGreet()
getName()
getFocus()