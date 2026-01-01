let n = 5;
for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < i + 1; j++) {
        if (i == j || (i + j) % 2 == 0  ) {
            process.stdout.write("1 ")
        } else if (i + j % 2 !== 0) {
            process.stdout.write("0 ")
        }
        else {
            process.stdout.write("  ")
        }
    }
    console.log();
}
    