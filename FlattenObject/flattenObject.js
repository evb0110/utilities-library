
const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
        f: {
            h: 5,
            j: {
                k: 6,
                l: 7,
            }
        }
    }
}

console.log(canonicalString(obj));

function flattenObject(obj) {
    const res = [];

    go([], obj);
    return res;

    function go(arr, obj) {
        Object.entries(obj).forEach(([key, value]) => {
            const newArr = [...arr, key];
            if (isObject(value)) {
                go(newArr, value);
            } else {
                res.push([...newArr, value]);
            }
        })
    }


}

function canonicalString(obj) {
    const arrOfArrays = flattenObject(obj).map((arr) => arr.join('_')).sort();
    return arrOfArrays.join('--');
}

function isObject(entity) {
    return entity !== null && entity.constructor.name === 'Object';
}
