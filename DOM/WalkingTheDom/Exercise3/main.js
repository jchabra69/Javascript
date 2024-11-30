// Dictionary of taboo words
const badWords = ["sex", "violence", "drugs", "asshole"]

let searchTabooWord = function(tabooWord) {

    // Poniendo el *, leo todos los elementos en el body, con el hago un array y uso el filter para buscar
    const allElements = Array.from(document.body.getElementsByTagName("*"));

    // If you see that there's a word which appears in badWords, show it
    /*
    const elementsWithBadWord = allElements.filter(element => {

        // Puede que haya alguna en mayus, así que asegurate de convertirla a lower para ver si el array lo tiene
        const elementText = element.textContent.toLowerCase();

        elementText.classList.toggle('highlight')

    });
    */

    // Iterar sobre los elementos y comprobar si contienen la palabra tabú
    allElements.forEach(element => {
        // Ignora los elementos que no contienen texto o son solo elementos vacíos
        if (element.nodeType === Node.ELEMENT_NODE && element.textContent.trim()) {

            // Obtiene el texto del elemento
            const elementText = element.textContent;

            // Si el texto contiene una palabra tabú
            if (elementText.toLowerCase().includes(tabooWord.toLowerCase())) {

                // Usa un div temporal para evitar problemas con innerHTML y asegurar la seguridad
                const newContent = elementText.replace(new RegExp(`(${tabooWord})`, 'gi'), '<span class="highlight">$1</span>');

                // Actualiza el contenido del elemento con el texto resaltado
                element.innerHTML = newContent;
            }
        }
    });
};

let searchTabooWord2 = function(tabooWord) {
    // Get all elements in the body
    const allElements = Array.from(document.body.getElementsByTagName("*"));

    allElements.forEach(element => {
        // Ignore elements that do not contain text
        if (element.nodeType === Node.ELEMENT_NODE && element.textContent.trim()) {

            // Get the text of the element
            const elementText = element.textContent;

            // If the text contains a taboo word
            if (elementText.toLowerCase().includes(tabooWord.toLowerCase())) {

                // Replace the entire content of the element with the phrase "Blocked content" in bold
                element.innerHTML = '<strong>Blocked content</strong>';
            }
        }
    });
};

window.addEventListener("load", function() {

    searchTabooWord("sex");
    searchTabooWord("asshole");
    searchTabooWord2("drugs")
});
