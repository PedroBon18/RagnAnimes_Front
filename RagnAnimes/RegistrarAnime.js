// ================= Seleção de elementos do DOM =================
const adicionarCategoriaBtn = document.getElementById("adicionar-categoria"); // Botão "Adicionar Categoria"
const novaCategoriaInput = document.getElementById("nova-categoria");         // Campo de input da nova categoria
const categoriaSelect = document.getElementById("categoria");                 // <select> de categorias
const animeForm = document.getElementById("anime-form");                      // Formulário de cadastro
const mensagem = document.getElementById("mensagem");                         // Elemento de feedback ao usuário

// ================= Adicionar nova categoria =================
adicionarCategoriaBtn.addEventListener("click", () => {
  const novaCat = novaCategoriaInput.value.trim(); // Remove espaços extras do começo e fim

  if (!novaCat) { // Se estiver vazio
    alert("Digite o nome da categoria!");
    return;
  }

  // Checa se já existe (faz um loop em todas opções e compara case-insensitive)
  const existe = Array.from(categoriaSelect.options)
    .some(opt => opt.value.toLowerCase() === novaCat.toLowerCase());

  if (existe) {
    alert("Essa categoria já existe!");
    return;
  }

  // Cria nova opção dentro do <select>
  const option = document.createElement("option");
  option.value = novaCat;
  option.textContent = novaCat;
  categoriaSelect.appendChild(option);

  // Seleciona automaticamente a nova categoria criada
  categoriaSelect.value = novaCat;

  // Limpa o input
  novaCategoriaInput.value = "";
});

// ================= Registrar anime =================
animeForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o recarregamento da página

  // Pega valores do formulário
  const nome = document.getElementById("nome").value.trim();
  const imagem = document.getElementById("imagem").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const categoria = categoriaSelect.value;

  // Verificação básica
  if (!nome || !imagem || !descricao || !categoria) {
    alert("Preencha todos os campos!");
    return;
  }

  // Pega animes existentes do localStorage (ou cria um array vazio se for o primeiro)
  const animes = JSON.parse(localStorage.getItem("animes")) || [];

  // Adiciona novo anime no array
  animes.push({ nome, imagem, descricao, categoria });

  // Salva no localStorage (como string JSON)
  localStorage.setItem("animes", JSON.stringify(animes));

  // Feedback de sucesso
  mensagem.textContent = `Anime "${nome}" adicionado com sucesso!`;

  // Reseta formulário
  animeForm.reset();
  categoriaSelect.value = ""; // Volta o select para a opção vazia
});
