function funcaoRecursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    funcaoRecursiva(max);
}

funcaoRecursiva(-10);

