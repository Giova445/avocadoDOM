/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");
//API intl
//1- da formato a fechas 
//2-- da formato a monedas
const formatPrice = (price) => {
    const newPrice =new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: "USD"
    }).format(price);
    return newPrice;
}

//web api
//conectarnos al server
window
.fetch(`${baseUrl}/api/avo`)
//procesar la respuesta y convertirla en json
.then(response => response.json()).then(responseJson => {  
    //JSON-> data-> renderizar la info
    //console.log(responseJson);
    const todosLosItems = [];
    responseJson.data.forEach((item) => {
     //crear imagen
     const img = document.createElement("img");
     img.src = `${baseUrl}${item.image}`;
     img.className = "img"
     //crear titulo
     const title = document.createElement("h3");
     title.textContent = item.name;
     title.className = 'title'
     //crear precio 
     const price = document.createElement("p");

     price.textContent = formatPrice(item.price);
     price.className = 'price';
     const minicontainer = document.createElement("div");
     minicontainer.className = "basis";
    minicontainer.append(title, price);
     const container = document.createElement("div");
     container.append(img, minicontainer)  
     
     todosLosItems.push(container)
     container.className = 'container'
 });
    appNode.append(...todosLosItems);
      
});
