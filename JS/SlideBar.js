/*
    Stefan Stankovic 23.02.2022

    Ova skripta se primenjuje na svakoj stranici i sluzi za dodavanje headera i footera
*/
//TODO Uredi js i svanji rezoluciju slika u photoshopu
//TODO Dodati promenu slika


document.getElementsByClassName('element')[1].style.backgroundImage = `url(../Images/Header/2.jpg)`;
document.getElementsByClassName('element')[2].style.backgroundImage = `url(../Images/Header/3.jpg)`;


var img = 1;
var imgmax = 5;

var transition = 1500;
var delay = 3500;

var holder = document.getElementsByClassName('holder')[0]
var elements = document.getElementsByClassName('element')

async function main() {
    for (var i = 0; i < 1000; i++) {
        for (var count = 1; count < elements.length; count++) {
            await sleep(delay - transition + 1);
            holder.style.transition = transition + 'ms';
            holder.style.transform = `translateX(-${count * 100}vw)`
            await sleep(transition);
        }
        holder.style.transition = '0ms';
        holder.style.transform = 'translateX(0vw)'
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

main();
















































//TODO: napravi skriptu za automatsko ubacivanje hedera i futera

