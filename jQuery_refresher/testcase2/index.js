/*
window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
*/


$('#btn1').click(function(){
    alert('Button Clicked'); 
});



$('#btn1').click(function(){
    $('#para1').hide(); 
});
$('#btn2').click(function(){
    $('#para1').show(); 
});

/*
$('#btn1').click(function(){
    $('#para1').toggle(); 
});
$('#btn2').click(function(){
    $('#para1').show(); 
});
*/
$(document).on('mousemove', function(e){
    $('coords').html('Coords: Y: '+e. 
        clientY+" X: " +e.clientX);
}); 
/*
$('#btn1').dblclick(function(){
    $('#para1').toggle(); 
}); 

$('#btn1').hover(function(){
    $('#para1').toggle(); 
}); 


*/
