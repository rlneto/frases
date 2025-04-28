let dica = "A dica irá aparecer aqui.";

async function buscarDica() {
	try {
		const response = await fetch("https://api-frases-dev.vercel.app/dica");

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
