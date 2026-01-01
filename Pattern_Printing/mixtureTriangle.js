let n = 6;
for (let i = 1; i < n + 1; i++) {
   for (let j = 1; j < i + 1; j++) {
    if(i % 2 !== 0){
        process.stdout.write(`${j} `)
    } else {
        process.stdout.write(String.fromCharCode(j + 64)+ " ")
    }
}
    console.log();
}
        
    