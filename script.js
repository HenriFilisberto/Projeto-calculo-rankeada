let saldoPartidas = calculator(51 , 0);
let rank = "";

function calculator(win, defeat){
    let result = win - defeat;
    return result;
}

if (saldoPartidas <= 10){
    rank = "Ferro";
}else if(saldoPartidas > 10 && saldoPartidas <= 20){
    rank = "Bronze";
}else if(saldoPartidas > 20 && saldoPartidas <= 50){
    rank = "Prata";
}else if(saldoPartidas > 50 && saldoPartidas <= 80){
    rank = "Ouro";
}else if(saldoPartidas > 80 && saldoPartidas <= 90){
    rank = "Diamante";
}else if(saldoPartidas > 90 && saldoPartidas <= 100){
    rank = "Lendário";
}else if(saldoPartidas >= 101){
    rank = "Imortal";
}

console.log(`O Herói tem saldo de ${saldoPartidas} e está no nível de ${rank}`)