function hide() {    
    document.getElementById('loaderbox').style.display = 'none';  
    document.getElementById('loader').style.display = 'none';
    document.getElementById('logo').style.visibility = 'visible'; 
    document.getElementById('content').style.visibility = 'visible'; 
    document.getElementById('background').style.visibility = 'visible'; 
}

window.addEventListener ("load", function() {
    setTimeout(hide, 3000);
})

$(document).ready(function(){
    $('#upper1').click(function() {
        $('.explanation').not('#explanation1').slideUp('slow');
        $('#explanation1').slideToggle('slow');
    });

    $('#upper2').click(function() {
        $('.explanation').not('#explanation2').slideUp('slow');
        $('#explanation2').slideToggle('slow');
    });

    $('#upper3').click(function() {
        $('.explanation').not('#explanation3').slideUp('slow');
        $('#explanation3').slideToggle('slow');
    });

    $('#upper4').click(function() {
        $('.explanation').not('#explanation4').slideUp('slow');
        $('#explanation4').slideToggle('slow');
    });

    $('#upper5').click(function() {
        $('.explanation').not('#explanation5').slideUp('slow');
        $('#explanation5').slideToggle('slow');
    });

    $('#upper6').click(function() {
        $('.explanation').not('#explanation6').slideUp('slow');
        $('#explanation6').slideToggle('slow');
    });
    
});

