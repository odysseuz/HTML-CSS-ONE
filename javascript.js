var nums =[9,9,8,8,7,5,5,4,3,2,1];
var MAX_NUMBERS=10;
function getValue(){
  document.write(nums);
}
function Average(){
  var total = 0;
  var length = 0;
  for(var i = 0; i < nums.length; i++){
    total += nums[i];
    console.log(nums);

  }
  length = total/nums.length;
  document.write(length);
}
function median(){
  var half = Math.floor(nums.length/2);
  if(nums.length % 2){
    document.write(nums[half]);
  }
  else{
    document write(nums[half-1] + nums[half] / 2.0);
  }
}
function mode(){
  var numMapping = {};
  for(var i = 0; i < nums.length; i++){
    if(numMapping[nums[i]] == undefined){
      numMapping[nums[i]] = 0;
    }
    numMapping[nums[i]] += 1;
  }
  var greatestFreq = 0;
  var mode;
  for(var prop in numMapping){
    if(numMapping[prop] > greatestFreq){
      greatestFreq = numMapping[prop];
      mode = prop;
    }
  }
  document.write(parseInt(mode));
}
