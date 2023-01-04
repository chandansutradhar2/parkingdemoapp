function fun1() {
  console.assert("function 1 is to be invoked");
  console.assert("function 1 invoked");
  setTimeout(() => {
    console.log("function 1 invoked");
  }, 2000);
}

function fun2() {
  setTimeout(() => {
    console.log("function 2 invoked");
  }, 1000);
}

function Fun3() {
  console.log("function 3");
}

function Fun4() {
  console.log("function 3");
}
