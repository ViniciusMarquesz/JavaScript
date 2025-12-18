// Seleção dos elementos
const input = document.querySelector("#countryInput");
const btn = document.querySelector("#searchBtn");
const statusMessage = document.querySelector("#statusMessage");
const countryBox = document.querySelector("#countryBox");

const flagEl = document.querySelector("#flag");
const countryNameEl = document.querySelector("#countryName");
const capitalEl = document.querySelector("#capital");
const regionEl = document.querySelector("#region");
const populationEl = document.querySelector("#population");

let isLoading = false;

// ---------------------------
// Função principal de busca
// ---------------------------
async function searchCountry() {
  if (isLoading) return;

  const countryName = input.value.trim();

  // 1) Validação
  if (countryName === "") {
    showStatus("Digite o nome do país!", "error");
    countryBox.classList.add("hidden");
    return;
  }

  // 2) Preparar interface
  showStatus("Carregando...");
  countryBox.classList.add("hidden");
  isLoading = true;

  try {
    // 3) Montar URL e fazer requisição
    const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(
      countryName
    )}`;
    const response = await fetch(url);

    // 4) Verificar resposta da API
    if (!response.ok) {
      if (response.status === 404) {
        showStatus("País não encontrado!", "error");
      } else {
        showStatus("Erro ao buscar país. Tente novamente.", "error");
      }
      return;
    }

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      showStatus("Nenhum país encontrado!", "error");
      return;
    }

    // 5) Pegar o primeiro país (MVP)
    const country = data[0];

    const name = country.name?.common ?? "—";
    const flag = country.flags?.png ?? "";
    const capital = country.capital?.[0] ?? "—";
    const region = country.region ?? "—";
    const population = country.population?.toLocaleString("pt-BR") ?? "—";

    // 6) Atualizar interface
    flagEl.src = flag;
    flagEl.alt = `Bandeira de ${name}`;

    countryNameEl.textContent = name;
    capitalEl.textContent = capital;
    regionEl.textContent = region;
    populationEl.textContent = population;

    // 7) Mostrar resultado
    statusMessage.textContent = "";
    countryBox.classList.remove("hidden");
  } catch (error) {
    showStatus("Sem conexão. Verifique sua internet.", "error");
  } finally {
    isLoading = false;
  }
}

// ---------------------------
// Função para exibir status
// ---------------------------
function showStatus(msg, type = "info") {
  statusMessage.textContent = msg;

  if (type === "error") {
    statusMessage.style.color = "red";
  } else {
    statusMessage.style.color = "#444";
  }
}

// ---------------------------
// Evento do botão
// ---------------------------
btn.addEventListener("click", searchCountry);

// ---------------------------
// Evento de pressionar ENTER
// ---------------------------
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchCountry();
  }
});
