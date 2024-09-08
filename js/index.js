const sideBar = document.querySelector(".sideBar");
const hamIcon = document.getElementById("hamIcon");
function toggleSidebar() {
    // console.log("toggleSidebar function called");
    sideBar.classList.toggle("right");
}

const myRange = document.getElementById("myRange");
const demo = document.getElementById("demo");
demo.innerHTML = myRange.value;

myRange.oninput = function () {
    demo.innerHTML = this.value;
    updateNtc();
}

const myRange1 = document.getElementById("myRange1");
const demo1 = document.getElementById("demo1");

demo1.innerHTML = myRange1.value * 100;

myRange1.oninput = function () {
    const calculatedValue = this.value * 100;
    demo1.innerHTML = calculatedValue;
    updateNtc();
}

const ntc = document.getElementById("ntc");
const newNtc = document.getElementById("newNtc");


function updateNtc() {
    ntc.innerHTML = ""
    newNtc.innerHTML = ""

    const value1 = parseFloat(demo.innerHTML);
    const value2 = parseFloat(demo1.innerHTML);
    let manat = (value1 * value2).toFixed(2);
    ntc.innerHTML = `sehife: ${demo.innerHTML}, manat: ${manat}`
    newNtc.innerHTML = `${manat}`
}

updateNtc();

const mySwitch = document.getElementById("mySwitch");
const mySwitch1 = document.getElementById("mySwitch1");
const mySwitch2 = document.getElementById("mySwitch2");
const mySwitch3 = document.getElementById("mySwitch3");
const mySwitch4 = document.getElementById("mySwitch4");
const mySwitch5 = document.getElementById("mySwitch5");
const mySwitch6 = document.getElementById("mySwitch6");
const mySecSwitch = document.getElementById("mySecSwitch");
const mySecSwitch1 = document.getElementById("mySecSwitch1");
const mySecSwitch2 = document.getElementById("mySecSwitch2");
const mySecSwitch3 = document.getElementById("mySecSwitch3");
const mySecSwitch4 = document.getElementById("mySecSwitch4");
const mySecSwitch5 = document.getElementById("mySecSwitch5");
const mySecSwitch6 = document.getElementById("mySecSwitch6");
const ntc1 = document.getElementById("ntc1");
const newNtc1 = document.getElementById("newNtc1");

function hesapla() {
    const switches = [
        mySwitch, mySwitch1, mySwitch2, mySwitch3, mySwitch4, mySwitch5, mySwitch6,
        mySecSwitch, mySecSwitch1, mySecSwitch2, mySecSwitch3, mySecSwitch4,
        mySecSwitch5, mySecSwitch6
    ];
    
    let total = 0;
    switches.forEach(switchEl => {
        if (switchEl.checked) {
            total += parseFloat(switchEl.value) || 0;
        }
    });
    
    ntc1.innerHTML = total;
    newNtc1.innerHTML = total;
}

// Bind function to onchange event for each switch
const switchElements = [
    mySwitch, mySwitch1, mySwitch2, mySwitch3, mySwitch4, mySwitch5, mySwitch6,
    mySecSwitch, mySecSwitch1, mySecSwitch2, mySecSwitch3, mySecSwitch4,
    mySecSwitch5, mySecSwitch6
];

switchElements.forEach(switchEl => {
    switchEl.onchange = hesapla;
});

// Initialize the total value
hesapla();


const check = document.getElementById("check");
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");
const ntc2 = document.getElementById("ntc2");
const newNtc2 = document.getElementById("newNtc2");

function cem() {
    const checks = [
        check, check1, check2, check3, check4
    ];
    let total = 0;
    checks.forEach(checkler => {
        if (checkler.checked) {
            total += parseFloat(checkler.value) || 0;
        }
    });
    ntc2.innerHTML = total;
    newNtc2.innerHTML = total;
}

// Bind the `cem` function to the `onchange` event of each checkbox
const checkElements = [
    check, check1, check2, check3, check4
];

checkElements.forEach(checkler => {
    checkler.onchange = cem;
});

// Initialize the total value
cem();


const myLastSwitch = document.getElementById("myLastSwitch");
const myLastSwitch1 = document.getElementById("myLastSwitch1");
const myLastSwitch2 = document.getElementById("myLastSwitch2");
const myLastoneSwitch = document.getElementById("myLastoneSwitch");
const myLastoneSwitch1 = document.getElementById("myLastoneSwitch1");
const myLastoneSwitch2 = document.getElementById("myLastoneSwitch2");
const ntc3 = document.getElementById("ntc3");
const newNtc3 = document.getElementById("newNtc3");

function tap() {
    const switches1 = [
        myLastSwitch, myLastSwitch1, myLastSwitch2,
        myLastoneSwitch, myLastoneSwitch1, myLastoneSwitch2
    ];

    let total = 0;
    switches1.forEach(switchEl1 => {
        if (switchEl1.checked) {
            total += parseFloat(switchEl1.value) || 0;
        }
    });

    ntc3.innerHTML = total;
    newNtc3.innerHTML = total;

}

const switchElements1 = [
    myLastSwitch, myLastSwitch1, myLastSwitch2,
    myLastoneSwitch, myLastoneSwitch1, myLastoneSwitch2
];

switchElements1.forEach(switchEl1 => {
    switchEl1.onchange = tap;
});

tap();

const myLastOneRange = document.getElementById("myLastOneRange");
const ntc4 = document.getElementById("ntc4");
const newNtc4 = document.getElementById("newNtc4");

ntc4.innerHTML = myLastOneRange.value * 100;

myLastOneRange.oninput = function () {
    const calculatedValue = this.value * 100;
    ntc4.innerHTML = calculatedValue;
    newNtc4.innerHTML = calculatedValue;
    
}

// const totalNtcElements = [
//     newNtc, newNtc1, newNtc2, newNtc3, newNtc4
// ];

// const ntc5 = document.getElementById("ntc5");

// function show() {
//     let total = 0;
//     totalNtcElements.forEach(neticeler => {
//         total += parseFloat(neticeler.innerHTML) || 0;
//     });

//     ntc5.innerHTML = total;
// }

// totalNtcElements.forEach(neticeler => {
//     neticeler.innerHTML = neticeler.innerHTML; // Trigger update if needed
// });

// show();
///////////////////////////////////////////////////////////////
// const ntc5 = document.getElementById("ntc5");

// function show() {
//     const result = [
//         newNtc,  newNtc1,  newNtc2,
//         newNtc3,  newNtc4
//     ];

//     let total = 0;
//     result.forEach(neticeler => {
//         if (neticeler.checked) {
//             total += parseFloat(neticeler.value) || 0;
//         }
//     });

//     ntc5.innerHTML = total;
// }

// const sonNeticeler = [
//     newNtc,  newNtc,  newNtc2,
//     newNtc3,  newNtc4
// ];

// sonNeticeler.forEach(neticeler => {
//     neticeler.onchange = show;
// });

// show();
////////////////////////////////////////////////////////////////
// const ntc5 = document.getElementById("ntc5");

// function show() {
//     const result = [
//         newNtc,  newNtc1,  newNtc2,
//         newNtc3,  newNtc4
//     ];

//     let total = 0;
//     result.forEach(neticeler => {
//         // Parse the innerHTML as a number and add to total
//         total += parseFloat(neticeler.innerHTML) || 0;
//     });

//     ntc5.innerHTML = total;
// }

// // Initialize the total value
// show();






