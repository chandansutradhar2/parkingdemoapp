function fun1() {
  console.log("function 1 is to be invoked");
  console.log("function 1 invoked");
}

function fun2() {
  setTimeout(() => {
    console.log("function 2 invoked");
  }, 1000);
}

function Fun3() {
  console.log("function 3");
}
