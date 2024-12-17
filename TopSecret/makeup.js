{
    "products" [
      {
        "id": 1035,
        "brand": "rejuva minerals",
        "name": "Multi Purpose Powder - Blush & Eye",
        "price": "0.0",
        "price_sign": "$",
        "currency": "USD",
        "image_link": "https://www.purpicks.com/wp-content/uploads/2018/06/Rejuva-Minerals-Multi-Purpose-Powder-Blush-_-Eye-1.jpg",
        "product_link": "https://www.purpicks.com/product/rejuva-minerals-multi-purpose-powder-blush-eye/",
        "website_link": "https://purpicks.com/",
        "description": "Our Multi Purpose Pressed Powders may be used for blush or eye shadow. Blended with antioxidants from Certified Organic Fruits, Berries & Botanicals*. Made without any gluten containing ingredients. Mica free Pink Parfait and Papaya will offer a natural, ultra sheer semi-matte finish. The petals from beautiful crushed red roses that are found in Pink Parfait, are valued for their natural color and delightful aroma that they provide! Acai Berry will offer a natural, ultra sheer satin finish (mica added). VEGAN. Image one is Pink Parfait. Image two is Papaya, and image three is Acai Berry. Model in image four is wearing Papaya. Model in image five is wearing Acai Berry. To see a demonstration of Papaya, click on the video and fast forward to 3:44. Enjoy! This product is EWG VERIFIED™ and rated 'CLEAN' in the Think Dirty app! BPA and Phthalate free packaging. Plastic parts of compacts are recyclable. *Tiny flecks of fruit and botanical particles may be visible in powder. Pink Parfait and Papaya are Titanium Dioxide and Mica free. Net Weight: 2.8 gm.",
        "rating": null,
        "category": "powder",
        "product_type": "blush",
        "tag_list": [
          "purpicks",
          "EWG Verified",
          "Hypoallergenic",
          "No Talc"
        ],
        "created_at": "2018-06-30T19:19:31.909Z",
        "updated_at": "2018-09-02T22:52:06.855Z",
        "product_api_url": "https://makeup-api.herokuapp.com/api/v1/products/1035.json",
        "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/035/original/open-uri20180630-4-n6wb0y?1530390383",
        "product_colors": [
          {
            "hex_value": "#E1BFC0",
            "colour_name": "Pink Parfait"
          },
          {
            "hex_value": "#D7A7A3",
            "colour_name": "Papaya"
          },
          {
            "hex_value": "#E6C3CB",
            "colour_name": "Acai Berry"
          }
        ]
      }
    ]
  }
  
  window.addEventListener('DOMContentLoaded', async () => {
    const datos = await loadData();
    if (datos && datos.products) {
        console.log(datos);

        //const strNames = datos.products.map(producto => producto.name).join("<br>");
        const strNames = datos.products.map(producto => `<li>${producto.name}</li>`).join('');

        // Seleccionar el contenedor y actualizar su contenido
        const container = document.querySelector(".container");
        if (container) {
            container.innerHTML = `<ol>${strNames}</ol>`;
        } else {
            console.error("No se encontró el elemento con la clase 'container'.");
        }
    } else {
        console.error("No se pudieron obtener los productos.");
    }
});


async function loadData() {
    return fetch("./makeup.json")
        .then(response => response.json())
        .catch(error => {
            console.error("Error al cargar los datos:", error);
            return null; // Retorna null en caso de error
        });
}

window.addEventListener('DOMContentLoaded', async () => {
    const datos = await loadData();
    if (datos && datos.products) {
        console.log(datos);

        //const strNames = datos.products.map(producto => producto.name).join("<br>");
        //const strNames = datos.products.map(producto => `<li>${producto.brand}</li>`).sort().join('');
        //   const strNames = datos.products.map(producto => `<li>${producto.created_at}-${producto.updated_at}</li>`).sort().join('');
        const strNames = datos.products.map(producto => {
            // TODO
            // cuanto tiempo ha pasado entre
            let old = new Date(producto.updated_at) - new Date(producto.created_at);
            if (old > 1000 * 60  ) {
                return `<li>${producto.created_at}-${producto.updated_at}</li>`;
            } else {
                return `<li>${producto.created_at}-${producto.updated_at}</li>`;
            }
        }).join('');
        const container = document.querySelector(".container");
        container.innerHTML = `<ol>${strNames}</ol>`;


    } else {
        console.error("No se pudieron obtener los productos.");
    }
});