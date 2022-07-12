interface Veiculo {
    nome: string;
    placa: string;
    entrada: Date | string;
}

(function(){
    const $ = (query: string): HTMLInputElement | null => document.querySelector(query);

    function calcTempo(mil: number){
        const min = Math.floor(mil / 60000);
        const sec = Math.floor((mil % 60000) / 1000);

    return  `${min}m e ${sec}s`;
    }

    function patio(){
        function ler(): Veiculo[]{
            return localStorage.patio ? JSON.parse(localStorage.patio): [];
        }

        function salvar(veiculos: Veiculo[]){
            localStorage.setItem("patio", JSON.stringify(veiculos));
        }

        function adicionar(veiculo: Veiculo, salva?: boolean){
            const row =  document.createElement("tr");

            row.innerHTML = `
                <th>${veiculo.nome}</th>
                <th>${veiculo.placa}</th>
                <th>${veiculo.entrada}</th>
                <th>
                    <button class="delete" data-placa=${veiculo.placa} >x</button>
                </th>
            `;

            row.querySelector(".delete")?.addEventListener("click", function(){
                remover(this.dataset.placa);
            });

            $("#patio")?.appendChild(row);

           if(salva) salvar([...ler(), veiculo])
        }

        function renderizar(){
            $("#patio")!.innerHTML = "";
            const patio = ler();

            if(patio.length){
                patio.forEach((veiculo) => adicionar(veiculo))
            }
        }

        function remover(placa: string){
            const { entrada,nome } = ler().find(veiculo => veiculo.placa === placa);

            const tempo =  calcTempo(new Date().getTime() - new Date (entrada).getTime());

            if(!confirm(` O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`))return;

            salvar(ler().filter((veiculo) => veiculo.placa !== placa))
            renderizar();
        }

        return {ler, adicionar, salvar, remover, renderizar}
    }

    patio().renderizar();

    $("#cadastrar")?.addEventListener("click",() => {
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;
        console.log(nome, placa);
        if(!nome || !placa){
            alert("Os campos nome e placa do veículo são obrigatórios");
            return;
        }
        patio().adicionar({nome, placa, entrada: new Date().toISOString()}, true);
    })
})();