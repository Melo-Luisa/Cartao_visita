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
email();