// generateur de bulles 
const counterDisplay = document.querySelector("h2");
let counter = "0";

const bubleMaker = () => {
    const buble =document.createElement("span");
    buble.classList.add("buble");
    document.body.appendChild(buble);

    const size = Math.random() * 200 + 100 + "px";
    buble.style.height = size;
    buble.style.width = size;

    buble.style.top = Math.random() * 100 + 50 + "%";
    buble.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    buble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");

    buble.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
        buble.remove();
    })

    setTimeout(() => {
        buble.remove();

    }, 8000);
};

setInterval(bubleMaker, 300);



