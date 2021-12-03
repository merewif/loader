function hide() {    
    document.getElementById('loaderbox').style.display = 'none';  
    document.getElementById('loader').style.display = 'none';
    document.getElementById('logohover').style.visibility = 'visible'; 
    document.getElementById('content').style.visibility = 'visible'; 
}

window.addEventListener ("load", function() {
    setTimeout(hide, 3000);
})