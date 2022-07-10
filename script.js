"use strict";
(function () {
    var _a;
    const seletor = (query) => document.querySelector(query);
    (_a = seletor("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        const nome = (_a = seletor("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = seletor("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        if (!nome || !placa) {
            alert("Os campos nome e placa do veículo são obrigatórios");
            return;
        }
    });
})();
