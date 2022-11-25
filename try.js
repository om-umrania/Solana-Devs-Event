a = 10;
b = 15;

if (a > b) {
  console.log("Code is working");
} else {
  try {
    throw new Error("a is lesser than b");
  } catch (err) {
    console.log("a");
  }
}
