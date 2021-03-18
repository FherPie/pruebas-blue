import React, { useState } from "react";
import { Container, Row, Col } from 'reactstrap';

function SearchForm(props) {
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!name.trim()) {
            return;
        }
        props.searchservice(name);
        setName("");
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col lg="3" md="6" sm="12">
                        Usuario:
            </Col>
                    <Col lg="9" md="6" sm="12">
                        <input
                            type="text"
                            id="cuadro_busqueda"
                            className="input input__lg"
                            name="cuadro_busqueda"
                            autoComplete="off"
                            value={name}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
            </form>
        </Container>
    );
}

export default SearchForm;