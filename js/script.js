function divisori(){
let divisori=[]

let numero;
numero = document.getElementById("input").value;
let ll=0;

for (let i=0;i<=numero/2;i++){
    if(numero%i==0){
        divisori.push(i);
       
    }
}

 divisori.push(numero);

let stampa = document.getElementById("risultato");
    stampa.innerHTML = divisori;


}