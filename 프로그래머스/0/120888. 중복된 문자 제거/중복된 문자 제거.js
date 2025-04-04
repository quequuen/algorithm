function solution(my_string) {
    var arr = new Set(my_string.split(""));
    return [...arr].join('');
}