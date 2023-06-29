function responsiveMenu() {
    var x = document.getElementById('nav');
    if(x.className === '') {
        x.className ='responsive';
    } else {
        x.className = ''
    };
};

function select(link) {
    var options = document.querySelector('#links a');
    options[0].className = '';
    options[1].className = '';
    options[2].className = '';
    options[3].className = '';
    options[4].className = '';

    var x = document.getElementById('nav');
    x.className = '';
};