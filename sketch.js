function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(255);
  
  // מרווח בין העיניים
  let eyeSpacing = 80;
  
  // מיקום מרכז העיניים
  let leftEyeX = width / 2 - eyeSpacing / 2;
  let rightEyeX = width / 2 + eyeSpacing / 2;
  let eyeY = height / 2;
  
  // גודל העיניים והאישונים
  let eyeSize = 70;
  let pupilSize = 30;
  
  // ציור העין השמאלית
  drawEye(leftEyeX, eyeY, eyeSize, pupilSize);
  
  // ציור העין הימנית
  drawEye(rightEyeX, eyeY, eyeSize, pupilSize);
}

function drawEye(x, y, eyeSize, pupilSize) {
  // ציור הלובן של העין (מעגל שחור עם פנים לבן)
  fill(255);
  stroke(0);
  strokeWeight(3);
  ellipse(x, y, eyeSize, eyeSize);
  
  // חישוב הכיוון של האישון לפי מיקום העכבר
  let angle = atan2(mouseY - y, mouseX - x);
  
  // מגבילים את תנועת האישון לתוך העין
  let maxDistance = eyeSize / 3;
  let pupilDistance = min(dist(x, y, mouseX, mouseY) / 10, maxDistance);
  
  // מחשבים את מיקום האישון
  let pupilX = x + cos(angle) * pupilDistance;
  let pupilY = y + sin(angle) * pupilDistance;
  
  // ציור האישון (מעגל שחור)
  fill(0);
  noStroke();
  ellipse(pupilX, pupilY, pupilSize, pupilSize);
}