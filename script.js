/*
  💖 ARQUIVO PRINCIPAL PARA EDITAR O SITE DA MANU

  Procure por "EDITE AQUI" e troque os textos.
  Você não precisa mexer no HTML nem no CSS para mudar as declarações.
*/

// ===============================
// EDITE AQUI: senha do app secreto
// ===============================
const senhaSecreta = "2205";

// ===============================
// EDITE AQUI: link da música e vídeo
// Troque pelos links que você quiser
// ===============================
const linkMusica = "https://www.youtube.com/";
const linkVideo = "https://www.youtube.com/";

// ===============================
// EDITE AQUI: textos principais
// ===============================
const dados = {
  amor: {
    titulo: "Amor ❤️",
    conteudo: `
      <div class="card">
        <h3>Minha declaração para você</h3>
        <p>
          Oi amorzinho, sei que não posso te dar atualmente um iphone mesmo, mas fiz esse aqui pra você conseguir acessar de qualquer lugar e ver o quanto eu te amo. 
          Eu amo você, e quero que você saiba que você é a pessoa mais importante da minha vida. Sempre que eu puder te farei feliz e sempre que eu puder irei te dar oq vc deseja.
          Assim que eu arrumar um dinheiro, irei te dar um iphone, e tudo que você quiser. Eu te amo muito, e quero que você saiba que você é a pessoa mais importante da minha vida.
        </p>
        <p>
          Você é meu carinho favorito, minha paz nos dias difíceis e uma das melhores partes
          da minha vida. Eu te amo muito. 💖
        </p>
      </div>
    `
  },

  cartinhas: {
    titulo: "Cartinhas 💌",
    conteudo: `
      <div class="card">
        <h3>Cartinha 1</h3>
        <p>Você é a pessoa mais importante da minha vida sabia?.</p>
      </div>

      <div class="card">
        <h3>Cartinha 2</h3>
        <p>Você é o meu sol nos dias nublados e a minha paz nos momentos difíceis.</p>
      </div>

      <div class="card">
        <h3>Cartinha 3</h3>
        <p>Você é a minha força nos momentos de dificuldade e a minha alegria nos dias felizes.</p>
      </div>
    `
  },

  motivos: {
    titulo: "Motivos 🌹",
    conteudo: `
      <div class="card">
        <h3>Motivos pelos quais eu te amo</h3>
        <ol>
          <li>Pelo seu jeito.</li>
          <li>pelo seu sorriso.</li>
          <li>Pela sua bunda.</li>
          <li>Pelo seu corpo.</li>
          <li>Pelo jeito que você me faz sentir.</li>
          <li>Por tudo que você faz por mim.</li>
        </ol>
      </div>
    `
  },


  musica: {
    titulo: "Nossa Música 🎵",
    conteudo: `
      <div class="card">
        <h3>A música que me lembra você</h3>
        <p>
          Você sabe muito bem o pq...
        </p>
        <button class="action-button"
onclick="window.open('https://www.youtube.com/watch?v=OwQW1DorPck&list=RDOwQW1DorPck&start_radio=1', '_blank')">
  Abrir música
</button>
      </div>
    `
  },

  datas: {
    titulo: "Datas 📅",
    conteudo: `
      <div class="card">
        <h3>Datas importantes</h3>
        <ul>
          <li><strong>22/05:</strong>  Nosso aniversário de namoro.</li>
          <li><strong>22/08:</strong> Primeira vez que fizemos sexo. </li>
          <li><strong>22/05:</strong> O aniversário da pessoa mais importante para mim.</li>
        </ul>
      </div>
    `
  },

  video: {
    titulo: "Nosso Vídeo 🎬",
    conteudo: `
      <div class="card">
        <h3>Um vídeo que representa nós</h3>
        <p>
          Esse video é uma declaração de amor pra você, e representa tudo que eu sinto por você.
        </p>
        <button class="action-button"
onclick="window.open('https://www.youtube.com/watch?v=lIMq5OoZzAk&list=RDlIMq5OoZzAk&start_radio=1', '_blank')">
  Abrir vídeo
</button>
      </div>
    `
  },

  segredo: {
    titulo: "App Secreto 🔒",
    conteudo: `
      <div class="card">
        <h3>Digite a senha</h3>
        <p>Dica: uma data importante para nós. 💕</p>

        <input id="senhaInput" type="password" placeholder="Digite a senha..." />
        <button class="action-button" onclick="verificarSenha()">Desbloquear</button>

        <div id="resultadoSenha" class="secret-result"></div>
      </div>
    `
  }
};

// ===============================
// EDITE AQUI: mensagem secreta
// ===============================
const mensagemSecreta = `
  Surpresa, meu amor. 💖<br><br>
  Você ganhou um cupom de Dia Da princesa para usar comigo quando quiser. <br><br>
  O cupom é válido para um dia inteiro de mimos, onde você pode escolher o que quiser fazer, e eu vou realizar todos os seus desejos. <br><br>
  Pode ser um dia de spa em casa, um passeio no parque, um jantar especial, ou qualquer coisa que você queira. <br><br>
  Eu quero que esse dia seja dedicado a você, para te mostrar o quanto eu te amo e o quanto você é importante para mim. <br><br>
  Use o cupom quando quiser, e vamos aproveitar esse dia especial juntos. Eu te amo muito! 💖
`;

const homeScreen = document.getElementById("homeScreen");
const appScreen = document.getElementById("appScreen");
const appTitle = document.getElementById("appTitle");
const appContent = document.getElementById("appContent");
const backButton = document.getElementById("backButton");

document.querySelectorAll(".app").forEach(botao => {
  botao.addEventListener("click", () => {
    const nomeApp = botao.dataset.app;
    abrirApp(nomeApp);
  });
});

backButton.addEventListener("click", voltarInicio);

function abrirApp(nomeApp) {
  const app = dados[nomeApp];

  appTitle.innerHTML = app.titulo;
  appContent.innerHTML = app.conteudo;

  homeScreen.classList.remove("active");
  appScreen.classList.add("active");
}

function voltarInicio() {
  appScreen.classList.remove("active");
  homeScreen.classList.add("active");
}

function abrirLink(link) {
  window.open(link, "_blank");
}

function verificarSenha() {
  const input = document.getElementById("senhaInput");
  const resultado = document.getElementById("resultadoSenha");

  if (input.value === senhaSecreta) {
    resultado.innerHTML = mensagemSecreta;
  } else {
    resultado.innerHTML = "Senha errada, meu amorzinho 😭 tenta de novo.";
  }
}
