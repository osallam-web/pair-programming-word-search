const wordSearch = (letters, word) => {

    const horizontalJoin = letters.map(ls => ls.join(''))

    const verticalJoin = transpose(letters).map(ls => ls.join(''))

    for (const l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    for (const l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

function transpose(matrix) {
    let result = new Array(matrix[0].length);

    for (let i = 0; i < result.length; i++) {
        result[i] = new Array(matrix.length);
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];
        }
    }
    return result;
}


module.exports = wordSearch