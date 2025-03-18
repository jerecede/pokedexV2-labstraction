// export function setupCounter(element) {
//   let counter = 0
//   const setCounter = (count) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }


// export function setupCounter(element) {
//   let counter = 0
//   element.addEventListener('click', () => {
//     counter++
//     writeCountInButton(counter, element)
//   })
//   writeCountInButton(counter, element);
// }


// function writeCountInButton(count, element){
//   element.innerHTML = `count is ${count}`
// }


export function setupCounter(element) {
  let counter = 0;
  element.addEventListener('click', () => {
    counter++;
    element.innerHTML = `count is ${counter}`;
  })
  element.innerHTML = `count is ${counter}`;
}



