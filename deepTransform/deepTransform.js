const obj = {
    a: false,
    b: 2,
    c: {
        d: true,
        e: 4,
        f: {
            h: 5,
            j: {
                k: false,
                l: 7,
            }
        }
    }
}

function deepTransform(obj, cb) {
    return go(obj);

    function go(obj) {
        const newObj = {};
        for (const [key, value] of Object.entries(obj)) {
            newObj[key] = (isObject(value) ? go: cb)(value);
        }
        return newObj;
    }

    function isObject(maybeObj) {
        return typeof maybeObj === 'object' && maybeObj !== null;
    }
}

console.log(JSON.stringify(deepTransform(obj, (x) => typeof x === 'boolean' ? Number(x) : x)))
