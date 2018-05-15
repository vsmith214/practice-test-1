let setPropsOnObj = obj => {
  obj.x = 7;
  obj["y"] = 8;
  obj.onePlus = num => num += 1;
}

let setPropsOnArr = arr => {
  arr.hello = () => "Hello!";
  arr["full"] = "stack";
  arr[0] = 5;
  arr.twoTimes = num => num * 2;
}

let setPropsOnFunc = func => {
  func.year = "20??";
  func.divideByTwo = num => num / 2;

  func.prototype.helloWorld = () => 'Hello World';
}