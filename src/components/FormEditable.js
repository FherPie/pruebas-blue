import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';



function FormEditable(props) {

    const [datosPersona, setDatosPersona] = useState(props.personState);
    const editButtonRef = useRef(null);
    const [isEditing, setEditing] = useState(false);
    const [isUpdating, setUpdating] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        props.updatePerson(datosPersona);
        setEditing(false);
    }

    function handleChange(event) {
        const name = event.target.name;
        let nombre=event.target.value;
        datosPersona[name]=nombre;
        setUpdating(true);
        props.wasUpdatedForm(datosPersona);
    }
    const cancelarActualizacion=()=>{
        setUpdating(false);
        setEditing(false);

    };




    const viewTemplate = (
        <div className="stack-small">
          <div className="c-cb">
              <ul>
                <li>{datosPersona["usuario_id"]}</li>
                <li>{datosPersona["tipo_documento"]}</li>
                <li>{datosPersona["numero_documento"]}</li>
                <li>{datosPersona["nombres"]}</li>
              </ul>
            </div>
            <div className="btn-group">
            <button
              type="button"
              className="btn"
              onClick={() => setEditing(true)}
              ref={editButtonRef}
              >
                Edit
              </button>
            </div>
        </div>);

    const editingTemplate = (
        <form onSubmit={handleSubmit}>
        <Container>¨
        
            {/* <Row>
                <Col lg="3" md="6" sm="12">
                    Id
                </Col>

                <Col lg="3" md="6" sm="12">
                    <input
                        readOnly
                        name="person_id"
                        id="person_id"
                        input="text"
                        autoComplete="off"
                        onChange={handleChange}
                        value={datosPersona.usuario_id}
                    ></input>

                </Col>
                <Col lg="3" md="6" sm="12">Login</Col>
                <Col lg="3" md="6" sm="12">
                    <input
                        readOnly
                        name="usuario_login"
                        id="usuario_login"
                        input="text"
                        autoComplete="off"
                        onChange={handleChange}
                        value={datosPersona.usuario_login}
                    ></input>
                </Col>
            </Row> */}

                  <input
                        name="nombres"
                        id="nombres"
                        onChange={handleChange}
                        defaultValue={datosPersona["nombres"]}
                        maxLength="50"
                        type="text"
                    ></input>

            {/* <Row>
                <Col lg="3" md="6" sm="12">Nombres:</Col>

                <Col lg="3" md="6" sm="12">

                    <input
                        name="nombres"
                        id="nombres"
                        input="text"
                        onChange={handleChange}
                        value={datosPersona.nombres}
                        maxLength="50"

                    ></input>
                </Col>

                <Col lg="3" md="6" sm="12">Primer Apellido:</Col>

                <Col lg="3" md="6" sm="12">

                    <input
                        name="primer_apellido"
                        id="primer_apellido"
                        input="text"
                        onChange={handleChange}
                        value={datosPersona.primer_apellido}
                        maxLength="50"
                    ></input>
                </Col>

            </Row>

            <Row>
                <Col lg="3" md="6" sm="12">Segundo Apellido:</Col>

                <Col lg="3" md="6" sm="12">

                    <input
                        name="segundo_apellido"
                        id="segundo_apellido"
                        input="text"
                        onChange={handleChange}
                        value={datosPersona.segundo_apellido}
                        maxLength="50"
                    ></input>
                </Col>

                <Col lg="3" md="6" sm="12">Email Laboral:</Col>

                <Col lg="3" md="6" sm="12">

                    <input
                        name="email_laboral"
                        id="email_laboral"
                        input="text"
                        onChange={handleChange}
                        value={datosPersona.email_laboral}
                        type="email"
                    ></input>
                </Col>

            </Row>


            <Row>
                <Col lg="3" md="6" sm="12">Teléfono Laboral:</Col>

                <Col lg="3" md="6" sm="12">

                    <input
                        name="telefono_laboral"
                        id="telefono_laboral"
                        input="text"
                        onChange={handleChange}
                        value={datosPersona.telefono_laboral}
                        type="telephone"
                    ></input>
                </Col>

                <Col lg="3" md="6" sm="12">Extensión:</Col>

                <Col lg="3" md="6" sm="12">

                    <input
                        name="extension_asterisk"
                        id="extension_asterisk"
                        input="text"
                        onChange={handleChange}
                        value={datosPersona.extension_asterisk}
                    ></input>
                </Col>

            </Row>

            <Row>
                <Col lg="3" md="6" sm="12">Contraseña:</Col>

                <Col lg="3" md="6" sm="12">

                    <input
                        name="password_asterisk"
                        id="password_asterisk"
                        input="text"
                        onChange={handleChange}
                        value={datosPersona.password_asterisk}
                    ></input>
                </Col>

                <Col lg="3" md="6" sm="12">Codigo:</Col>

                <Col lg="3" md="6" sm="12">

                    <input
                        name="codigo_estado"
                        id="codigo_estado"
                        input="text"
                        onChange={handleChange}
                        value={datosPersona.codigo_estado}
                    ></input>
                </Col>

            </Row> */}

        </Container>

        <button disabled={!isUpdating} onClick={() => handleSubmit}>Actualizar</button>
        <button  onClick={() => cancelarActualizacion()}>Cancelar</button>
    </form>
    );
   
    useEffect(() => {
        console.log("USE EFFECT")
        setDatosPersona(props.personState);
    });

    return isEditing ? editingTemplate : viewTemplate;


}

export default FormEditable;