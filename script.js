function mostrarInfo(sistema){
    let texto = "";

    if(sistema === "ios"){
        texto = "iOS: Sistema da Apple usado em iPhones. Famoso pela segurança e fluidez.";
    }

    if(sistema === "android"){
        texto = "Android: Criado pelo Google. Muito popular por sua personalização.";
    }

    if(sistema === "linux"){
        texto = "Linux: Open-source, muito usado em servidores, programação e cibersegurança.";
    }

    if(sistema === "windows"){
        texto = "Windows: Sistema da Microsoft, dominante em computadores pessoais.";
    }

    document.getElementById("infoBox").innerText = texto;
}
