function checarPalindromo() {
    let texto = document.getElementById("inputText").value;
    // O elemento 'resultado' precisa existir no HTML!
    const resultado = document.getElementById("resultado"); 

    if (!texto.trim()) {
        resultado.style.display = "block";
        resultado.textContent = "Digite algo para verificar.";
        resultado.style.color = "red";
        return;
    }

    // 1. Converte para minúsculo e remove caracteres não-alfanuméricos (pontuação, espaços, _).
    const limpo = texto.toLowerCase().replace(/[\W_]/, ""); 
    
    // 2. Cria a string reversa.
    const reverso = limpo.split("").reverse().join("");

    if (limpo === reverso) {
        resultado.style.color = "green";
        resultado.textContent = `"${texto}" é um palíndromo! ✅`;
    } else {
        resultado.style.color = "red";
        resultado.textContent = `"${texto}" NÃO é um palíndromo. ❌`;
    }

    resultado.style.display = "block";
}
