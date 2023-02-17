const elem1 = document.querySelector('.elem1');
const elem2 = document.querySelector('.elem2');
const elem3 = document.querySelector('.elem3');
const elem4 = document.querySelector('.elem4');

const Experience = document.querySelector('.Experience');
const Biography = document.querySelector('.Biography');
const Skills = document.querySelector('.Skills');
const Portfolio = document.querySelector('.Portfolio');

const BlueLineElem1 = () => {
    if (!elem1.classList.contains('rd')) {
        elem1.classList.add('rd')
        elem2.classList.remove('rd')
        elem3.classList.remove('rd')
        elem4.classList.remove('rd')

        Experience.classList.remove('none')
        Skills.classList.add('none')
        Portfolio.classList.add('none')
        Biography.classList.add('none')
    }
}

const BlueLineElem2 = () => {
    if (!elem2.classList.contains('rd')) {
        elem2.classList.add('rd')
        elem1.classList.remove('rd')
        elem3.classList.remove('rd')
        elem4.classList.remove('rd')

        Biography.classList.remove('none')
        Skills.classList.add('none')
        Portfolio.classList.add('none')
        Experience.classList.add('none')
    }
}

const BlueLineElem3 = () => {
    if (!elem3.classList.contains('rd')) {
        elem3.classList.add('rd')
        elem1.classList.remove('rd')
        elem2.classList.remove('rd')
        elem4.classList.remove('rd')

        Skills.classList.remove('none')
        Portfolio.classList.add('none')
        Experience.classList.add('none')
        Biography.classList.add('none')
    }
}

const BlueLineElem4 = () => {
    if (!elem4.classList.contains('rd')) {
        elem4.classList.add('rd')
        elem1.classList.remove('rd')
        elem2.classList.remove('rd')
        elem3.classList.remove('rd')

        Portfolio.classList.remove('none')
        Experience.classList.add('none')
        Biography.classList.add('none')
        Skills.classList.add('none')
    }
}

elem1.addEventListener('click', BlueLineElem1);
elem2.addEventListener('click', BlueLineElem2);
elem3.addEventListener('click', BlueLineElem3);
elem4.addEventListener('click', BlueLineElem4);


