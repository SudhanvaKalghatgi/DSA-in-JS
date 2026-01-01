let n = 4;
for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
        if (i + j == n + 1 || i + j > n) {
            process.stdout.write("* ")
        } else {
            process.stdout.write("  ")
        }
    }
    console.log();
}
    