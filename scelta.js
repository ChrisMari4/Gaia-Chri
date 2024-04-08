let engagement = new Date("Apr 7, 2023")

let counter = setInterval( () => {
    let now = new Date().getTime();
    let interval = now - engagement;

    let days = Math.floor(interval / (1000 * 60 * 60 * 24));
    let hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((interval % (1000 * 60)) / 1000);

    document.querySelector(".counter").innerHTML = "L'amore nel tempo:" + "<br>" +
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

}, 1000);
