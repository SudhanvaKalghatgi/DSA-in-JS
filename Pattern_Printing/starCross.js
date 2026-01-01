let n = 5;
let a = Math.floor(n/2) + 1;
for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
        if(i == j || i + j == n + 1){
            process.stdout.write("* ")
        } else {
            process.stdout.write("  ")
        }
    }
    console.log();
}
    