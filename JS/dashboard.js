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
