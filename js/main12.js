
 function esercizio1(){
   var gianluca ={
     'nome':'raul',
     'cognome':'masnada',
     'età':'22',
   }
   for (var olga in gianluca) {
    console.log(olga,gianluca[olga]);
   }
 }

function esercizio2(){
  var gianluca1 =
  [
    {
    'nome':'raul',
    'cognome':'masnada',
  },
    {
      'nome':'franco',
      'cognome':'pippo',
    },
    {
      'nome':'matthew',
      'cognome':'battistini'

    }
  ]

    for (var i = 0; i < gianluca1.length; i++) {
    console.log(gianluca1[i] ['nome'],gianluca1[i] ['cognome']);
    }
  }


function topo1(){
  var nome = prompt('inserire nome!')
  var cognome =prompt('inserire cognome!')
  var gianluca2 =

  [
    {
    'nome':'raul',
    'cognome':'masnada',
  },
    {
      'nome':'franco',
      'cognome':'pippo',
    },
    {
      'nome':'matthew',
      'cognome':'battistini'

    },
    {
      'nome':nome,
      'cognome':cognome

    }

  ]

    for (var i = 0; i < gianluca2.length; i++) {
    console.log(gianluca2[i] ['nome'],gianluca2[i] ['cognome']);
    }


}
 function init(){
 esercizio1();
 esercizio2();
 topo1();
 }

$(document).ready(init);
