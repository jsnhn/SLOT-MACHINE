/*----- constants -----*/




/*----- app's state (variables) -----*/
let slots, currentBet



/*----- cached element references -----*/
const slotEls = [...document.querySelectorAll('#slot-container > div')];



/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', handleClick);



/*----- functions -----*/
init()

function init() {
    slots = {
        left: 3, 
        center: 7,
        right: 15,
    }
    currentBet = 0
    render()
};

function render() {
    slotEls[0].innerText = slots.left;
    slotEls[1].innerText = slots.center;
    slotEls[2].innerText = slots.right;
};

function handleClick() {
    slots.left = Math.floor(Math.random() * (6 - 0));
    slots.center = Math.floor(Math.random() * (6 - 0));
    slots.right = Math.floor(Math.random() * (6 - 0));
    render()
};