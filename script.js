function hide() {    
    document.getElementById('loaderbox').style.display = 'none';  
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.visibility = 'visible'; 
}

window.addEventListener ("load", function() {
    setTimeout(hide, 3000);
})

/*  
    If the loading process is too short, use
    window.addEventListener ("load", function() {
        setTimeout(hide, 3000);
    })  
*/
