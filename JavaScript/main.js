 

function ageInDays() {
    var birthYear = prompt('what is your birth year....?');
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAwnser = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAwnser);
    document.getElementById('flex-result').appendChild(h1);

}

function reset() {
    document.getElementById('ageInDays').remove();
}