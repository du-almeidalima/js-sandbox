"use strict"

document.querySelector('#main').addEventListener('click', () => runScript(false))
document.querySelector('#main-worker').addEventListener('click', () => runScript(true))

function runScript(isParallel) {

  const start = Date.now() 
  const numArr = Array.from({ length: 50 }, () => 90000000)

  if (isParallel) {
    const worker = new Worker('./src/worker.mjs')
    // Splicing array in two parts
    const leftHalfArr = numArr.slice(0, (numArr.length / 2))
    const rightHalfArr = numArr.slice((numArr.length / 2))

    worker.postMessage(leftHalfArr)

    worker.addEventListener('message', (message) => {
      const end = Date.now()
      const timeElapsed = (end - start) / 1000
  
      console.log(`Worker Thread: ${timeElapsed} Seconds`);
    })

    // I needed to use setTimeout otherwise main thread would run first than postMessage in line 17
    setTimeout(() => {
      factSum(rightHalfArr)

      const end = Date.now()
      const timeElapsed = (end - start) / 1000
  
      console.log(`Main Thread: ${timeElapsed} Seconds`);
    }, 100);

  } else {
    factSum(numArr)

    const end = Date.now()
    const timeElapsed = (end - start) / 1000

    console.log(`Main Thread: ${timeElapsed} Seconds`);
  }
}

// Reduce Numbers Array into Factors
const factSum = (arr) => arr.reduce((acc, curr) => {
  return acc + factorialize(curr)
}, 0)

// Factor function
const factorialize = (num) => {
  let total = 1

  for (let i = 0; i < num; i++) {
    total = total * (num - i);
  }

  return total
};

