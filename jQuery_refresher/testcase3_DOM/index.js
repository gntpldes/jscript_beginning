$(document).ready(function(){
    $('p#p1').css({color: "#227093", background: "#218c74"});
    $('p#p2').addClass('myClass');$('p').wrapAll('<h1>'); 
});



$('#myDiv').html('<h3>Trial case 6 of the day</h3>'); 



$('ul').append('<li>I think that I am finally getting my confidence back</li>');
$('ul').prepend('<li>This is like riding a bike</li>'); 



$('p').wrapAll('<h1>');



$('#newItem').keyup(function (e){
    var code = e.which;
    if(code == 13){
        e.preventDefault(); 
        $('ul').append('<li>' +e.target.value + '</li>'); 
    }
})



var newArr = $('ul#list li').toArray(); 
$.each(newArr, function(i, val){
    console.log(val.innerHTML);
});
