
/*Make a function that goes through a list of links and,
depending on the type of linked file
(its extension), 
adds an image or icon next to the text of the link that represents it.*/

let readLinks = function () {

    //Almacena todos los tags <a del DOM
    const allLinks = document.getElementsByTagName("a");

    //Tengo que leer el src, pq dependiendo de el hago una cosa o otra

    for (let link of allLinks) {

        let extension = link.getAttribute("href");

        //Saca la cadena incluyendo el punto, index of +1 para excluir
        switch (extension.slice(extension.indexOf("."))) {

            case ".pdf":

                //Si es un pdf, enseña un icono de pdf, así que hazle append de una etiqueta img
                const pdfIcon = document.createElement("img");
                pdfIcon.setAttribute("src", "./img/pdf.png");
                //I must put an alt title
                pdfIcon.setAttribute("alt", "pdf");

                pdfIcon.className = "icon";

                link.appendChild(pdfIcon);

                break;

            case ".jpg":

                const imgJPG = document.createElement("img");
                imgJPG.setAttribute("src", "./img/imagen.jpg");
                imgJPG.setAttribute("alt", "imagen");

                imgJPG.className = "icon";
                link.appendChild(imgJPG);

                break;

            case ".xlsx":

                const excelIcon = document.createElement("img");
                excelIcon.setAttribute("src", "./img/excel.png");
                excelIcon.className = "icon";
                excelIcon.setAttribute("alt", "excel");
                link.appendChild(excelIcon);

                break;

            case ".txt":

                const txtIcon = document.createElement("img");
                txtIcon.setAttribute("src", "./img/blocnotas.png");
                txtIcon.setAttribute("alt", "txt");
                txtIcon.className = "icon";
                link.appendChild(txtIcon);

                break;

            case ".pptx":

                const pptxIcon = document.createElement("img");
                pptxIcon.setAttribute("src", "./img/presentacion.png");
                pptxIcon.setAttribute("alt", "pptx");
                pptxIcon.className = "icon";
                link.appendChild(pptxIcon);

                break;

            case ".zip":

                const zipIcon = document.createElement("img");
                zipIcon.setAttribute("src", "./img/zip.png");
                zipIcon.setAttribute("alt", "zip");
                zipIcon.className = "icon";
                link.appendChild(zipIcon);

                break;





        }

    }

}

let createStyle = function () {

    const style = document.createElement("style");

    /*// Crear una nueva hoja de estilo y añadirla al documento
    const sheet = new CSSStyleSheet();
    sheet.insertRule(".mi-clase { color: red; font-size: 20px; }", 0);
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
    */

    style.innerHTML = `
    
    .icon {
        width: 40px; 
        height: 40px;
        vertical-align: middle; 
        margin-right: 5px;
    
    }
    
    `

    //Mete esa hoja de estilos antes del body
    document.head.appendChild(style);

}

window.addEventListener("load", function () {

    readLinks();
    createStyle();

});