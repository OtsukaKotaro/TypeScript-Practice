import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const ask = (q: string) =>
new Promise<string>(resolve => rl.question(q, resolve));

async function main(){
    const start_weight = await ask("初めの体重を入力してください(kg)：");
    const goal_weight = await ask("目標体重を入力してください(kg)：");
    const now_weight = await ask("現在の体重を入力してください(kg)：");

    const persent: number = (Math.round(1000 * ((Number(start_weight) - Number(now_weight)) / (Number(start_weight) - Number(goal_weight))))) / 10;
    console.log(`現在のダイエット進捗率は ${persent} %です。\n`);
    
    if(persent >= 100){
        console.log("目標達成ですね！おめでとうございます！");
    } else if(persent < 100 && persent >= 80){
        console.log("もう少しで目標達成！頑張りましょう！");
    } else if(persent < 80 && persent >= 60){
        console.log("頑張ってますね！その調子です！");
    } else if(persent < 60 && persent >= 40){
        console.log("約半分ですね。この調子で頑張りましょう！");
    } else if(persent < 40 && persent >= 20){
        console.log("いいですね！確実に目標に近づいてますよ！");
    } else if(persent < 20 && persent >= 0){
        console.log("始まったばかりです！目標に向かって頑張りましょう！");
    }

    rl.close();
}

main().catch(console.error);