const getarr = (n = 3) => Array.from({ length: n }, () => Math.floor(Math.random() * 10));

const conditionCheck = (arr) => arr.length > 0 && arr.every((val) => val === arr[0]);

export { getarr, conditionCheck };
