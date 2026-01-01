let n = 5;
for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
        process.stdout.write(String.fromCharCode(64 + j) + " ");
    }
    console.log();
}
    