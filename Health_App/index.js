// let counter = document.querySelectorAll('.counter');

// let count = 1;

// setInterval(() => {
//     if (count < 75) {
//         count++;
//         counter.innerText = count;
//     }
// }, 0.1);

let counters = document.querySelectorAll('.counter');
let time = 200;

counters.forEach(counter => {
    let updateCounter = () => {
        let target = +counter.getAttribute('data-target');
        let count = +counter.innerText;

        let increment = target / time;


        if (count < target) {
            counter.innerText =  Math.ceil(count + increment);
            setTimeout(updateCounter , 10);
        } else{
            counter.innerText = target;
        }
    }
    updateCounter();
});

let healthCondition = document.querySelector('.health');
setTimeout(() => {
    healthCondition.innerText = 'You Are FIT'
   
}, 2000);