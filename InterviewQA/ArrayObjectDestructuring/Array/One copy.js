 const Alphabets = ['a','b','c','d','e','f','g','h'];
 const Numbers = [1,2,3,4,5,6,7,8,9];

//  const a = Alphabets[0];
//  const b = Alphabets[1];
//  const c = Alphabets[2];
//  const d = Alphabets[3];

//  console.log(a);
//  console.log(b);
//  console.log(c);
//  console.log(d);

// const [a,b,c,d] = Alphabets;

//  console.log(a);
//  console.log(b);
//  console.log(c);
//  console.log(d);

//const [a,,c,d,...rest] = Alphabets;
const [a,,c,d,...remain] = Alphabets;

 console.log(a);
 console.log(c);
 console.log(d);
//  console.log(rest);
 console.log(remain);