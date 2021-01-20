// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix && matrix.length) {
        const arr = [];
        matrix.forEach((item, index) =>
            !(index % 2) ? arr.push(...item) : arr.push(...item.reverse())
        );
        return arr;
    } else return [];
};
