$(window, document, undefined).ready(function() {
  $( "#formIngreso" ).submit(function( event ) {
    const formValues = $( this ).serializeArray();
    const formObject = formValues.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.name.replace(/\s*/g, '')]: curr.value,
      }
    }, {});

    event.preventDefault();

    writeUserData(formObject.NombreyApellido, formObject.nacionalidad);
    /*
    {
      "formid": "formingreso",
      "NombreyApellido": "dnsf",
      "nacionalidad": "fsd",
      "FechadeNacimiento": "",
      "CiudadyPais": "",
      "telefono": "",
      "mail": "",
      "profesion": "",
      "alias": "",
      "RazondeIngreso": ""
    }
    */
  });
});

function writeUserData(name, nacionalidade) {
  firebase.database().ref('users').set({
    username: name,
    nacionalidade,
  });
}
