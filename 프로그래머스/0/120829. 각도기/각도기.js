function solution(angle) {
    return (angle===180)? 4: (180>angle&&angle>90)? 3: (angle<90)? 1:2;
}