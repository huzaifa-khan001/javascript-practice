const easyColors = [
  "#00F0FF", "#00FF00", "#FF00FF", "#4B0082", "#0000FF", 
  "#7FFF00", "#008080", "#EE82EE", "#1E90FF", "#00FA9A",
  "#8B008B", "#40E0D0", "#4169E1", "#50C878", "#FF69B4",
  "#15317E", "#0047AB", "#007BA7", "#2554C7", "#DA70D6",
  "#BF00FF", "#7FFFD4", "#2B65EC", "#191970", "#00CF35",
  "#00BFFF", "#00FF7F", "#16E2F5", "#50C878", "#007FFF"
];

const mediumColors = [
  "#1E90FF", "#1C86EE", "#1874CD", // Blues
  "#32CD32", "#2EBC2E", "#2AA72A", // Greens
  "#FF4500", "#E63E00", "#CC3700", // Reds
  "#9370DB", "#8565C5", "#775AAF", // Purples
  "#FFD700", "#E6C200", "#CCAC00", // Golds
  "#FF1493", "#E61284", "#CC1076", // Pinks
  "#00CED1", "#00B9BC", "#00A4A6", // Teals
  "#7FFF00", "#72E600", "#66CC00", // Limes
  "#8B4513", "#7D3E11", "#6F370F", // Browns
  "#4682B4", "#3F75A2", "#386890"  // Slate Blues
];

const hardColors = [
  "#0000FF", "#0000FD", "#0101FF", // Pure Blue
  "#00FF00", "#00FD00", "#01FF01", // Pure Green
  "#FF0000", "#FD0000", "#FF0101", // Pure Red
  "#00FFFF", "#00FDFD", "#01FFFF", // Cyan
  "#FF00FF", "#FD00FD", "#FF01FF", // Magenta
  "#FFFF00", "#FDFD00", "#FFFF01", // Yellow
  "#800080", "#7E007E", "#800180", // Purple
  "#008080", "#007E7E", "#018080", // Teal
  "#808080", "#7E7E7E", "#818181", // Gray
  "#FF69B4", "#FF67B2", "#FD69B4"  // Hot Pink
];

let colors = ["#00F0FF", "#EC00FC", "#00CF35", "#007FFF", "#FF00FF",
  "#00BFFF", "#00FF7F", "#EE82EE", "#1E90FF", "#40E0D0",
  "#4B0082", "#4169E1", "#16E2F5", "#50C878", "#FF69B4",
  "#15317E", "#00FF00", "#0047AB", "#00FA9A", "#800080",
  "#007BA7", "#7FFF00", "#2554C7", "#DA70D6", "#BF00FF",
  "#008080", "#7FFFD4", "#2B65EC", "#191970", "#8B008B"];
let boxesContainer = document.getElementById('box-container');
let headerBox = document.getElementById('header-box');
let scoreDisplay = document.getElementById('score-')

let boxAmount = Number(prompt("How many boxes"));

  for (var i = 0; i <= boxAmount; i++){
      var boxes = document.createElement('div');
      boxes.className = 'game-box';
      var randomColor = Math.floor(Math.random() * colors.length);
      boxesContainer.appendChild(boxes);
      boxes.style.backgroundColor = colors[randomColor];
      headerBox.style.backgroundColor = colors[randomColor];
  }

  boxesContainer.addEventListener("click", colorPicker);

  function colorPicker(boxes){
    if(boxes.target.style.backgroundColor === headerBox.style.backgroundColor){
        console.log("Matched"); 
    }
  }

