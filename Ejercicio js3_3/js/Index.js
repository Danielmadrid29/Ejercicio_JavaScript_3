function ConvertirApulg(){
    let feet = document.getElementById("pies").value;

    let inches = feet * 12;

    swal.fire({
        title: "La respuesta es ",
        text: `${feet} pies equivalen a ${inches} pulgadas.`,
        icon: "success"
    });
}