function concatString() {
  return [...arguments].join('');
}

function yourFunctionRunner() {
  let args = [...arguments],
    result = '';

  args.forEach(arg => result += arg());
  return result;
}

function makeAdder(num) {

  return function (val) {
    return val + num;
  }
}

function once(func, count = 0) {
  return function () {
    count += 1;
    if (count < 2) func();
    return count;
  }
}

function createObjectWithClosures() {
  let val = 0;

  return {
    oneIncrementer: () => val += 1,
    tensIncrementer: () => val += 10,
    getValue: () => val,
    setValue: num => val = num,
  }
}

function guestListFns(arr, secret) {
  let guests = [];

  let holder = guest => {
    return function (code) {
      if (code === secret) return guest;
      else return "Secret-Code: Invalid";
    }
  }

  for (let i = 0; i < arr.length; i++) {
    guests.push(holder(arr[i]));
  }

  return guests;
}

function generateGuestList(arr, secret) {
  let officialList = [];

  for (let guest = 0; guest < arr.length; guest++) {
    officialList.push(arr[guest](secret));
  }
  return officialList;
}