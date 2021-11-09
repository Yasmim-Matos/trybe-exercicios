let estadoCandidato = "reprovada";

switch (estadoCandidato){
    case "aprovada":
        console.log("Parabéns, você foi aprovada no processo seletivo!");
        break;
    
    case "lista":
        console.log("Você está na lista de espera");
        break;
    
    case "reprovada":
        console.log("Você foi reprovada.");
        break;

    default:
        console.log("Não se aplica.");
  
}