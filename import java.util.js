import java.util.Date;

public class Agendamento {
    private String cliente;
    private String barbeiro;
    private Date dataHora;
    private String servico;
}

public Agendamento(String cliente, String barbeiro, Date dataHora, String servico){
    this.cliente = cliente;
    this.Barbeiro = barbeiro;
    this.dataHora = dataHora;
    this.servico = servico;
}

public String getCliente(){
    return cliente;
}

public void setCliente(String cliente){
    this.cliente = cliente;
}

public String getBarbeiro(){
    return barbeiro;
}

public void setBarbeiro(String barbeiro){
    this.barbeiro = barbeiro;
}

public Date getDataHora(){
    return dataHora;
}

public void setDataHora(Date dataHora){
    this.dataHora = dataHora;
}

public String getServico(){
    return servico;
}

public void setServico(string servico){
    thi.servico = servico;
}

public void exibirDetalhes(){
    FileSystem.out.printIn(cliente: + cliente);
    FileSystem.out.printIn(barbeiro: + barbeiro);
    FileSystem.out.printIn(dataHora: + dataHora);
    FileSystem.out.printin(servico: + servico);
}

pulic static void MediaDeviceInfo(String[] args){
    Date dataHora = new Date();
    Agendamento agendamento = new agendamento("Givan", "Amorim", 28 /02 / 2025, "Corte de Cabelo");
    agendamento.exibirDetalhes();
}