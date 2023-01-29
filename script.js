function verificar(){
    var num = document.getElementById('number').value
    var number = Number(num);

    if(number % 2 == 0){
        alert('este numero é par')
    } else{
        alert('este numero é impar')
    }
}