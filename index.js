function calcularPartidas(vitorias, derrotas){
    let somatorio = vitorias - derrotas
    return somatorio;
}

let resultado = calcularPartidas(170, 20)
let nivelDoHeroi;

if (resultado < 10) {
    nivelDoHeroi = "ferro";
} else if (resultado >= 11 && resultado <= 20) {
    nivelDoHeroi = "bronze";
} else if (resultado >= 21 && resultado <= 50) {
    nivelDoHeroi = "prata";
} else if (resultado >= 51 && resultado <= 80) {
    nivelDoHeroi = "ouro";
} else if (resultado >= 81 && resultado <= 90) {
    nivelDoHeroi = "diamante";
} else if (resultado >= 91 && resultado <= 100) {
    nivelDoHeroi = "lendário";
} else if (resultado >= 101) {
    nivelDoHeroi = "imortal";
}

console.log("O Herói tem de saldo de " + resultado + " está no nível de " + nivelDoHeroi)

