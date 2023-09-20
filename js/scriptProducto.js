fetch('https://api.escuelajs.co/api/v1/products')
.then(response => response.json())
.then(data => mostrarProductos(data))
.catch(error => console.log(error))

const mostrarProductos=(data)=>{
        console.log(data)
        let body=''
        for(let i=0;i<data.length;i++){
            body+=`<tr> <td>${data[i].pid}</td> <td>${data[i].name}</td> <td>${data[i].description}</td> <td>${data[i].priceFinal}</td><button class="btn btn-warning" id="editarUsuarios" src="editarNews.html">Editar</button></td> <td><button class="btn btn-danger" onclick="eliminarU(${data[i].id}) id="eliminarUsuarios">Eliminar</button></td></tr>`
        }
        document.getElementById('dataProductos').innerHTML=body
}