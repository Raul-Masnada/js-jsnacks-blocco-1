function esercizio1() {
    var banane = [
        {
            'varieta': ' blue java',
            'peso': 15,
            'lunghezza': 10
        },
        {
            'varieta': 'rosse',
            'peso': 13,
            'lunghezza': 9
        },
        {
            'varieta': 'Gros Michel',
            'peso': 20,
            'lunghezza': 15
        },
        {
            'varieta': 'Grand Nain',
            'peso': 18,
            'lunghezza': 13
        },
        {
          'varieta': 'Lakatan',
          'peso': 19,
          'lunghezza': 21
        },
        {
          'varieta': 'Lady Finger',
          'peso': 24,
          'lunghezza': 20
        },
        {
          'varieta': 'Platano',
          'peso': 22,
          'lunghezza': 18
        },
        {
          'varieta': 'Bananito',
          'peso': 29,
          'lunghezza': 16
        },
        {
        'varieta': 'Cavendish',
        'peso': 30,
        'lunghezza': 17
        },
        {
          'varieta': 'Manzano',
          'peso': 14,
          'lunghezza': 15
        }
    ];
    var sommaPeso = 0;
    for (var i=0;i<banane.length;i++) {
        var banana = banane[i];
        sommaPeso += banana['peso'];
    }
    console.log('somma peso', sommaPeso);
}
function getPesoSum(banane) {
    var sommaPeso = 0;
    for (var i=0;i<banane.length;i++) {
        var banana = banane[i];
        sommaPeso += banana['peso'];
    }
    return sommaPeso;
}

function esercizio2(){
var banane = [
  {
      'varieta': ' blue java',
      'peso': 15,
      'lunghezza': 10
  },
  {
      'varieta': 'rosse',
      'peso': 13,
      'lunghezza': 9
  },
  {
      'varieta': 'Gros Michel',
      'peso': 20,
      'lunghezza': 15
  },
  {
      'varieta': 'Grand Nain',
      'peso': 18,
      'lunghezza': 13
  },
  {
    'varieta': 'Lakatan',
    'peso': 19,
    'lunghezza': 21
  },
  {
    'varieta': 'Lady Finger',
    'peso': 24,
    'lunghezza': 20
  },
  {
    'varieta': 'Platano',
    'peso': 22,
    'lunghezza': 18
  },
  {
    'varieta': 'Bananito',
    'peso': 29,
    'lunghezza': 16
  },
  {
  'varieta': 'Cavendish',
  'peso': 30,
  'lunghezza': 17
  },
  {
    'varieta': 'Manzano',
    'peso': 14,
    'lunghezza': 15
  }
];
 var piccole  = [];
 var grosse = [];
    for (var i=0;i<banane.length;i++) {
        var banana = banane[i];
        var lunghezza = banana['lunghezza'];
        if (lunghezza > 15) {
            grosse.push(banana);
        } else {
            piccole.push(banana);
        }
    }
    var sommapesopiccole = getPesoSum(piccole);
    var sommapesogrosse = getPesoSum(grosse);
    console.log(sommapesopiccole, piccole);
    console.log(sommapesogrosse, grosse);
}


function esercizio3(){
 var banane = "banane";
    var reversebanane = "";
    for (var i=banane.length -1;i>=0;i--) {
        var rev = banane[i];
        reversebanane += rev;
    }
    var reversebanane2 = "";
    for (var i=0;i<banane.length;i++) {
        var rev = banane[i];
        reversebanane2 = rev + reversebanane2;
    }
    console.log(reversebanane2);
}

function esercizio4() {
    var numeri = [1,2,3,4,5,6];
    var caratteri = ['b','a','n','a','n','a'];
    var fusione = [];


    for (let i = 0; i < numeri.length; i++) {
        fusione.push(numeri[i], caratteri[i])
    }
    console.log('fusione ' + fusione);

}

 function init(){
 esercizio1();
 esercizio2();
 esercizio3();
 esercizio4();
 }

$(document).ready(init);
