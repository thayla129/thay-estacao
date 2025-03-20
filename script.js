'use strict';

async function fetchStations() {
    const container = document.getElementById("stations");
    const searchInput = document.getElementById("searchInput").value;
    
    if (!searchInput) {
        container.innerHTML = "Insira a sigla de algum país";
    } else {
        const url = `https://api.railway-stations.org/${searchInput}/stations`;
        container.innerHTML = "Carregando...";

        try {            
            const response = await fetch(url);   
            const dados = await response.json();
            
            if (dados.length > 0) {
                container.innerHTML = "";
                
                dados.forEach(station => {
                    const div = document.createElement("div");
                    div.className = "station";
                    div.innerHTML = `
                        <a href="station.html?name=${encodeURIComponent(station.title)}&photo=${encodeURIComponent(station.photo || '')}">
                            <strong>${station.title}</strong> - ${station.country}
                        </a>
                    `;
                    container.appendChild(div);
                });
            } else {
                container.innerHTML = "Erro ao carregar as estações. Insira uma sigla válida!";
            }
        } catch (error) {
            console.error(error);
            container.innerHTML = "Ocorreu um erro";
        }
    }
}

document.getElementById("listStationsButton").addEventListener("click", fetchStations);