function printStars1(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";

    // Add spaces before the stars
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }

    // Add stars for each row
    for (let k = 1; k <= i; k++) {
      pattern += "*";
    }

    // Log the pattern for each row
    console.log(pattern);
  }
}

// Example: Print a pyramid with 3 rows
printStars1(3);

function printStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";

    // Add stars for each row
    for (let k = 1; k <= i; k++) {
      pattern += "*";
    }

    // Log the pattern for each row
    console.log(pattern);
  }
}

// Example: Print stars in a pattern with 4 rows
// printStars(4);
function printInvertedPyramid(rows) {
  for (let i = rows; i >= 1; i--) {
    let pattern = "";

    // Add spaces before the stars
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }

    // Add stars for each row
    for (let k = 1; k <= i; k++) {
      pattern += "*";
    }

    // Log the pattern for each row
    console.log(pattern);
  }
}

// Example: Print an inverted pyramid with 4 rows
// printInvertedPyramid(4);

function pyramid(row) {
  let pymid = "";
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= row - i; j++) {
      pymid += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      pymid += "*";
    }
    pymid += "\n";
  }
  return pymid;
}
console.log(pyramid(5));
