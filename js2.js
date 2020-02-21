let input1=prompt('Who are you?');
let result="";

result=(input1 == "Employee") ?
    'Hello' :
    (input1 == "Director") ?
        'Greeting' :
        (input1 == '') ?
            'No login' : '""';
alert(result);