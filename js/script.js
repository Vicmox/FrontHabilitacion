fetch('http://localhost:8080/news')
.then(response => response.json())
.then(data => mostrarNews(data))
.catch(error => console.log(error))

const mostrarNews=(data)=>{
        console.log(data)
        let body=''
        for(let i=0;i<data.length;i++){
            body+=`<tr> <td>${data[i].id}</td> <td>${data[i].titulo}</td> <td>${data[i].desarrollo}</td> <td>${data[i].fecha}</td> <td>${data[i].url}</td> <td>${data[i].resumen}</td> <td><button class="btn btn-warning" id="editarUsuarios" src="editarNews.html">Editar</button></td> <td><button class="btn btn-danger" onclick="eliminarU(${data[i].id}) id="eliminarUsuarios">Eliminar</button></td></tr>`
        }
        document.getElementById('dataNews').innerHTML=body
}
