const ram1 = document.getElementById('firstMemory');
const ram2 = document.getElementById('secendMemory');
const extraCost = document.getElementById('stroageDollar');

const stroage1 = document.getElementById('firstStroage');
const stroage2 = document.getElementById('secendStroage');
const stroage3 = document.getElementById('thirdStroage');
const stroageCoat = document.getElementById('StroageCost');

const delivary1 = document.getElementById('freeDelivary');
const delivary2 = document.getElementById('costDelivary');
const delivarCost = document.getElementById('delivaryAmount')

const totalPrice = document.getElementById('totalPrice');


function updateTotal() {
    const extraPrice = Number(extraCost.innerText);
    const stroagePrice = Number(stroageCoat.innerText);
    const delivaryPrice = Number(delivarCost.innerText);
    const grandTotal = extraPrice + stroagePrice + delivaryPrice;
    totalPrice.innerText = grandTotal;

}

ram1.addEventListener('click', function () {
    extraCost.innerText = '0';
    updateTotal()
});
ram2.addEventListener('click', function () {
    extraCost.innerText = '100'
    updateTotal()
})
stroage1.addEventListener('click', function () {
    stroageCoat.innerText = '0';
    updateTotal()
})
stroage2.addEventListener('click', function () {
    stroageCoat.innerText = '100';
    updateTotal()
})
stroage3.addEventListener('click', function () {
    stroageCoat.innerText = '180';
    updateTotal()
})
delivary1.addEventListener('click', function () {
    delivarCost.innerText = '0'
    updateTotal()
})
delivary2.addEventListener('click', function () {
    delivarCost.innerText = '20'
    updateTotal()
})