const dias_n = document.getElementById('dias_n');
const horas_n = document.getElementById('horas_n');
const minutos_n = document.getElementById('minutos_n');
const segundos_n = document.getElementById('segundos_n');

const aniversario = "30 Jun 2023";

function contagem() {
    const data_aniversario = new Date(aniversario);
    const data_atual = new Date();
    const total_segundos = (data_aniversario - data_atual) / 1000;

    const dia = Math.floor(total_segundos / 3600 / 24);
    const horas = Math.floor(total_segundos / 3600) % 24;
    const minutos = Math.floor(total_segundos / 60) % 60;
    const segundos = Math.floor(total_segundos) % 60;

    dias_n.innerHTML = dia;
    horas_n.innerHTML = formata_tempo(horas);
    minutos_n.innerHTML = formata_tempo(minutos);
    segundos_n.innerHTML = formata_tempo(segundos);


    console.log(dia, horas, minutos, segundos);
}

function formata_tempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}
contagem();

setInterval(contagem, 1000);