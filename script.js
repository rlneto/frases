let dica = "A dica irá aparecer aqui.";

const API = ProcessingInstruction.env.API;

async function buscarDica() {
	try {
		const response = await fetch(API);

		if (!response.ok) {
			throw new Error("Erro na requisição");
		}

		dica = await response.text();

		atualizarExibicaoDica();
	} catch (error) {
		dica = "Não foi possível carregar a dica.";
	}
}

function atualizarExibicaoDica() {
	const elementoDica = document.getElementById("quote");
	if (elementoDica) {
		elementoDica.textContent = dica;
	}
}

buscarDica();
