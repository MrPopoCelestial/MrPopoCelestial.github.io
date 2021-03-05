const listaDeTareas = [];

function onSubmit()
{
    const inputTexto = document.getElementById("inputTexto");
    listaDeTareas.push(inputTexto.value);
    inputTexto.value = ""; // Limpiar la etiquela input type text
    console.log(listaDeTareas);
}