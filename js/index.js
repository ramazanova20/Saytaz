const ntc5 = document.getElementById("ntc5");

const sideBar = document.querySelector(".sideBar");
const hamIcon = document.getElementById("hamIcon");
function toggleSidebar() {
    // console.log("toggleSidebar function called");
    sideBar.classList.toggle("right");
}

const myRange = document.getElementById("myRange");
const myRange1 = document.getElementById("myRange1");
const ntc = document.getElementById("ntc");
const newNtc = document.getElementById("newNtc");

myRange.oninput = function () {
    updateNtc();
}

myRange1.oninput = function () {
    updateNtc();
}

function updateNtc() {
    ntc.innerHTML = "";
    newNtc.innerHTML = "";

    const value1 = parseFloat(myRange.value);
    const value2 = parseFloat(myRange1.value) * 100;
    let manat = (value1 * value2).toFixed(2);

    ntc.innerHTML = `${value1} səhifə / ₼ ${manat}`;
    newNtc.innerHTML = `${manat}`;
    allPrice()
}

// Initialize the values
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

    ntc1.innerHTML = `₼ ${total}`;
    newNtc1.innerHTML = ` ${total}`;
    allPrice()

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
    ntc2.innerHTML = `₼ ${total}`;
    newNtc2.innerHTML = ` ${total}`;
    allPrice()

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

    ntc3.innerHTML = `₼ ${total}`;
    newNtc3.innerHTML = ` ${total}`;
    allPrice()


}

const switchElements1 = [
    myLastSwitch, myLastSwitch1, myLastSwitch2,
    myLastoneSwitch, myLastoneSwitch1, myLastoneSwitch2
];

switchElements1.forEach(switchEl1 => {
    switchEl1.onchange = tap;
}
);

tap();

const myLastOneRange = document.getElementById("myLastOneRange");
const ntc4 = document.getElementById("ntc4");
const newNtc4 = document.getElementById("newNtc4");

// ntc4.innerHTML = myLastOneRange.value * 0;


myLastOneRange.oninput = function () {
    ntc4.innerHTML = "";
    newNtc4.innerHTML = "";

    const calculatedValue = this.value * 100;
    ntc4.innerHTML = `₼ ${calculatedValue}`;
    newNtc4.innerHTML = ` ${calculatedValue}`;

}

function allPrice() {
    const deyerler = document.querySelectorAll(".qeyd span")
    let count = 0
    deyerler.forEach(item => {
        count+= +item.innerHTML
    })
    
    ntc5.innerHTML = count
    

}
