fetch('https://api.escuelajs.co/api/v1/categories')
.then(response => response.json())
.then(data => mostrarCategoria(data))
.catch(error => console.log(error))

const mostrarCategoria=(data)=>{
        console.log(data)
        let body=''
        for(let i=0;i<data.length;i++){
            body+=`<tr> <td>${data[i].id}</td> <td>${data[i].descripcion}</td> <button class="btn btn-warning" id="editarUsuarios" src="editarNews.html">Editar</button></td> <td><button class="btn btn-danger" onclick="eliminarU(${data[i].id}) id="eliminarUsuarios">Eliminar</button></td></tr>`
        }
        document.getElementById('dataCategoria').innerHTML=body
}