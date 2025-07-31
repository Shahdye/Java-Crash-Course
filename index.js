for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log("Frontend");
  }
  if (i % 5 === 0) {
    console.log("Simplified");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Frontend Simplified");
  }
}
