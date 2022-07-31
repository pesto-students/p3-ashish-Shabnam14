function maxSubArraySum(a, size) {
    let initMaxValue = Number.MIN_VALUE,
        updatedMaxvalue = 0,
        start = 0,
        end = 0,
        subset = 0;

    for (i = 0; i < size; i++) {
        updatedMaxvalue += a[i];

        if (initMaxValue < updatedMaxvalue) {
            initMaxValue = updatedMaxvalue;
            start = s;
            end = i;
        }

        if (updatedMaxvalue < 0) {
            updatedMaxvalue = 0;
            s = i + 1;
        }
    }
    console.log("Maximum contiguous sum is " + updatedMaxvalue);
}
var a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var n = a.length;
maxSubArraySum(a, n);
