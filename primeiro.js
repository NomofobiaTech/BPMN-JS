function esperar(tempo, descricao) {
    return new Promise(resolve => {
        console.log(`Iniciando: ${descricao} (${tempo}ms)`);
        setTimeout(() => {
            console.log(`Concluído: ${descricao}`);
            resolve();
        }, tempo);
    });
}

async function pegarIngredientes() {
    console.log("Verificando se os ingredientes estão disponíveis...");
    const ingredientesDisponiveis = true;
    if (!ingredientesDisponiveis) {
        console.log("Ingredientes faltando! Interrompendo o processo.");
        return false;
    }
    console.log("Pegando os ingredientes...");
    await esperar(1000, "Pegando os ingredientes");
    return true;
}

async function prepararLiquidificador() {
    console.log("Verificando se o liquidificador está pronto...");
    const liquidificadorDisponivel = true;
    if (!liquidificadorDisponivel) {
        console.log("Liquidificador não está disponível! Processo interrompido.");
        return false;
    }
    console.log("Preparando o liquidificador...");
    await esperar(500, "Preparando o liquidificador");
    return true;
}

async function adicionarIngredientesNoLiquidificador() {
    console.log("Adicionando ingredientes no liquidificador...");
    await esperar(1000, "Adicionando os ingredientes");
    return true;
}

async function baterTudo() {
    console.log("Verificando se é possível bater os ingredientes...");
    const prontoParaBater = true;
    if (!prontoParaBater) {
        console.log("Os ingredientes não estão prontos para bater! Processo interrompido.");
        return false;
    }
    console.log("Batendo os ingredientes...");
    await esperar(2000, "Batendo tudo no liquidificador");
    return true;
}

async function prepararForma() {
    console.log("Preparando a forma com manteiga e farinha...");
    await esperar(1500, "Preparando a forma");
    return true;
}

async function preaquecerForno() {
    console.log("Verificando se o forno está funcionando...");
    const fornoFuncionando = true;
    if (!fornoFuncionando) {
        console.log("Forno não está funcionando! Processo interrompido.");
        return false;
    }
    console.log("Pré-aquecendo o forno a 180°C...");
    await esperar(3000, "Pré-aquecendo o forno");
    return true;
}

async function assar() {
    console.log("Colocando a massa no forno para assar...");
    const tempoAssar = 40;
    console.log(`Assando por ${tempoAssar} minutos...`);
    await esperar(tempoAssar * 1000, "Assando o bolo");
    return true;
}

async function prepararCobertura() {
    console.log("Preparando a cobertura...");
    const coberturaPronta = true;
    if (!coberturaPronta) {
        console.log("Não foi possível preparar a cobertura. Continuando sem ela.");
        return false;
    }
    console.log("Misturando a cobertura até ficar cremosa...");
    await esperar(2000, "Preparando a cobertura");
    return true;
}

async function espalharCoberturaNoBolo() {
    console.log("Espalhando a cobertura sobre o bolo...");
    await esperar(1500, "Espalhando cobertura");
    return true;
}

async function fazerBolo() {
    console.log("Início do processo de fazer o bolo...\n");
    if (!(await pegarIngredientes())) return;
    if (!(await prepararLiquidificador())) return;
    if (!(await adicionarIngredientesNoLiquidificador())) return;
    if (!(await baterTudo())) return;
    if (!(await prepararForma())) return;
    if (!(await preaquecerForno())) return;
    if (!(await assar())) return;

    console.log("Bolo assado com sucesso!");

    if (await prepararCobertura()) {
        await espalharCoberturaNoBolo();
        console.log("Cobertura finalizada com sucesso!");
    } else {
        console.log("Bolo pronto, mas sem cobertura.");
    }

    console.log("\nProcesso concluído: bolo finalizado!");
}

fazerBolo();
