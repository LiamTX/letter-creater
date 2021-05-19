import './Letter.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import { format } from 'date-fns';

function Letter(props) {
    const [where, setWhere] = useState();
    const [title, setTitle] = useState();
    const [message, setMessage] = useState();
    const [who, setWho] = useState();
    const [color, setColor] = useState();
    const [createdAt, setCreatedAt] = useState();

    // eslint-disable-next-line
    useEffect(async () => {
        const letter = localStorage.getItem('letter');
        if (!letter) {
            window.alert('Preencha os dados da carta!');

            await props.history.push('/');
        }

        const { where, title, message, who, color, createdAt } = JSON.parse(letter);
        setWhere(where);
        setTitle(title);
        setMessage(message);
        setWho(who);
        setColor(color);
        console.log(color);
        setCreatedAt(format(new Date(createdAt), 'MM/dd/yyyy'));
    }, []);

    return (
        <div className="container">
            <div className="letter">
                <Link to="/">Voltar</Link>
                <Card
                    bg={color}
                    key={1}
                    text={color === 'light' ? 'dark' : 'white'}
                >
                    <section className="header">
                        <Card.Header>{where}, {createdAt}</Card.Header>
                    </section>

                    <Card.Body className="body">
                        <section>
                            <h2>{title}</h2>
                        </section>
                        <Card.Body>
                            <section>
                                <strong><p>{message}</p></strong>
                            </section>
                        </Card.Body>


                        <section>
                            <h3>Ass.: {who}</h3>
                        </section>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default Letter;