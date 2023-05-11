let nome = "";
let nascimento = "";
let mae = "";
let pai = "";
let viagem = "";
let temporada = "";
let adicional = "";
let telefone = "";
let email = "";
let opcaoSelecionada = "";
let guiaIdosos = "";
let grupos = "";
let individual = "";
let luaMel = "";
let familia = "";
let outro = "";


function confirmar(){
    document.getElementById("result").textContent = "Informações enviadas com sucesso!";
     nome = document.getElementById("nome").value;
     nascimento = document.getElementById("nascimento").value;
     mae = document.getElementById("mae").value;
     pai = document.getElementById("pai").value;
     viagem = document.getElementById("viagem").value;
     
     //temporada
     temporada = document.getElementsByName("group1");
     for (var i = 0; i < temporada.length; i++) 
     {
         if (temporada[i].checked) 
         {
             opcaoSelecionada = temporada[i].value;
             break;
         }
     }

     //adicionais
     guiaIdosos = document.getElementById("idosos").checked;
     grupos = document.getElementById("grupos").checked;
     individual = document.getElementById("individual").checked;
     luaMel = document.getElementById("lua").checked;
     familia = document.getElementById("familia").checked;
     outro = document.getElementById("outro").checked;

     telefone = document.getElementById("telefone").value;
     email = document.getElementById("email").value;

     if (document.getElementById("aviao").style.bottom == "2%")
     {
        document.getElementById("aviao").style.bottom = "50%";
        document.getElementById("aviao").style.left = "40%";
        document.getElementById("aviao").style.transform = "rotate(10deg)";
     }
     else
     {
        document.getElementById("aviao").style.bottom = "2%";
        document.getElementById("aviao").style.left = "1.7%";
        document.getElementById("aviao").style.transform = "rotate(0deg)";
     }
     
     
    
}

function relatorio()
{
    document.getElementById("formulario").style.display = "none";
    document.getElementById("relatorio").style.display = "block";
    document.getElementById("aviao").style.position = "fixed";
    document.getElementById("aviao").style.bottom = "90%";
    document.getElementById("aviao").style.left = "90%";
    document.getElementById("aviao").style.transform = "rotate(20deg)";

    if(guiaIdosos == true)
    adicional += "Guia para Idosos, ";
    if(grupos == true)
    adicional += "Grupos, ";
    if(individual == true)
    adicional += "Individual, ";
    if(luaMel == true)
    adicional += "Lua de Mel, ";
    if(familia == true)
    adicional += "Família, ";
    if(outro == true)
    adicional += "Outro, ";

    let relatorio_total = ("Nome Completo: " + nome + "<br>Data de Nascimento: " + nascimento + "<br>Nome da Mãe: " + mae + "<br>Nome do pai: " + pai + "<br>Tipo de viagem: " + viagem + "<br>Temporada: " + opcaoSelecionada + "<br>Adicionais: " + adicional + "<br>Número de Telefone: " + telefone + "<br>E-mail de contato: " + email);
    document.getElementById("relatorio_total").innerHTML = relatorio_total;
}

function cadastro()
{
    document.getElementById("formulario").style.display = "block";
    document.getElementById("relatorio").style.display = "none";
    document.getElementById("result").textContent = "";
    adicional = "";
}