let principal = document.getElementById('principal').value;
let rate = document.getElementById('rate').value;
let years = document.getElementById('years').value;
let interest = principal * years * rate / 100;
let year = new Date().getFullYear() + parseInt(years);

function updateRate() {
    let rateval = document.getElementById('rate').value;
    document.getElementById("rate_val").innerText = rateval
}

function compute()
{
    p = document.getElementById("principal").value;
    document.getElementById('result').innerHTML = `If you deposit ${principal},\<br\>at an interest rate of ${rate}%\<br\>You will receive an amount of ${interest},\<br\>in the year ${year}\<br\>`
}
        