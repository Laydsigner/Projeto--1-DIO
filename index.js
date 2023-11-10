let nomeDoHeroi = "jão";
let nivelXp = 12;
let nivel = "";

if (nivelXp <= 1000) {
  nivel = "ferro";
} else if (nivelXp >= 1001 && nivelXp <= 2000) {
  nivel = "bronze";
} else if (nivelXp >= 2001 && nivelXp <= 5000) {
  nivel = "prata";
} else if (nivelXp >= 5001 && nivelXp <= 7000) {
  nivel = "ouro";
} else if (nivelXp >= 7001 && nivelXp <= 8000) {
  nivel = " platina";
} else if (nivelXp >= 8001 && nivelXp <= 9000) {
  nivel = "ascendente";
} else if (nivelXp >= 9001 && nivelXp <= 10000) {
  nivel = " imortal";
} else if (nivelXp >= 10001) {
  nivel = "Radiante";
}
console.log("Herói de nome " + nomeDoHeroi + " está no nível de " + nivel);
