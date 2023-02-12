document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositField.value);
    depositField.value = '';
    // console.log(depositAmount);
    const depositPrevious = document.getElementById('deposit-previous');
    const previousDeposit = parseFloat(depositPrevious.innerText);
    // console.log(previousDeposit);
    const totalDeposit = depositAmount + previousDeposit;
    depositPrevious.innerText = totalDeposit;

    const currentBalance = document.getElementById('balance-previous');
    const currentBalanceAmount = parseFloat(currentBalance.innerText);
    const balanceTotal = depositAmount + currentBalanceAmount;
    currentBalance.innerText = balanceTotal;

})