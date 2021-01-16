let block1 = document.querySelector('.block1')
let block2 = document.querySelector('.block2')
let count = 0;

block1.addEventListener('click', function (event) {
    if (event.target == block1) {
        block2.style.backgroundColor == 'blue'
            ? block2.style.backgroundColor = 'red'
            : block2.style.backgroundColor = 'blue';
        count++;
        document.querySelector('p').textContent = count;
        if (count == 5) {
            block1.style.display = 'none'
            block2.style.display = 'none'; 
        }
    }
})