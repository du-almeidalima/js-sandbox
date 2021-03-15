self.addEventListener('message', (message) => {
  console.log('Worker Thread Started');
  if (message.data instanceof Array) {
    const factSum = message.data.reduce((acc, curr) => {
      return acc + factorialize(curr)
    }, 0)

    self.postMessage(factSum)
  }
})

const factorialize = (num) => {
  let total = 1

  for (i = 0; i < num; i++) {
    total = total * (num - i);
  }

  return total
};
