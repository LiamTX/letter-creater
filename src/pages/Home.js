import './Home.css';
import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

function Home(props) {
    const [where, setWhere] = useState();
    const [title, setTitle] = useState();
    const [message, setMessage] = useState();
    const [who, setWho] = useState();
    const [color, setColor] = useState('primary');

    async function submitLetter() {
        if (where && title && message && who && color) {
            const letter = {
                where,
                title,
                message,
                who,
                color,
                createdAt: new Date()
            };

            localStorage.setItem('letter', JSON.stringify(letter));

            return await props.history.push('/letter');
        }

        window.alert('Preencha todos os campos!!!');
    }

    return (
        <div className="container">
            <div className="form">
                <Card>
                    <Card.Header>Insira as informações solicitadas para gerar a sua carta</Card.Header>
                    <Card.Body>
                        <div className="first-line">
                            <section>
                                <Form.Group className="where">
                                    <Form.Label>De onde você escreve?</Form.Label>
                                    <Form.Control
                                        onChange={e => setWhere(e.target.value)}
                                    />
                                </Form.Group>
                            </section>

                            <section>
                                <Form.Group className="title">
                                    <Form.Label>Titulo da carta</Form.Label>
                                    <Form.Control
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                </Form.Group>
                            </section>
                        </div>

                        <section>
                            <Form.Group>
                                <Form.Label>Mensagem</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </Form.Group>
                        </section>

                        <section>
                            <Form.Group>
                                <Form.Label>Quem é você?</Form.Label>
                                <Form.Control
                                    onChange={e => setWho(e.target.value)}
                                />
                            </Form.Group>
                        </section>

                        <section>
                            <Form.Group>
                                <Form.Label>Escolha a cor da carta</Form.Label>
                                <Form.Control
                                    as="select"
                                    custom
                                    onChange={e => setColor(e.target.value)}
                                >
                                    <option value="primary" defaultValue>Azul</option>
                                    <option value="danger">Vermelho</option>
                                    <option value="success">Verde</option>
                                    <option value="warning">Amarelo</option>
                                    <option value="light">Branco</option>
                                    <option value="dark">Preto</option>
                                    <option value="secondary">Cinza</option>
                                </Form.Control>
                            </Form.Group>
                        </section>
                    </Card.Body>

                    <Button variant="dark" onClick={submitLetter}>Criar</Button>
                </Card>
            </div>
        </div>
    )
}

export default Home;