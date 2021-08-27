// let principal = document.getElementById('principal').value;
// let rate = document.getElementById('rate').value;
let rateval = document.getElementById('rate').value
document.getElementById("principal").value = null


function updateRate() {
    rateval = document.getElementById('rate').value;
    document.getElementById("rate_val").innerText = rateval + '%'
}

function compute()
{
    let principal = document.getElementById("principal");
    let years = document.getElementById('years').value;
    let year = new Date().getFullYear() + parseInt(years);
    let interest = principal * years * rateval / 100;
    if (principal.value <= 0) {
        alert("You must enter a positive amount")
        principal.focus()
    } else {
        document.getElementById('result').innerHTML = `\<br\>If you deposit <mark>$${principal.value}</mark>,\<br\>at an interest rate of <mark>${rateval}%</mark>.\<br\>You will receive an amount of <mark>${interest}</mark>,\<br\>in the year <mark>${year}</mark>\<br\>`
    }
}
        