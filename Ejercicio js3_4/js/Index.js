function ConvertirApulg(){
    let yards = document.getElementById("yardas").value;

    let inches = yards * 36;

    swal.fire({
        title: "La respuesta es",
        text: `${yards} yardas equivalen a ${inches} pulgadas.`,
        icon: "success"
    });
}