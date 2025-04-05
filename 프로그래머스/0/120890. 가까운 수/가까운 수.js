function solution(array, n) {
    const arr = array.map(v => Math.abs(n - v));
    let rank_num = Infinity;
    let rank_index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (rank_num > arr[i] || (rank_num === arr[i] && array[i] < array[rank_index])) {
            rank_num = arr[i];
            rank_index = i;
        }
    }

    return array[rank_index];
}