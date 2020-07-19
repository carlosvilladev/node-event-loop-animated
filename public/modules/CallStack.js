function getCallStack() {
  const callstack = new Path.Rectangle({
    point: [0, 0],
    size: [350, 600],
    name: "callstack",
  });
  var group = new Group({
    children: [callstack],
    strokeColor: "black",
    applyMatrix: false,
  });
  group.translate([550, 20]);
  return group; 
}

export default {
  getCallStack,
};
