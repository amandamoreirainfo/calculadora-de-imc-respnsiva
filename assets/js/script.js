const form = document.getElementById('form');

form.addEventListener('submit', function(event){

    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value; 

    const bmi = (weight / (height * height)).toFixed(2);

    if(!isNaN(bmi)){
        
    const value = document.getElementById('value');
    let description = '';

    value.classList.add('atttention');

    document.getElementById('infos').classList.remove('hidden');
    
    if(bmi < 18.5){

        description = 'Cuidado! Voce está abaixo do peso!';

    }else if(bmi >= 18.5 && bmi <=25 ){

        description = "Voce está no peso ideal!";
        value.classList.remove('atttention');
        value.classList.add('normal');

        }else if(bmi > 25 && bmi <= 30){

            description = "Cuidado! Voce está com sobrepreso!";

        }else if(bmi > 30 && bmi<= 35){

            description = "Cuidado! Voce está com obesidade severa!";

        }else{

            description = "Cuidado! Voce está com obesidade morbida!";
        }


    value.textContent =  String(bmi).replace('.', ',');
    document.getElementById('description').textContent = description;
    
    }

});

form.addEventListener('keypress', function(event){

    if(event.key === 'Enter'){

        document.getElementById('calculate').click();  

    }

});


