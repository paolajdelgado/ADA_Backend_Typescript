import { Geometry } from './geometry';

const circleRadius = 9;
const squareSide = 6;

const circleArea = Geometry.areaOfCircle(circleRadius);
const squareArea = Geometry.areaOfSquare(squareSide);

console.log(`El área del círculo con radio ${circleRadius} es: ${circleArea}`);
console.log(`El área del cuadrado con lado ${squareSide} es: ${squareArea}`);