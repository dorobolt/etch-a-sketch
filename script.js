function etch() {
    let block = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
    let blockLength = block.length;
    console.log(blockLength);
    for (let i = 0; i < (blockLength); i++) {
        temp = document.createElement('div');
        panel.appendChild(temp);
        for (let i = 0; i < (blockLength); i++) {
            temp1 = document.createElement('div');
            temp1.classList.add('block');
            temp.appendChild(temp1)
        }
    }
}

const panel = document.querySelector('#container');
let temp;
let temp1;
etch()
