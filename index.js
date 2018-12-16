var circle = new Path.Circle({
  center: [250, 250],
  radius: 200,
  fillColor: 'white'
});

var redCheese = new CompoundPath({
  children: [
    new Path.Arc({
      from: [250, 30],
      through: [251, 30],
      to: [425, 375],
      fillColor: 'red'
    }),
    new Path({
      segments: [
        [250, 250],
        [250, 30],
        [425, 375]
      ],
      closed: true
    })
  ],
  fillColor: 'red'
});

var maskCircle = new Path.Circle({
  center: [250, 250],
  radius: 230,
  fillColor: 'lightblue'
});

var mask = new Group(redCheese, maskCircle);
mask.clipped = true;

/*var maskTriangle = new Path({
  segments: [
    [250, 250],
    [250, 30],
    [425, 375]
  ],
  fillColor: 'blue',
  closed: true
});

var maskArc = new Path.Arc({
  from: [249, 30],
  through: [200, 30],
  to: [424, 375],
  fillColor: 'lightblue'
});*/
//var mask = new Group(maskTriangle, maskArc);

// ['unite', 'intersect', 'subtract', 'exclude', 'divide']

setTimeout(function () {
  redCheese.tweenTo(
    {
      rotation: 180
    },
    {
      easing: 'easeInOutCubic',
      duration: 1000
    }
  );
}, 2000);