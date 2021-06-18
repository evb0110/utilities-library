/**
 * Given an array with number values, partitions it
 * into 2 parts with approximately equal sums of values
 * https://en.wikipedia.org/wiki/Partition_problem
 */
export function partitionIntoEquals({ arr, value, getValue }: { arr: any[], value?: string, getValue?: any}) {
    function makeValue(elem: any) {
        if (value) {
            return elem[value];
        } else if (getValue) {
            return getValue(elem);
        } else {
            return elem;
        }
    }
    const sortedArr = arr.sort((a, b) => makeValue(a) - makeValue(b));
    const leftBucket = [];
    const rightBucket = [];
    let leftSum = 0;
    let rightSum = 0;
    for (const elem of sortedArr) {
        if (leftSum < rightSum) {
            leftBucket.push(elem);
            leftSum += makeValue(elem);
        } else {
            rightBucket.push(elem);
            rightSum += makeValue(elem);
        }
    }
    return {
        left: leftBucket,
        right: rightBucket,
    };
}

