const resultId = document.querySelector('#resultId');
const generateBtns = document.querySelectorAll('.generateBtn');

let result;

generateBtns.forEach(button => button.addEventListener('click', () => {

    resultId.textContent = randomQuote();

}));

function randomQuote() {
    const random = Math.floor(Math.random() * 10) + 1;

    switch(random){
        case 1:
            return " If life were predictable it would cease to be life, and be without flavor. – Elanor Roosevelt ";
            break;
        case 2:
            return " Life is what happens when you're busy making other plans. – John Lennon";
            break;
        case 3:
            return " When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt";
            break;
        case 4:
            return " Always remember that you are absolutely unique. Just like everyone else. – Margaret Mead";
            break;
        case 5:
            return " The way to get started is to quit talking and begin doing. – Walt Disney";
            break;
        case 6:
            return " Life is a conundrum of esoterica. ― Lemony Snicket";
            break;
        case 7:
            return " I deserve an explanation. I deserve an acceptable reason – Piolo Pascual";
            break;
        case 8:
            return " Huwag mo akong mahalin dahil mahal kita. Mahalin mo ako dahil mahal mo ako because that is what I DESERVE! - Kathryn Bernardo";
            break;
        case 9:
            return " Mahal mo ba ako dahil kailangan mo ako, o kailangan mo ako kaya mahal mo ako? - Claudine Barretto";
            break;
        case 10:
            return " Oh yes, kaibigan mo ako. Kaibigan mo lang ako… And I’m so stupid to make the biggest mistake of falling in love with my best friend! – Jolina Magdangal";
            break;
    }
}
