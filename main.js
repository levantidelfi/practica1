function ataquePikachu (vidaContrincante){
    let tipoAtaque = prompt("Ingresar ataque de Pikachu, puede ser el 1 o el 2")
    let vidaRestante = vidaContrincante;
        switch (tipoAtaque){
            case "1":
                vidaRestante = vidaContrincante - 20;
                alert("Pikachu ataca a Charmender usando ataque " + tipoAtaque + " y lo deja en " + vidaRestante); 
               
                break;
            
            case "2":
                vidaRestante = vidaContrincante - 25;
                alert("Pikachu ataca a Charmender usando ataque " + tipoAtaque + " y lo deja en " + vidaRestante); 
                break;
            default:
                alert("Ataque invalido, pierde su turno");
    }
    return vidaRestante;
}

function ataqueCharmender (vidaContrincante){
    let tipoAtaque = prompt("Ingresar ataque de Charmender, puede ser el 3 o el 4");
    let vidaRestante = vidaContrincante;
        switch (tipoAtaque){
            case "3":
                vidaRestante = vidaContrincante - 25;
                alert("Charmender ataca a Pikachu usando ataque " + tipoAtaque + " y lo deja en " + vidaRestante);
                break;
            case "4":
                vidaRestante = vidaContrincante - 15;
                alert("Charmender ataca a Pikachu usando ataque" + tipoAtaque + " y lo deja en " + vidaRestante);
                break;
            default:
                alert("Ataque invalido, pierde su turno");
            
        }
    return vidaRestante;
        
    
}
 

let vidaCharmender = 80;
let vidaPikachu = 80;

let round = 1;


while (vidaCharmender > 0 && vidaPikachu > 0){

    console.log("ROUND "+round);

    console.log("Vida inicial Charmender " + vidaCharmender);
    console.log("Vida inicial Pikachu " + vidaPikachu);
    
    

    vidaCharmender = ataquePikachu(vidaCharmender);
    if(vidaCharmender > 0){
     vidaPikachu = ataqueCharmender (vidaPikachu)   
    }
    
    round += 1;
    
}

if(vidaPikachu <= 0 ){
    alert("Ganador Charmender");
    document.write('<p>Ganador Charmender</p>')

}else{
    alert("Ganador Pikachu")
    document.write('<p>Ganador Charmender</p>')
}