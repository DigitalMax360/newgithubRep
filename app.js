var loginVar = new Object();
var code;

function access(){
    loginVar.accessCode = 'CS1';
    loginVar['pin'] = 1000;

    code = document.getElementById('access').value;

    if(code == ''){
        document.getElementById('print').innerHTML = 'INSERT ACCESS CODE!';
    } else if (code == loginVar.accessCode){
        document.getElementById('hide').style.display = 'none';
        document.getElementById('print').innerHTML = "YOU'RE LOGGED IN!"
        document.getElementById('reset').style.display = 'block';
    }
    else {
        alert('ACCESS ERROR - Contact Administrator!!!')        
        console.log('error!');
        console.log('authentication error');
    }
}

function reset(){
    location.reload();
}