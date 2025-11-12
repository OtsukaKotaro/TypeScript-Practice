import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ask = (q: string) =>
new Promise<string>(resolve => rl.question(q, resolve));

async function main(){
    const height = await ask("身長を入力してください(m)：");
    const weight = await ask("体重を入力してください(kg)：");
    const bmi: number = (Math.round(10 * (Number(weight) / (Number(height) ** 2)))) / 10;
    console.log(`あなたのBMIは ${bmi} です。\n`);


    if(bmi < 18.5){
        console.log("低体重です");
    } else if(bmi >= 18.5 && bmi < 25){
        console.log("普通体重です");
    } else if(bmi >= 25 && bmi < 30){
        console.log("肥満(1度)です")
    } else if(bmi >= 30 && bmi < 35){
        console.log("肥満(2度)です");
    } else if(bmi >= 35 && bmi < 40){
        console.log("肥満(3度)です");
    } else{
        console.log("肥満(4度)です");
    }

    rl.close();
}

main().catch(console.error);