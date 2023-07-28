const form = document.querySelector('form');
// this usecase will give us empty
// const height = parseInt(document.querySelector('#height').value)

// Digital clock
const clock = document.querySelector(".clock");
setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;

        if (results.textContent < 16.6) {
            results.innerHTML = `<span>Under weight ${bmi}</span>`;
        } else if (results.textContent < 18.6) {
            results.innerHTML = `<span>Moderate Thinness ${bmi}</span>`;
        } else if (results.textContent > 18.6 && results.textContent < 25) {
            results.innerHTML = `<span>Normal Range ${bmi}</span>`;
        } else if (results.textContent > 25) {
            results.innerHTML = `<span>Over weight ${bmi}</span>`;
        }
    }
});

