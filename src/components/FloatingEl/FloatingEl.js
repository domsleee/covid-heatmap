let textChangeableState = {
  mapMouseDown: false,
  temporarilyOff: false
};

export function setupFloatingEl(map) {
  const myEl = document.createElement('div');
  myEl.classList.add("floatingEl");
  myEl.style.display = "none";
  document.body.appendChild(myEl);

  document.body.addEventListener('mousemove', function(event) {
    const top = event.clientY;
    const left = event.clientX;
    myEl.style.top = (top + 5) + "px";
    myEl.style.left = (left + 5) + "px";
  })

  map.data.addListener('mousemove', function(event) {
    // console.log('mousemove');
    const feature = event.feature;
    myEl.style.display = "block";
    if (isTextChangeable()) myEl.innerHTML = `Postcode: ${feature.getProperty('postCode')}<br />Cases: ${feature.getProperty('cases')}<br />Suburbs: ${feature.getProperty('suburb')}`;
  });
  
  map.data.addListener('mouseout', function() {
    //console.log('mouseout', event);
    if (isTextChangeable()) myEl.innerHTML = ``;
  });

  map.data.addListener('mousedown', () => {
    //console.log("map mouse down...");
    textChangeableState.mapMouseDown = true;
  });

  map.data.addListener('mouseup', () => {
    //console.log("map mouse up...");
    textChangeableState.mapMouseDown = false;
    textChangeableState.temporarilyOff = true;
    setTimeout(() => textChangeableState.temporarilyOff = false, 50);
  });
}

function isTextChangeable() {
  return !textChangeableState.mapMouseDown && !textChangeableState.temporarilyOff;
}
