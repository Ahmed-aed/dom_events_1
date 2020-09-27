const container = document.querySelector(".container");
console.log(container);
const tabCounter = document.createElement('p')
// const tabAll = document.querySelectorAll(".tab");
// const contentAll = document.querySelectorAll(".content");
// console.log(tabAll);
// for (let i = 0 ; i<tabAll.length; i++){
//         tabAll[i].addEventListener('click', function (e){
//             tabAll[i].classList.toggle('active')
//             const nextContent = document.querySelector(`#content-${i+1}`)

//             let start
//              if(i === 0){
//                 start = document.querySelector(`#content-${i+1}`)
//             }

//             const prevContent = document.querySelector(`#content-${i}`)
//             console.log(prevContent)
//             prevContent.classList.toggle('active')
//             nextContent.classList.toggle('active')
//         })
// }
// for (let x of tabAll){
//     x.addEventListener('click',function(e){
//         x.classList.toggle('active')
//     })
// }


const tabAll = document.querySelectorAll(".tab");
const contentAll = document.querySelectorAll(".content");
let counter = 0;

for (let i = 0; i < tabAll.length; i++) {
  tabAll[i].addEventListener("click", function (e) {
    tabAll[i].classList.toggle("active");

    if (i == 1) {
      counter++;
    }

    for (let j = 0; j < contentAll.length; j++) {
      const content = document.querySelector(`#content-${j + 1}`);

      if (i === j) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    }
    console.log(counter);
    tabCounter.textContent = ''
      tabCounter.textContent = counter
      container.appendChild(tabCounter)
    return counter;
  });
}

window.addEventListener("keypress", function (e) {
  let key = Number(e.key);
  for (let j = 0; j < contentAll.length; j++) {
    const content = document.querySelector(`#content-${j + 1}`);

    if (key === j + 1) {
      content.classList.add("active");
    } else if (key > 4 || key === 0) {
      window.removeEventListener("keypress", function () {
        return;
      });
    } else {
      content.classList.remove("active");
    }
  }
});
