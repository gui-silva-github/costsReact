class Bd{

    // construtor da classe Bd
    constructor(){

        // pegando o id do localStorage
        let id = localStorage.getItem("id")

        // se ele for 'null' criando ele como '0'
        if (id === null){
            localStorage.setItem("id", 0)
        }

    }

    // método de retornar próximo ID
    getProximoId(){

        // pegando o id do localStorage
        let proximoId = localStorage.getItem("id")

        // adicionando '1' ao proximoID
        return parseInt(proximoId) + 1
    }

    // método de gravar dados no localStorage
    gravar(d){

        // pegando o próximo ID para não sobrepor dados
        let id = this.getProximoId()

        // sobrepondo o item "id" que é estático
        localStorage.setItem("id", id)

        // adicionando outro registro (stringify) em que o id é dinâmico
        localStorage.setItem(id, JSON.stringify(d))

    }

    // método de resgatar registros em localStorage
    recuperarTodosRegistros(){
        
        // criando um array para armazém de dados
        let despesas = Array()

        // pegando o 'id' estático
        let id = localStorage.getItem("id")

        // laço for para percorrer por todos registros
        for (let i = 1; i<=id ; i++){
            
            // convertendo JSON para Objeto
            let despesa = JSON.parse(localStorage.getItem(i))

            // parando a função caso o Objeto seja 'null'
            if (despesa === null){
                continue
            }

            // adicionando um id
            despesa.id = i

            // inserindo o objeto no array (sendo um array que irá ter esses objetos)
            despesas.push(despesa)

        }

        // retornando o array de objetos
        return despesas

    }

    // método de filtro das despesas cadastradas
    pesquisar(despesa){
        
        // criando um array suporte
        let despesasFiltradas = Array()

        // armazenando todas as despesas cadastradas
        despesasFiltradas = this.recuperarTodosRegistros()
        
        // filtrando por ano, mes, dia, tipo, descricao e valor, haja vista o parâmetro recebido (despesa) ter esses atributos

        if (despesa.ano !== ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.ano === despesa.ano)
        }

        if (despesa.mes !== ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.mes === despesa.mes)
        }

        if (despesa.dia !== ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.dia === despesa.dia)
        }

        if (despesa.tipo !== ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo === despesa.tipo)
        }

        if (despesa.descricao !== ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao.includes(despesa.descricao))
        }

        if (despesa.valor !== ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.valor === despesa.valor)
        }

        // retornando o array de objetos com filter já passado em todos atributos do parâmetro da função
        return despesasFiltradas

    }

    // método de remover despesa
    remover(id){

        localStorage.removeItem(id)

    }

}

// inicializando o localStorage
let bd = new Bd()

class Despesa{

    // construtor da classe despesa
    constructor(ano, mes, dia, tipo, descricao, valor){
        // encapsulando os dados de parâmetro com o 'this'
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    // método que garante que todos os dados precisam estar preenchidos para serem cadastrados
    validarDados(){
        // laço for que verifica cada atributo da classe
        for(let i in this){
            if(this[i]==null || this[i]==undefined || this[i]==''){
                return false
            }
        }
        return true
    }

}

// função que insere os dados em localStorage
function cadastrarDespesa(){

    // recebendo os elementos html
    let ano = document.getElementById("ano")
    let mes = document.getElementById("mes")
    let dia = document.getElementById("dia")
    let tipo = document.getElementById("tipo")
    let descricao = document.getElementById("descricao")
    let valor = document.getElementById("valor")

    // instanciando a classe Despesa
    let despesa = new Despesa(
        // colocando os '.value' de cada elemento
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )

    // verificando o retorno do método 'validarDados' da classe Despesa
    if(despesa.validarDados()){
        // gravando os dados no localStorage
        bd.gravar(despesa)

        // estruturando o modal de sucesso de registro
        document.getElementById("modal_titulo_div").className = "modal-header text-success"
        document.getElementById("modal_titulo").innerHTML = "Registro inserido com sucesso"
        document.getElementById("modal_conteudo").innerHTML = "Despesa foi cadastrada com sucesso!"
        document.getElementById("modal_btn").className = "btn btn-success"
        document.getElementById("modal_btn").innerHTML = "Voltar"
        // usando Jquery para mostrar o modal
        $('#modalEx').modal('show')

        // limpando os '.value' dos elementos
        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = ''
        descricao.value  = ''
        valor.value = ''
    }else{
        // estruturando o modal de erro de registro
        document.getElementById("modal_titulo_div").className = "modal-header text-danger"
        document.getElementById("modal_titulo").innerHTML = "Erro na inclusão do registro"
        document.getElementById("modal_conteudo").innerHTML = "Erro na gravação, verifique se todos os campos foram preenchidos corretamente!"
        document.getElementById("modal_btn").className = "btn btn-danger"
        document.getElementById("modal_btn").innerHTML = "Voltar e corrigir"
        // usando Jquery para mostrar o modal
        $('#modalEx').modal('show')
    }
       
}

// função que carrega as despesas no 'onload de consulta.html' e quando aciona o filtro de despesas no 'consulta.html'
function carregaListaDespesas(despesas = Array(), filtro = false){

    // verificando os 'defaults' da função
    if (despesas.length === 0 && filtro === false){
        despesas = bd.recuperarTodosRegistros()
    }

    // selecionando o elemento tbody da tabela
    let listaDespesas = document.getElementById("listaDespesas")
    // limpando os dados de tbody
    listaDespesas.innerHTML = ''

    // percorrendo o array despesas
    despesas.forEach((d)=>{
        // criando a linha (tr)
        let linha = listaDespesas.insertRow()

        // criando as colunas (td)

        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`

        // verificando o case de 'tipo'
        switch(d.tipo){
            case '1':
                d.tipo = 'Alimentação'
                break
            case '2':
                d.tipo = 'Educação'
                break
            case '3':
                d.tipo = 'Lazer'
                break
            case '4':
                d.tipo = 'Saúde'
                break
            case '5':
                d.tipo = 'Transporte'
                break
        }

        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor

        // criando o botão de exclusão
        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = `id_despesa_${d.id}`
        // onclick do btn
        btn.onclick = function(){
           
            let id = this.id.replace('id_despesa_', '')

            if(window.confirm(`Tem certeza que deseja excluir o ID ${id} do localStorage?`)){
                // removendo a despesa do banco de dados
                bd.remover(id)
                // recarregando a página
                window.location.reload()
            }

        }

        // inserindo ele na linha
        linha.insertCell(4).append(btn)

    })

}

// função acionada pelo botão de pesquisar em 'consulta.html'
function pesquisarDespesa(){

    // pegando os valores dos elementos de input
    let ano = document.getElementById("ano").value
    let mes = document.getElementById("mes").value
    let dia = document.getElementById("dia").value
    let tipo = document.getElementById("tipo").value
    let descricao = document.getElementById("descricao").value
    let valor = document.getElementById("valor").value

    // instanciando a classe Despesa para consulta
    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

    // atribuindo a consulta de despesa em uma váriavel que recebe retorno de função
    let despesas = bd.pesquisar(despesa)

    // chamando a função que carrega os dados do localStorage com filtro ou não
    carregaListaDespesas(despesas, true)

}

