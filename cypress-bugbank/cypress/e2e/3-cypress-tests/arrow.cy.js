it('nada agora', function(){})

// function soma(a, b) {
//     return a + b;
// }

// const soma = function (a, b) {
//     return( a + b )
// }

// const soma = (a, b) =>  {
//     return ( a + b )
// }

// const soma = ( a, b ) => a + b;

// const soma = ( a, b ) => {
//     return a + b
// };

// const soma = (a) => a + a;

// const soma = a => a + a;

const soma = () => 5 + 6;

console.log(soma(1))

it('a function test...', function() {
    console.log('function', this)
})

it('a arrow test...', () => {
    console.log('Arrow', this)
})

