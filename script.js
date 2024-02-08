function email(){
    document.getElementById("email").addEventListener("click", function() {
        // Endereço de email para o destinatário
        var destinatario = "lcdeassis@hotmail.com";

        // Assunto do email
        var assunto = "";

        // Corpo do email
        var corpoEmail = "";

        // Monta o link de email com os dados
        var linkEmail = "mailto:" + destinatario +
                        "?subject=" + encodeURIComponent(assunto) +
                        "&body=" + encodeURIComponent(corpoEmail);

        // Abre o cliente de email padrão com os dados preenchidos
        window.location.href = linkEmail;
    });
}
function copia(){
    document.getElementById('copyButton').addEventListener('click', function() {
        var copyText = "10756300967";
        
        // Seleciona o texto dentro do textarea
        copyText.select();
        
        // Copia o texto para a área de transferência
        document.execCommand('copy');
        
        // Deseleciona o texto
        copyText.setSelectionRange(0, 0);
    
        console.log('Texto copiado com sucesso!');
    });
    
}
email();
copia();