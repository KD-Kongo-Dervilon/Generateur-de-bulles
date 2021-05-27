const questionContainer = document.querySelector(".clikEvent");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const reponse = document.querySelector("p");

//questionContainer.addEventListener('click', () => {
//    questionContainer.classList.toggle('question-click');
//})

btn1.addEventListener('click', () => {
    reponse.classList.add('show-reponse');
    reponse.style.background = "green";
})

btn2.addEventListener('click', () => {
    reponse.classList.add('show-reponse');
    reponse.style.background="red";
})

//------------------------------------------------------------
// Mouse Events

const mousemove = document.querySelector('.mousemove')

window.addEventListener('mousemove', (e)=> {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
})

window.addEventListener("mousedown", ()=> {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", ()=> {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
})

questionContainer.addEventListener('mouseout', () => {
    questionContainer.style.background = "blue";
})

reponse.addEventListener('mouseover', () => {
    reponse.style.transform = "rotate(2deg)";
})

//-----------------------------------------------------------
// keypress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

// add song javascript 
const ring = () => {
    const audio = new Audio();
    audio.src = "  ./song.mp3";
    audio.play();
    
}



document.addEventListener('keypress', (e) => {
    key.textContent = e.key;

    if(e.key === "j") {
        keypressContainer.style.background = "crimson";
    } else if (e.key === "h") {
        keypressContainer.style.background =" teal";
    } else {
        keypressContainer.style.background = "green";
    }

    //ring();
});

//---------------------------------------------------------
// scroll Event 

const nav = document.querySelector("nav");

window.addEventListener('scroll', () => {

    if(window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});

const animationBox1 = document.querySelector(".box-1");
const animationBox2 = document.querySelector(".box-2");

window.addEventListener('scroll', () => {
    if(window.scrollY > 220) {
        animationBox1.style.transform = "translateX(0%)";
    } else {
        animationBox1.style.transform = "translateX(-200%)";
    }
});


//------------------------------------------------------------
// Form Event
const inputName = document.querySelector("input[type='text']");
const select =document.querySelector("select");
const form = document.querySelector("form");


let pseudo = "";
let language =  "";

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});

select.addEventListener('input', (e) => {
    language = e.target.value ;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(cgv.checked)

    if(cgv.checked){
        // Affiche le contenu des variables
        document.querySelector(" form > div ").innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>|
        <h4>Language préféré : ${language}</h4>
        `;
    } else {
        alert('veuillez accepter les CGV')
    }
});

//--------------------------------------------
// load Event 

window.addEventListener("load", () => {
    console.log("ca marche ! ")
});

//----------------------------------------------------------
// ForEach
const boxes = document.querySelectorAll('.box');
console.log(boxes);

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        console.log(e.target)
        e.target.style.transform = "scale(0.7)";
    })

});

//-----------------------------------------------------
// exercice calculatrice

const buttons = document.querySelectorAll('.btn');
const resultat = document.getElementById("resultat");

console.log(resultat)

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        resultat.textContent += e.target.id
    })
})

equal.addEventListener('click', () => {
    resultat.textContent = eval(resultat.textContent)
});

clear.addEventListener('click', () => {
    resultat.textContent = "";
})

//----------------------------------------------------
// BOM

//console.log(window.innerHeight);
//console.log(window.scrollY);
//window.open('https://google.com', "cours js", "height=600, width=800");

// confirm
//btn2.addEventListener('click', () => {
//    confirm("Voulez vous vraiment vous tromper ?");
//})

// prompt 
btn1.addEventListener('click', ()=> {
    prompt("Entrer votre nom !");
    let answer = prompt("Entrer votre nom !");

    questionContainer.innerHTML += `<h3>Bravo ${answer}`
})

setTimeout(() => {
    questionContainer.style.borderRadius = "300px";
}, 2000)

//let interval = setInterval(() => {
//    document.body.innerHTML += `<div class="box"><h2>Nouvelle Boite !</h2></div> `
//}, 1000);

//document.body.addEventListener('click', (e) => {
//    e.target.remove();  // retirer un element du dom
//   clearInterval(interval)
//});

// console 
//console.log(location.href);
//console.log(location.host);
//console.log(location.search);
//location.replace("http://sports.fr");
//console.log(navigator.userAgent);
//console.log(history);
//window.history.back();

//-------------------------------------------------------------
// setproperty

//window.addEventListener('mousemove', (e) => {
//    nav.style.setProperty('--x', e.layerX + "px")
//    nav.style.setProperty('--y', e.layerY + "px")
//});


// generateur de bulles 
