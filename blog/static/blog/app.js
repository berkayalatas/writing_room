/* Calendar  */
const lang = navigator.language;

let date = new Date();

let dayNumber = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(lang, {
    weekday: 'long'
})
let monthName = date.toLocaleString(lang, {
    month: 'long'
})
let year = date.getFullYear()

$('#monthName').html(monthName)

$('#dayName').html(dayName) 

$('#dayNumber').html(dayNumber)  

$('#year').html(year) 


/* like button*/


$(document).ready(function(){

    $('.heart').click(function () {
    $(this).toggleClass('clicked');
    $(this).parent().find('.bubble').toggleClass('bubbleclick');
    });  
})