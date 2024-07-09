const atividades = [
  { nome: "Almoço", data: new Date("2024-07-08 12:00"), finalizada: false },
  { nome: "Academia em grupo", data: new Date("2024-07-08 10:00"), finalizada: true },
  { nome: "Sessão de jogos", data: new Date("2024-07-08 16:00"), finalizada: true },
];

const criarItemDeAtividade = (atividade) => {
  let input = `<input type="checkbox" ${atividade.finalizada ? 'checked' : ''} />`;

  return `<div>
    ${input}
    <span>${atividade.nome}</span>
    <time>${atividade.data}</time>
  </div>`;
};

const section = document.querySelector("section");

for(let atividade of atividades){
  section.innerHTML += criarItemDeAtividade(atividade);
}
