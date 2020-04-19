{
    let x = 'green';
    console.log('1: ', x);

    (function(){
        console.log('2: ', x); //undefined

        var x = 'blue';

        console.log('3: ', x)
    })()
}