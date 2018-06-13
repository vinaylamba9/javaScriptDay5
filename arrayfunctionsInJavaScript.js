function pop(x){
  var n = x.length;
  var b = [n-1];
  for(var i in x){
    if(i<a)
      b[i]=x[i];
  }
  return b;
}
var arr = [1,2,3,4,5];
console.log(pop(arr));



function push(x,a){
  var b = x.length;
  var c = [b+1];
  for(var i=0;i<b;i++){
    c[i] = x[i];
  }
  c[b] = a;
  return c;
}
var arr = [1,2,3,4,5];
console.log(push(arr,10));




function reverse(x){
  var l = x.length;
  for (var i=0;i<Math.floor(l/2);i++) {
    var z = x[i];
    x[i] = x[l-i-1];
    x[l-i-1] = z;
  }
  return x;
}
var c = [1,2,3,4,5];
console.log(reverse(c));



function sort(x){
  var f = false;
  while (!f){
    f=true;
    for(var i=1;i<x.length;i++){
      if (x[i-1]>x[i]){
        f = false;
        var tmp = x[i-1];
        x[i-1] = x[i];
        x[i] = tmp;
      }
    }
  }
  return x;  
}
var arr = [4,2,3,1,5];
console.log(sort(arr));




function indexof(x,v){
  var f;
  for(var i=0;i<x.length;i++){
    if(v==x[i])
      f=i;
  }
  return f;
}
var arr = ['a','b','c','d','e'];
console.log(custIndex(arr,'c'));