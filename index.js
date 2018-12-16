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
  fillColor: 'lightblue'
});

var maskCircle = new CompoundPath({
  children: [
    new Path.Arc({
      from: [250, 30],
      through: [251, 30],
      to: [425, 375],
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

var mask = new Group(redCheese, maskCircle);
mask.clipped = true;

var testSquare = new Path.Rectangle({
  size: [100, 100],
  position: view.center,
  fillColor: 'red',
});

setTimeout(function () {
  testSquare.tween(
    { rotation: 0 },
    { rotation: 45 },
    {
      duration: 1000
    }
  );
}, 2000);