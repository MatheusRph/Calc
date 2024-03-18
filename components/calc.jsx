import React, { useState } from 'react';
import '../style/calc.css'; // Importa o estilo CSS

//Imports bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Calc() {
    const [display, setDisplay] = useState(''); // Estado para armazenar a entrada do usuário
    const [result, setResult] = useState(''); // Estado para armazenar o resultado

    // Função para lidar com o clique em um botão numérico ou operador
    const handleButtonClick = (value) => {
        setDisplay(display + value); // Adiciona o valor do botão à entrada do usuário
    };

    // Função para lidar com o clique no botão "C" (clear)
    const handleClear = () => {
        setDisplay('');
        setResult('');
    };

    // Função para lidar com o clique no botão "=" (igual)
    const handleEqual = () => {
        try {
            setResult(eval(display)); // Avalia a expressão e define o resultado
        } catch (error) {
            setResult('Error'); // Lida com erros na expressão
        }
    };

    return (
        <Container className="container">
            <Row className="resultado mb-2">
                <Col className="d-flex justify-content-end align-items-center bg-dark" variant="dark">
                    {result !== '' ? result : 'Resultado da conta'}
                </Col>
            </Row>

            <Row className="mb-2">
                <Col><Button variant="dark" className="teclas" onClick={handleClear}>C</Button></Col>
                <Col><Button variant="dark" className="teclas" onClick={() => handleButtonClick('1')}>1</Button></Col>
                <Col><Button variant="dark" className="teclas" onClick={() => handleButtonClick('2')}>2</Button></Col>
                <Col><Button variant="dark" className="teclas" onClick={() => handleButtonClick('3')}>3</Button></Col>
            </Row>
            <Row className="mb-2">
                <Col><Button variant="dark" className="teclas" onClick={() => handleButtonClick('4')}>4</Button></Col>
                <Col><Button variant="dark" className="teclas" onClick={() => handleButtonClick('5')}>5</Button></Col>
                <Col><Button variant="dark" className="teclas" onClick={() => handleButtonClick('6')}>6</Button></Col>
                <Col><Button variant="dark" className="teclas" onClick={() => handleButtonClick('+')}>+</Button></Col>
            </Row>
            <Row className="mb-2">
                <Col><Button variant="dark" className="teclas" onClick={() => handleButtonClick('7')}>7</Button></Col>
                <Col><Button variant="dark" className="teclas" onClick={() => handleButtonClick('8')}>8</Button></Col>
                <Col><Button variant="dark" className="teclas" onClick={() => handleButtonClick('9')}>9</Button></Col>
                <Col><Button variant="dark" className="teclas" onClick={() => handleButtonClick('-')}>-</Button></Col>
            </Row>
            <Row className="mb-2">
                <Col><Button variant="dark" className="teclas" onClick={() => handleButtonClick('0')}>0</Button></Col>
                <Col><Button variant="dark" className="teclas" onClick={() => handleButtonClick('*')}>*</Button></Col>
                <Col><Button variant="dark" className="teclas" onClick={() => handleButtonClick('/')}>/</Button></Col>
                <Col><Button variant="dark" className="teclas" onClick={handleEqual}>=</Button></Col>
            </Row>
        </Container>
    );
}

export default Calc;
