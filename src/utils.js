function sum(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0);
}

export function getImageData(canvas, size = 20, precision = 5) {
  const ctx = canvas.getContext('2d');
  const cX = Math.floor(canvas.width / size);
  const cY = Math.floor(canvas.height / size);
  const data = [];

  for (let i = 0; i < cX; i += 1) {
    for (let j = 0; j < cY; j += 1) {
      const { data: imageData } = ctx.getImageData(
        i * size,
        j * size,
        size,
        size,
      );

      const localData = [];

      for (let k = 0; k < imageData.length; k += 4) {
        localData.push(imageData[k + 3]);
      }

      data.push(sum(localData) / localData.length);
    }
  }

  return data.map(num => +num.toFixed(precision));
}

export function isValidImageData(data) {
  return data.some(chunk => !!chunk);
}

export function isDigit(value) {
  return /^\d$/.test(value);
}

export function formatOutput(digit) {
  return [...Array(10)].map((_, i) => +(i === digit));
}

export function identity(val) {
  return val;
}

export function findMaxIndex(arr) {
  return arr.reduce((prev, curr, i, all) =>
      (curr > all[prev] ? i : prev), 0);
}
