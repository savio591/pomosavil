import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual o seu nome, amigo ? ", (name) => {
    rl.question("Quer estudar por quantos minutos? ", (studymin) => {
        console.log(`${name} vai estudar por ${studymin} minutos.`);
        rl.close();
    });
});

rl.on("close", () => {
    console.log("\nInté! Venha mais tarde para ver se o app funciona, okay? ;)");
    process.exit(0);
});