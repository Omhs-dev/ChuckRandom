const node = document.getElementById('here');
const btn = document.getElementById('btn');

function fetchTest(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then((om) => om.json())
    .then((or) => {
        node.textContent = or.value;
    });
};

fetchTest();

btn.addEventListener('click', fetchTest)
