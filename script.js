// Setting default color and size
let mode = 'color';
let grid = 16;

const panel = document.querySelector('#container');
const panelSize = document.querySelector('#panelsize');
panelSize.textContent = `Size = ${grid}x${grid}`;
let gridSize = 640 / grid;
let mousedown = false;

let bigBlock;
let miniBlock;
let randomColor;

// drawing default 16x16 grid
drawBox(grid)

// button to set custom grid size
const size = document.querySelector('.size')
size.addEventListener('click', () => {
    chooseSize();
    const reset = document.querySelectorAll('.bigblock');
    reset.forEach(box => {
        box.remove();
    });
    panelSize.textContent = `Size = ${grid}x${grid}`;
    gridSize = 640 / grid;
    drawBox(grid);
    sketch();
    console.log(mode);
});

sketch();

function drawBox(num) {
    for (let i = 0; i < num; i++) {
        bigBlock = document.createElement('div');
        bigBlock.classList.add('bigblock');
        panel.appendChild(bigBlock);
        for (let i = 0; i < num; i++) {
            miniBlock = document.createElement('div');
            miniBlock.style.height = `${gridSize}px`;
            miniBlock.style.width = `${gridSize}px`;
            miniBlock.classList.add('block');
            bigBlock.appendChild(miniBlock);
        }
    }
}

function sketch() {

    const block = document.querySelectorAll('.block');
    console.log(block.length);

    // set condition for mouse down and mouse up
    document.addEventListener('mousedown', () => {
        mousedown = true;
        console.log(mousedown);
    });
    document.addEventListener('mouseup', () => {
        mousedown = false;
        console.log(mousedown);
    });

    // set event listener for when holding mouse 
    for (let x = 0; x < block.length; x++) {
        block[x].addEventListener('mousedown', etch)
        block[x].addEventListener('mouseover', etch)
    }

    // Setting for every drawing mode
    const draw = document.querySelector('.draw')
    draw.addEventListener('click', () => {
        mode = 'color';
    })

    const rainbow = document.querySelector('.rainbow')
    rainbow.addEventListener('click', () => {
        mode = 'rainbow';
    })

    const erase = document.querySelector('.erase')
    erase.addEventListener('click', () => {
        mode = 'erase';
    })

    // setting for clearing all grid
    const blank = document.querySelector('.clear')
    blank.addEventListener('click', () => {
        for (let c = 0; c < block.length; c++) {
            block[c].style.backgroundColor = 'white';
        }
    })
}

function etch(e) {
    if (e.type === 'mouseover' && !mousedown) return
    if (mode === 'color') {
        e.target.style.backgroundColor = 'black';
    }
    else if (mode === 'erase') {
        e.target.style.backgroundColor = 'white';
    }
    else if (mode === 'rainbow') {
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = `#${randomColor}`;
    }
    console.log(randomColor);
}

function chooseSize() {
    let gSize = prompt('Type Grid Size min = 1 max = 100')
    gSize = Number(gSize)
    if (gSize < 1 || gSize > 100 || gSize == NaN) {
        chooseSize();
    }
    else {
        grid = gSize;
        return grid;
    }
}