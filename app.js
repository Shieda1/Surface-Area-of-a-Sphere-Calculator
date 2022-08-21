// https://calculator.swiftutors.com/surface-area-of-a-sphere-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const surfaceAreaofaSphereRadio = document.getElementById('surfaceAreaofaSphereRadio');
const radiusRadio = document.getElementById('radiusRadio');

let surfaceAreaofaSphere;
const PI = Math.PI;
let radius = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

surfaceAreaofaSphereRadio.addEventListener('click', function() {
  variable1.textContent = '(r) Radius';
  radius = v1;
  result.textContent = '';
});

radiusRadio.addEventListener('click', function() {
  variable1.textContent = 'Surface Area of a Sphere';
  surfaceAreaofaSphere = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(surfaceAreaofaSphereRadio.checked)
    result.textContent = `Surface Area of a Sphere = ${computeSurfaceAreaofaSphere().toFixed(5)}`;

  else if(radiusRadio.checked)
    result.textContent = `Radius = ${computeRadius().toFixed(5)}`;
})

// calculation

function computeSurfaceAreaofaSphere() {
  return 4 * PI * Math.pow(Number(radius.value), 2);
}

function computeRadius() {
  return Math.sqrt(Number(surfaceAreaofaSphere.value) / (4 * PI));
}