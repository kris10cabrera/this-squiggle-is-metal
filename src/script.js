let xs = [];
for (var i = 0; i < 500; i++) {
  xs.push(i)
}

function animate() {
  let points = xs.map(x => {
    return[x,x + Math.random() * 20]
  })
  let path = "M" + points.map(p => {
    return p[0] + ',' + p[1]
  }).join(' L')
  document.querySelector('path').setAttribute('d', path);

  requestAnimationFrame(animate)
}

animate()