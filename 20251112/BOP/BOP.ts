import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

const ask = (q: string) => 
new Promise<string>(resolve => rl.question(q, resolve));

async function main(){
    try{
        const income = await ask("収入を入力してください：");
        const incomeNum: number = Number(income);
        console.log(`収入は ${incomeNum} 円ですね！\n`);

        const expense = await ask("支出を入力してください：");
        const expenseNum: number = Number(expense);
        console.log(`支出は ${expenseNum} 円ですね！\n`);

        let balance: number = incomeNum - expenseNum;
        console.log(`残高は ${balance} 円です！\n`);

        if(balance >= 1000){
            console.log(`${balance} 円貯金できました！`)
        } else if(balance >= 0 && balance < 1000){
            console.log("赤字ギリギリです...");
        } else{
            balance *= -1;
            console.log(`${balance} 円の赤字です。節約しましょう。`);
        }
    } finally {
        rl.close();
    }
}

main().catch(console.error);