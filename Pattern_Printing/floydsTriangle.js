let n = 4;
let a = 1;
for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
        process.stdout.write(`${a} `);
        a += 1;
    }
    console.log();
}
    
        
    