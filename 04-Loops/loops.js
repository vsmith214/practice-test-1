let repeat = (str, reps) => {
  let result = '';

  for (let i = 0; i < reps; i++) {
    result += str;
  }
  return result;
}

let sum = arr => arr.reduce((acc, val) => acc + val, 0);

let join = (arr, delim = '') => {
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    (i !== arr.length - 1) ? result += arr[i] + delim :
      result += arr[i];
  }
  return result;
}

let gridGenerator = num => {
  let result = '';

  function createColumn(r) {
    for (let col = 0; col < num; col++) {
      if ((col + r) % 2 === 0) result += '#';
      else result += ' ';
    }
    result += '\n';
  }

  for (let row = 0; row < num; row++) {
    createColumn(row);
  }

  return result;
}

let paramify = obj => {
  let result = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) result.push(key + '=' + obj[key]);
  }
  return result.sort().join('&');
}

let paramifyObjectKeys = obj => {
  let keys = Object.keys(obj).sort(),
    result = [];

  for (let i = 0; i < keys.length; i++) {
    result.push(keys[i] + '=' + obj[keys[i]]);
  }
  return result.join('&');
}

let renameFiles = arr => {
  let result = [],
    tracker = {};

  function rename(file, count = 1) {
    if (!tracker[file + '(' + count + ')']) {
      tracker[file + '(' + count + ')'] = true;
      result.push(file + '(' + count + ')');
    }
    else return rename(file, count += 1);
  }

  for (let i = 0; i < arr.length; i++) {
    if (!tracker[arr[i]]) {
      tracker[arr[i]] = true;
      result.push(arr[i]);
    } else {
      rename(arr[i]);
    }
  }
  return result;
}
