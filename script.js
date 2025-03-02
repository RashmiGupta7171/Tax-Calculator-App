function calculateTax() {

    var income = document.getElementById('incomeAmount').value

    if (!Number.isInteger(Number(income))) {
        document.getElementById('result').innerHTML = "Please Enter a Valid Number"
        return;
    }

    if (income <= 1200000) {
        document.getElementById('result').innerHTML = "No Tax";
        return;
    }
    else {
        var taxrate = 0;
        var tax = 0;
        while (income > 0) {
            if (taxrate == 30) {
                tax = tax + (income * taxrate * 0.01);
                break;
            }

            if (income >= 400000) {
                tax = tax + (400000 * taxrate * 0.01);
                taxrate = taxrate + 5;
                income = income - 400000;
            }
            else {
                tax = tax + (income * taxrate * 0.01);
                income = 0;
            }

        }
        document.getElementById('result').innerHTML = "Taxable Amount:" + tax;
        document.getElementById('result').innerHTML += "<br>Thank you for Calculation";
    }


}