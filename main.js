import { fetchApi } from "./modules/fetchApi.mjs";
import {error as Execption}  from "./modules/error.mjs";

const div = document.getElementById('app')
const btnReload = document.getElementById('reloadBtn')
const imagen = document.createElement('img')
let count = 0

btnReload.addEventListener('click', async function(){
    const { img , estado, error} = await fetchApi()
    count =+ 1
    if(count >= 1) btnReload.textContent = 'Nueva Imagen'
    !error & estado != null ? (imagen.src = `${img}`,div.appendChild(imagen)) : Execption(div)
})


