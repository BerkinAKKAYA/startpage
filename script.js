const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const hourElement = document.querySelector('#time #hour');
const minuteElement = document.querySelector('#time #minute');
const dateElement = document.querySelector('#date');

// Make the number 2 digit. | 1 to 01, 5 to 05, 15 to 15
const TwoDigit = (num) => (num <= 9 ? `0${num}` : num);

function Update() {
    const date = new Date();

    const month = months[date.getMonth()];
    const day = days[date.getDay()];

    hourElement.textContent = TwoDigit(date.getHours());
    minuteElement.textContent = TwoDigit(date.getMinutes());
    dateElement.innerHTML = `${date.getDate()} ${month}, ${day}`;
}

// Update every 30 seconds
setInterval(Update, 30000);

// Initialize
Update();
