let btnfral = document.getElementById("btnfral");
let btnovevete = document.getElementById("btnovevete");
let btnemagworld = document.getElementById("btnemagworld");
 
 
  btnfral.addEventListener("click",()=>{
    fralporcentaje.innerHTML = "95%";
    subastasfral.style.width = "95%";
  });

  btnovevete.addEventListener("click",()=>{
    oveveteporcentaje.innerHTML = "65%";
    ovevete.style.width = "65%";
  });

  btnemagworld.addEventListener("click",()=>{
    emagworldporcentaje.innerHTML = "40%";
    emagworld.style.width = "40%";
  });


 
  


 
const formulario = document.querySelector("#contacto form");

  formulario.addEventListener("submit", (e) => {
      console.log(e);
      e.preventDefault();
  
      const nombre = e.target.querySelector("input[name='nombre']").value;
      const email = e.target.querySelector("input[name='email']").value;
      const telefono = e.target.querySelector("input[name='telefono']").value;
      const mensaje = e.target.querySelector("textarea[name='mensaje']").value;
  
 
          
        if (!nombre || !telefono || !email || !mensaje) {
          const mensajeError = document.querySelector("#mensajeError");
          mensajeError.textContent = "Todos los campos son obligatorios";
          return;
      }
  
      // Aquí podrías incluir el código para enviar el formulario a través de una API o hacer alguna otra acción con los datos.
  
      mensajeError.textContent = "Mensaje enviado, en breve nos pondremos en contacto!";

      //alert("Formulario enviado correctamente");
  
      // Aquí podrías reiniciar el formulario si lo deseas
      formulario.reset();
  });


//   console.log(btnemagworld);

// api async await  

 