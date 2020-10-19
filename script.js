(function () {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const hour = document.querySelector('#time #hour');
    const minute = document.querySelector('#time #minute');
    const date = document.querySelector('#date');

    const current = new Date();
    const month = months[current.getMonth()];
    const day = days[current.getDay() - 1];

    let min = current.getMinutes();
    min = min <= 9 ? `0${min}` : min;

    hour.textContent = current.getHours();
    minute.textContent = min;
    date.innerHTML = `${current.getDate()} ${month}, ${day}`;
})();
