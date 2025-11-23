function counter(){
    let count=0;
    return function()
{
    count++;
    console.log(count);
    return count;

};
}
const c = counter();
c(); // 1
c(); // 2
c(); // 3

function createWallet(){
    let balance=0;
    return {
        addMoney(amount){
            balance+=amount;
            console.log(`$(amount)added`);
        },
        checkBalance(){
            console.log(`Balance:$(balance)`);
            return balance;
        }

    };
}
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
console.log(myWallet.checkBalance());  
