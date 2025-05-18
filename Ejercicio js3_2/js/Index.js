function ConvertirAcm(){
    let meter = document.getElementById("metro").value;

    let centimeters = meter * 100; 

    swal.fire({
        title: "La respuesta es",
        text: `${meter} metros equivalen a ${centimeters} centimetros.`,
        icon: "success"
    });
}