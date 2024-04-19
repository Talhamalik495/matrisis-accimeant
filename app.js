let first_matrix = [[8, 6, 7, 3, 14], [5, 10, 9, 5, 7], [7, 9, 2, 6]];
let secont_matrix = [[6, 9, 7, 2,], [3, 2, 8, 5, 7, 15], [8, 7, 1, 2, 17]];
let a = ("");
for (let i = 0; i < 3; i++) {
    // console.log("start", i);
    // console.log(first_matrix);
    for (let j = 0; j < 4; j++) {
        // console.log(first_matrix[i] + secont_matrix[j]);
        console.log(first_matrix[i][j] + secont_matrix[i][j]);
        // a++;
        // console.log(j);
    }
}
// console.log(a);