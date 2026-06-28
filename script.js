function mostrarInfo(sistema){
    let texto = "";

    if(sistema === "ios"){
        texto = `
        <h2>iOS</h2>
        <p><b>Criador:</b> Apple</p>
        <p><b>Lançamento:</b> 2007</p>
        <p><b>Descrição:</b> Sistema operacional mobile da Apple usado em iPhones.</p>
        <p><b>Vantagens:</b> Segurança alta, fluidez, otimização excelente.</p>
        <p><b>Desvantagens:</b> Pouca personalização, aparelhos caros.</p>
        <p><b>Curiosidade:</b> Antes se chamava iPhone OS.</p>
        `;
    }

    if(sistema === "android"){
        texto = `
        <h2>Android</h2>
        <p><b>Criador:</b> Google</p>
        <p><b>Lançamento:</b> 2008</p>
        <p><b>Descrição:</b> Sistema mobile mais usado no mundo.</p>
        <p><b>Vantagens:</b> Personalização e variedade de aparelhos.</p>
        <p><b>Desvantagens:</b> Fragmentação e segurança variável.</p>
        <p><b>Curiosidade:</b> Mais de 70% do mercado mundial.</p>
        `;
    }

    if(sistema === "linux"){
        texto = `
        <h2>Linux</h2>
        <p><b>Criador:</b> Linus Torvalds</p>
        <p><b>Lançamento:</b> 1991</p>
        <p><b>Descrição:</b> Sistema open-source muito usado em servidores.</p>
        <p><b>Vantagens:</b> Gratuito, seguro, leve.</p>
        <p><b>Desvantagens:</b> Curva de aprendizado maior.</p>
        <p><b>Curiosidade:</b> Grande parte da internet roda em Linux.</p>
        `;
    }

    if(sistema === "windows"){
        texto = `
        <h2>Windows</h2>
        <p><b>Criador:</b> Microsoft</p>
        <p><b>Lançamento:</b> 1985</p>
        <p><b>Descrição:</b> Sistema operacional mais popular em PCs.</p>
        <p><b>Vantagens:</b> Compatibilidade com programas e jogos.</p>
        <p><b>Desvantagens:</b> Mais vulnerável a vírus.</p>
        <p><b>Curiosidade:</b> Domina desktops mundialmente.</p>
        `;
    }

    document.getElementById("infoBox").innerHTML = texto;

    document.getElementById("infoBox").scrollIntoView({
        behavior: "smooth"
    });
}
