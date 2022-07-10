"use strict";
(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function patio() {
        function ler() { }
        function adicionar(veiculo) {
            var _a;
            const row = document.createElement("tr");
            row.innerHTML = `
                <th>${veiculo.nome}</th>
                <th>${veiculo.placa}</th>
                <th>${veiculo.entrada}</th>
                <th>
                    <button type="button" class="delete" data-placa="${veiculo.placa}" >x</button>
                </th>
            `;
            (_a = $("#patio")) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        }
        function salvar() { }
        function remover() { }
        function renderizar() { }
        return { ler, adicionar, salvar, remover, renderizar };
    }
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        console.log(nome, placa);
        if (!nome || !placa) {
            alert("Os campos nome e placa do veículo são obrigatórios");
            return;
        }
        patio().adicionar({ nome, placa, entrada: new Date });
    });
})();
