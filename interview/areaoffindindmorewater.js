function maxim(height) {
  var left = 0;
  var right = height.length - 1;
  var maxarea = 0;
  while (left < right) {
    var currheight = Math.min(height[left], height[right]);
    // console.log(currheight);            `
    var currentwidth = right - left;
    var currentarea = currentwidth * currheight;
    maxarea = Math.max(maxarea, currentarea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxarea;
}
var height = [1, 8, 6, 2, 5, 4, 8, 3, 7, 9, 1];
console.log(maxim(height));
