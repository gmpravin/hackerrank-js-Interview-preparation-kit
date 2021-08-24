/** Arrays: Left Rotation */
function rotLeft(a, d) {
    var left = [];
    var right = [];
    var n=a.forEach((i,j) => {
        if(j>=d){ left.push(i) }
        if(j<d){ right.push(i) }
    });
    return [...left,...right];
}
