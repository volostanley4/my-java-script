
document.getElementById("tax_form").addEventListener("submit", function (event) {
    event.preventDefault()

    // Write a program that takes input of someone's basic salary and benefits, adds them to find the gross salary then uses  the gross salary to find the NHIF. 
    let basic_salary = Number(document.getElementById("basic").value)
    let benefits = Number(document.getElementById("benefits").value)

    function gross_salary(basic_salary, benefits) {
        return basic_salary + benefits
    }
    let gross = gross_salary(basic_salary, benefits)
    document.getElementById("gross").innerHTML = gross

    function calculate_nhif(gross) {
        let nhif;
        if (gross <= 5999) {
            nhif = 150
        } else if (gross <= 7999) {
            nhif = 300
        } else if (gross <= 11999) {
            nhif = 400
        } else if (gross <= 14999) {
            nhif = 500
        } else if (gross <= 19999) {
            nhif = 600
        } else if (gross <= 24999) {
            nhif = 750
        } else if (gross <= 29999) {
            nhif = 850
        } else if (gross <= 34999) {
            nhif = 900
        } else if (gross <= 39999) {
            nhif = 950
        } else if (gross <= 44999) {
            nhif = 1000
        } else if (gross <= 49999) {
            nhif = 1100
        } else if (gross <= 59999) {
            nhif = 1200
        } else if (gross <= 69999) {
            nhif = 1300
        } else if (gross <= 79999) {
            nhif = 1400
        } else if (gross <= 89999) {
            nhif = 1500
        } else if (gross <= 99999) {
            nhif = 1600
        } else {
            nhif = 1700
        }
        return nhif
    }
    let nhif = calculate_nhif(gross)
    document.getElementById("nhif").innerHTML = nhif


    // Continue with the program above, then use  the gross salary to find the NSSF. 
    // To find the Kenya NSSF Rate  using 6% of the Gross Salary. BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF. 
    function calculate_nssf(gross) {
        let nssf;
        if (gross < 18000) {
            nssf = 18000 * 0.06
        } else {
            nssf = gross * 0.06
        }
        return nssf
    }
    let nssf = calculate_nssf(gross)
    document.getElementById("nssf").innerHTML = nssf


    // Continue with the same program and calculate an individual’s NHDF using:
    //  i.e NHDF = gross_salary *  0.015
    function calculate_nhdf(gross) {
        let nhdf;
        nhdf = gross * 0.015
        return nhdf
    }
    let nhdf = calculate_nhdf(gross)
    document.getElementById("nhdf").innerHTML = nhdf

    // Calculate the taxable income.
    // i.e taxable_income = gross salary - (NSSF + NHDF + NHIF) 
    function calculate_taxable_income(gross, nssf, nhdf, nhif) {
        return gross - (nssf + nhdf + nhif)
    }
    let taxable_income = calculate_taxable_income(gross, nssf, nhdf, nhif)
    document.getElementById("taxable_income").innerHTML = taxable_income

    // Continue with the same program and find the person's PAYEE using the taxable income above.
    function calculate_PAYEE(taxable_income) {
        let tax = 0;
        if (taxable_income <= 24000) {
            tax = taxable_income * 0.10
        } else if (taxable_income <= 32333) {
            tax = (24000 * 0.10) + ((taxable_income - 24000) * 0.25)
        } else if (taxable_income <= 500000) {
            tax = (24000 * 0.10) + (8333 * 0.25) + ((taxable_income - 32333) * 0.30)
        } else if (taxable_income <= 800000) {
            tax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((taxable_income - 500000) * 0.325)
        } else {
            tax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((taxable_income - 800000) * 0.35)
        }
        tax = tax - 2400
        if (tax < 0) {
            tax = 0
        }
        return tax
    }
    let PAYEE = calculate_PAYEE(taxable_income)
    document.getElementById("PAYEE").innerHTML = PAYEE

    // Continue with the same program and calculate an individual’s Net Salary using:
    //  net_salary = gross_salary - (nhif + nhdf +  nssf + payee)
    function calculate_net_salary(gross, nhif, nhdf, nssf, PAYEE) {
        return gross - (nhif + nhdf + nssf + PAYEE)
    }
    let net_salary = calculate_net_salary(gross, nhif, nhdf, nssf, PAYEE)
    document.getElementById("net_salary").innerHTML = net_salary

})