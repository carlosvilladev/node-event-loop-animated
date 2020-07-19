const executionContexts = [];
let numExecutionContexts = 0;

function getExecutionContext(CallStack) {
  numExecutionContexts = CallStack.children.length - 1;
  let y = getSpaceBetweenExecContexts(numExecutionContexts);

  const executionContext = new Path.Rectangle({
    point: [20, y],
    size: [310, 50],
    name: "item",
  });

  console.log(executionContext);
  executionContext.dashArray = [10, 4];
  executionContexts.push({ inserted: false, item: executionContext });
  return executionContext;
}

function getSpaceBetweenExecContexts(numExecutionContexts) {
  return numExecutionContexts === 0
    ? 530
    : 530 - (50 + 30) * numExecutionContexts;
}

export default {
  getExecutionContext,
  executionContexts,
};
