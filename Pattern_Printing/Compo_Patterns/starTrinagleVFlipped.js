let n = 6;
for (let i = 1; i < n + 1; i++) {// rows
    for (let j = 1; j <= n  - i; j++) { //spaces
        process.stdout.write("  ")
    }
     for (let j = 1; j < i + 1; j++) { //stars
        process.stdout.write("* ")
    }
    console.log();
}
    