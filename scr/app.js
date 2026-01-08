const container = document.getElementById("accordionTipo");

const dadosAgrupados = [];

// Transforma a lista plana (dados) em uma estrutura hierárquica para os acordeões
dados.forEach(item => {
    // 1. Nível: Tipo
    let tipoObj = dadosAgrupados.find(t => t.tipo === item.TIPO);
    if (!tipoObj) {
        tipoObj = {
            tipo: item.TIPO,
            descricao: item["DESCRIÇÃO"],
            grupos: []
        };
        dadosAgrupados.push(tipoObj);
    }

    // 2. Nível: Grupo
    let grupoObj = tipoObj.grupos.find(g => g.grupo === item.GRUPO);
    if (!grupoObj) {
        grupoObj = {
            grupo: item.GRUPO,
            descricao: item["DESCRIÇÃO2"],
            itens: []
        };
        tipoObj.grupos.push(grupoObj);
    }

    // 3. Nível: Item (Subgrupo)
    grupoObj.itens.push({
        sub: item.SUBGRUPO,
        descricao: item["DESCRIÇÃO3"],
        hds: item["CÓDIGO HDS"]
    });
});

dadosAgrupados.forEach((tipo, t) => {

    const tipoId = `tipo-${t}`;

    container.insertAdjacentHTML("beforeend", `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed bg-secondary text-light"
                        data-bs-toggle="collapse"
                        data-bs-target="#${tipoId}">
                    ${tipo.tipo} - ${tipo.descricao}
                </button>
            </h2>

            <div id="${tipoId}" class="accordion-collapse collapse">
                <div class="accordion-body bg-dark">
                    <div class="accordion" id="accordion-${tipoId}">
                        ${tipo.grupos.map((grupo, g) => `
                            <div class="accordion-item border-secondary">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed bg-dark text-light"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#grupo-${t}-${g}">
                                        ${grupo.grupo} - ${grupo.descricao}
                                    </button>
                                </h2>

                                <div id="grupo-${t}-${g}" class="accordion-collapse collapse">
                                    <div class="accordion-body p-0">
                                        <ul class="list-group list-group-flush">
                                            ${grupo.itens.map(item => `
                                                <li class="list-group-item bg-dark text-light">
                                                    <div class="row item-filho">
    <div class="col-12 col-md-2 fw-bold codigo">
        ${formatarCodigo(tipo.tipo, grupo.grupo, item.sub)}
    </div>

    <div class="col-12 col-md-8 descricao">
        ${item.descricao}
    </div>

</div>
                                                </li>
                                            `).join("")}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        </div>
    `);
});

function formatarCodigo(tipo, grupo, sub) {
    return `${tipo}.${grupo}.${sub}`;
}

