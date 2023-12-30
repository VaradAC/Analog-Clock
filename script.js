
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

const varSecond = '--secondHandRotation';
const varMinute = '--minuteHandRotation';
const varHour = '--hourHandRotation';

const runClock = () => {

    const currentDate = new Date();
    const secondHandAngle = 6*currentDate.getSeconds();
    const minuteHandAngle = (360 * currentDate.getMinutes())/60 + (0.1 * currentDate.getMinutes());
    const hourHandAngle = (30*currentDate.getHours()) + 0.5*currentDate.getMinutes() + ((1/120) * currentDate.getHours());
    setRotation(secondHand, secondHandAngle, varSecond);
    setRotation(minuteHand, minuteHandAngle, varMinute);
    setRotation(hourHand, hourHandAngle, varHour);
}

function setRotation(element, angle, variable) {
    element.style.setProperty(variable, angle);
}
setInterval(runClock, 1000);

runClock()