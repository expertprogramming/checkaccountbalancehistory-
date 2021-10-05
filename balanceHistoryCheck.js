const accountBalanceHistory = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 200 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 300 },
        },
    }
]


function accountTypeChecker(accountHistory) {
    // history is not present. array of length 1
    if(accountHistory.length == 0)
        return "no history found";
    
    // when only 1 or 2 month is history is provided. lack of data to determine where fixed or variable
    if(accountHistory.length == 1 || accountHistory.length == 2)
        return "unable to determine";

    let isFixed = true;
    let prevDiff;

    //starting loop from 1 here // another approch we can start from 0 and end loop accountHistory.length - 2
    for(let i = 1; i < accountHistory.length; i++) {
        if(prevDiff) {
            console.log("prev",prevDiff);
            let curDiff =  accountHistory[i].account.balance.amount - accountHistory[i-1].account.balance.amount;
            console.log("curr dif",curDiff);
            // if curDiff is equal loop other element, otherwise break the loop and account history is dynamic
            if(curDiff != prevDiff) {
                isFixed = false;
                break;
            }
        } else {
            // setting up diff for 1st 2 record
            prevDiff = accountHistory[i].account.balance.amount - accountHistory[i-1].account.balance.amount;
        }
    }
    
    return !isFixed ? 'A':'B';
}

let output = accountTypeChecker(accountBalanceHistory);
console.log(output)