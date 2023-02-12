document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountEnter = parseFloat(withdrawField.value);
    withdrawField.value = '';
    if(isNaN(withdrawAmountEnter)){
        alert('add a number please');
        return;
    }

    const withdrawDisplayField = document.getElementById('withdraw-previous');
    const withdrawPreviousAmount = parseFloat(withdrawDisplayField.innerText);

    const currentBalance = document.getElementById('balance-previous');
    const currentBalanceAmount = parseFloat(currentBalance.innerText);

    if(withdrawAmountEnter > currentBalanceAmount){
        alert('baaper bank e ato tk nai');
        return;
    }
    const newWithdrawDisplay = withdrawPreviousAmount + withdrawAmountEnter;
    withdrawDisplayField.innerText = newWithdrawDisplay;
    const balanceTotal = currentBalanceAmount - withdrawAmountEnter;
    currentBalance.innerText = balanceTotal;
    
})