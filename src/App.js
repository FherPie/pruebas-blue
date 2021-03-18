import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import SearchForm from './components/SearchForm';
import FormEditable from './components/FormEditable';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Button } from 'bootstrap';

function App() {

  const API_ListarUsuarioxNombre = "https://api.github.com/users/hacktivist123/repos";

  const [appState, setAppState] = useState({
    repos: null,
  });

  

  const [appStateBack, setAppStateBack] = useState({
    reposBack: null,
  });

  const [modalState, setModalState] = useState(false);
  const [mensajeModal, setMensajeModal] = useState('');
  const [wasUpdated, setWasUpdated] = useState(false);


  const [personState, setPersonState] = useState(
    {
      usuario_id: "",
      tipo_documento: "",
      numero_documento: "",
      nombres: "",
      primer_apellido: "",
      segundo_apellido: "",
      tipo_usuario: "",
      tipo_gestor: "",
      email_laboral: "",
      telefono_laboral: "",
      movil_laboral: "",
      usuario_login: "",
      codigo_estado: "",
      usuario_actualizacion: "",
      fecha_actualizacion: "",
      extension_asterisk: "",
      password_asterisk: "",
      accion: ""
    }
  );

  async function callofservice(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  function mostrarModal() {
    setModalState(!modalState);
  };

  function wasUpdatedForm(datosPersona) {
    const personaActualiza = appStateBack.reposBack.filter(person => datosPersona["usuario_id"] == person.usuario_id);
    if(personaActualiza===datosPersona){
      setWasUpdated(false);
    }else{
      setWasUpdated(true);
    }
  };


  function choosePerson(idPerson) {
    //buscar en un arreglo el id de person y actualizar el estado personState
    console.log(wasUpdated);
    if (wasUpdated) {
      setMensajeModal("<h5>Hay datos editados sin actualizar. ¿Desea descartarlos?</h5>");
      mostrarModal();
    } else {
      const personaActualiza = appState.repos.filter(person => idPerson == person.usuario_id);
      setPersonState(personaActualiza[0]);
    }
    //console.log(personaActualiza[0]);
  };


  function updatePerson(person) {
    const apiUrl = 'https://app.crmetric.com/srv-crmetric-web/rest/usuario/registrarUsuario';
    let today = new Date();
    person["fecha_actualizacion"] = retornarFecha(today);
    console.log(person);

    callofservice(apiUrl, person)
      .then((res) => {
        if (res.codigo === "100") {
          console.log(res.codigo);
          console.log(res.codigo === 100);
          setMensajeModal("<h5>Codigo: 100</h5><h5>Mensaje:" + res.mensaje + "</h5>");
          mostrarModal();
        } else {
          console.log(res);
          // setPersonState(person);
          // const arrayperson= appState.repos.map(data=>{
          //   if(data.usuario_id===person.usuario_id){
          //     return person;
          //   }
          //   return data;
          // });
          // setAppState({repos:arrayperson}
        }
      });
    ;
  }

  //Recibe una fecha
  function retornarFecha(today) {
    return today.getFullYear() + "-" + agregaceroadigito(today.getMonth() + 1)
      + "-" + agregaceroadigito(today.getUTCDate()) + " " + agregaceroadigito(today.getHours())
      + ":" + agregaceroadigito(today.getMinutes()) + ":" + agregaceroadigito(today.getSeconds());
  }
  // recibe string
  function agregaceroadigito(digito) {
    return (digito).toString().length == 1 ? "0" + (digito).toString() : (digito).toString();
  }

  function searchservice(name) {
    const apiUrl = `https://app.crmetric.com/srv-crmetric-web/rest/usuario/listarUsuarioxnombre`;
    callofservice(apiUrl, { 'nombres': name })
      .then((res) => {
        if (res.codigo === 105) {
          setAppState({ repos: null });
        } else {
          const dataRest = res.data.map(persona => {
            persona.fecha_actualizacion = persona.fecha_actualizacion.split(" ")[0];
            return persona;
          });
          setAppState({ repos: [...dataRest] });
          setAppStateBack({ reposBack:  [...dataRest]});
        }
      });

  }


  // function formatearfecha(string) {
  //   var opdations;

  // }

  useEffect(() => {
   // setWasUpdated(false);
  });

  return (
    <div className='App'>
      <h4>BluePoint Pruebas</h4>
      <div className='container'>
        <SearchForm searchservice={searchservice} />
      </div>


      <div className='repo-container'>
        <List repos={appState.repos} choosePerson={choosePerson} />
      </div>

      <div className='repo-container'>
        <FormEditable personState={personState} updatePerson={updatePerson} wasUpdatedForm={wasUpdatedForm} />
      </div>

      <footer>
        <div className='footer'>
          Hecho con {' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          por Andrés Fernando Piedra
        </div>
      </footer>


      <Modal isOpen={modalState}>
        <ModalBody>
          <div dangerouslySetInnerHTML={{ __html: mensajeModal }} />

        </ModalBody>
        <ModalFooter>
          <button onClick={() => mostrarModal()}>Cancelar</button>
        </ModalFooter>
      </Modal>

    </div>
  );
}
export default App;
