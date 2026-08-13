// Get saved values from localStorage

let gross = localStorage.getItem("gross")
let nhif = localStorage.getItem("nhif")
let nssf = localStorage.getItem("nssf")
let nhdf = localStorage.getItem("nhdf")
let payee = localStorage.getItem("PAYEE")
let netSalary = localStorage.getItem("net_salary")


// Calculate total deductions

let totalDeductions =
    Number(nhif) +
    Number(nssf) +
    Number(nhdf) +
    Number(payee)


// Display Gross Salary

document.getElementById("my_gross").innerHTML =
    "KSh " + Number(gross).toLocaleString()


// Display Total Deductions

document.getElementById("my_total_deductions").innerHTML =
    "KSh " + totalDeductions.toLocaleString()


// Display PAYEE

document.getElementById("my_PAYEE").innerHTML =
    "KSh " + Number(payee).toLocaleString()


// Display Net Salary

document.getElementById("my_net_salary").innerHTML =
    "KSh " + Number(netSalary).toLocaleString()