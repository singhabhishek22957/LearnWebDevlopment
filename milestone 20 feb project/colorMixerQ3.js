function colorMixer(color1, color2) {
  let newColor;
  switch (color1) {
    case "red":
      switch (color2) {
        case "blue":
          console.log("purple");
          break;
        case "yellow":
          console.log("orange");
          break;
        default:
          console.log("Invalid color combinations");
          break;
      }
      break;
    case "blue":
      switch (color2) {
        case "yellow":
          console.log("green");
          break;
        default:
          console.log("Invalid color combinations");
          break;
      }
      break;

    default:
      console.log("Invalid color combinations");
      break;
  }
}
colorMixer("red", "blue");
