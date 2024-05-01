function getCubeData(a, b, c) {
  const baseShape = a * b;
  const cubeVolume = baseShape * c;
  const sideShape = 2 * (a * c + b * c);
  const fullShape = sideShape + 2 * baseShape;

  return {
    baseShape,
    cubeVolume,
    sideShape,
    fullShape,
  };
}

const cubeHeight = 2;
const cubeBaseDimensions = [3, 7];
const cubeDimensions = [...cubeBaseDimensions, cubeHeight];

const { baseShape, ...mushegh } = getCubeData(...cubeDimensions);

console.log(baseShape, mushegh);
