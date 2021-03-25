const closeEnoughToStraight = 10;
function isCloseEnough(start, end) {
  return Math.abs(end - start) < closeEnoughToStraight;
}

export function isStraightUp(start, end) {
  return isCloseEnough(end.x, start.x) && end.y < start.y;
}

export function isStraightDown(start, end) {
  return isCloseEnough(end.x, start.x) && end.y > start.y;
}

export function isStraightRight(start, end) {
  return end.x > start.x && isCloseEnough(end.y, start.y);
}

export function isStraightLeft(start, end) {
  return end.x < start.x && isCloseEnough(end.y, start.y);
}

export function isUpAndToTheRight(start, end) {
  return end.x > start.x && end.y < start.y;
}

export function isUpAndToTheLeft(start, end) {
  return end.x < start.x && end.y < start.y;
}

export function isDownAndToTheLeft(start, end) {
  return end.x < start.x && end.y > start.y;
}

export function isDownAndToTheRight(start, end) {
  return end.x > start.x && end.y > start.y;
}
