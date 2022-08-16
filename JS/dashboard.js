/* -------------On Click Function for Deposit Button------------ */
document.getElementById("deposit-btn").addEventListener("click", function () {
    //get the deposit amount
    const depositField = document.getElementById("deposit");
    const depositAmount = parseInt(depositField.value);

    //error if deposit field is empty
    if (depositField.value === "") {
        alert("Deposit Field Cannot Be Empty");
    } else {
        //set the deposit amount to the deposit and balance section
        const depositSection = document.getElementById("deposit-amount");
        depositSection.innerText = parseInt(depositSection.innerText) + depositAmount;
        //balance section
        const balanceSection = document.getElementById("balance-amount");
        balanceSection.innerText = parseInt(balanceSection.innerText) + depositAmount;
        depositField.value = "";
    }
});

/* -------------On Click Function for Withdraw Button------------ */
document.getElementById("withdraw-btn").addEventListener("click", function () {
    //get the withdraw amount
    const withdrawField = document.getElementById("withdraw");
    const withdrawAmount = parseInt(withdrawField.value);

    //error if withdraw field is empty
    if (withdrawField.value === "") {
        alert("Withdraw Field Cannot Be Empty");
    } else {
        //set the withdraw amount to the withdraw section and deduct amount from balance section
        const withdrawSection = document.getElementById("withdraw-amount");
        withdrawSection.innerText = parseInt(withdrawSection.innerText) + withdrawAmount;
        //balance section
        const balanceSection = document.getElementById("balance-amount");
        balanceSection.innerText = parseInt(balanceSection.innerText) - withdrawAmount;
        withdrawField.value = "";
    }
});
