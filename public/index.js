import CallStackModule from "./modules/CallStack.js";
import ExecutionContextModule from "./modules/ExecutionContext.js";

paper.install(window);
var tool1;
let execContexts = 0;

window.onload = function () {
  const canvas = document.getElementById("container");
  paper.setup(canvas);

  tool1 = new Tool();
  const CallStack = CallStackModule.getCallStack();
  const callstackChild = CallStack.firstChild;
  function onKeyDown(event) {
    if (Key.isDown("a")) {
      ExecutionContextModule.getExecutionContext(CallStack);
      ExecutionContextModule.executionContexts.forEach((execContext) => {
        //console.log(callstackChild.isInside(execContext));
        if (!execContext.inserted) {
          console.log(execContext.item);
          callstackChild.intersect(execContext.item).dashArray = [10, 4];
          //callstackChild.intersect(execContext.item.lastChild);
          execContext.inserted = true;
        }
      });
      // CallStack.firstChild.intersect(ec);
    }

    if (Key.isDown("s")) {
      CallStack.removeChildren(1, 1);
    }
    console.log(CallStack.children);
  }

  tool1.onKeyDown = onKeyDown;

  //callStackActions.addToCallStack(callstackGroup, 15);
};
