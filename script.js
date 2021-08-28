// rateval is defined at the beginning so it can work with default or custome values
let rateval = document.getElementById('rate').value

// Changes the value of rate from defualt if user changes slider
function updateRate() {
    rateval = document.getElementById('rate').value;
    document.getElementById("rate_val").innerText = rateval + '%'
}

// Defines all values in local scope (except rateval)
// This ensures values at time of compute will be used
function compute()
{
    let principal = document.getElementById("principal");
    let years = document.getElementById('years').value;
    let year = new Date().getFullYear() + parseInt(years);
    let interest = principal.value * years * rateval / 100;
    // Conditional statement checks to see if positive value is entered
    if (principal.value <= 0) {
        alert("You must enter a positive amount")
        // If invalid principal then user is prompted to re-enter a valid number
        principal.focus()
    } else {
        // Result span html gets inputted
        document.getElementById('result').innerHTML = `\<br\>If you deposit <mark>$${principal.value}</mark>,\<br\>at an interest rate of <mark>${rateval}%</mark>.\<br\>You will receive an amount of <mark>$${interest}</mark>,\<br\>in the year <mark>${year}</mark>\<br\>`
    }
}
        