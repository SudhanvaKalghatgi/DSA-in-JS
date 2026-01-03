let n = 5;
for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ")
    }
    for (let j = 1; j < i + 1; j++) {
        process.stdout.write(String.fromCharCode(j + 64 ))    
    }
            
   console.log();
}
    