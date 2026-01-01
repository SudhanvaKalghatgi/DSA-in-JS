// let n = 5;
// for (let i = 1; i < n + 1; i++) {
//     for (let j = 1; j < i + 1; j++) {
//      process.stdout.write(`${2 * j - 1} `) // 2*(j-1)
//     }
//     console.log();
// }
    
// let n = 5;
// for (let i = 1; i < n + 1; i++) {
//     for (let j = 1; j <= 2 * i - 1; j+= 2) {
//         process.stdout.write(`${j} `)
//     }
//     console.log();
// }
    
let n = 5;
for (let i = 1; i < n + 1; i++) {
    let a = 1;
    for (let j = 1; j < i + 1; j++) {
        process.stdout.write(`${a} `);
        a += 2;
    }
    console.log();
}
    