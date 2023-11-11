import React, { useState } from 'react';
import './CalculadoraIMC.css';

const CalculadoraIMC = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultado, setResultado] = useState(null);
    const calcularIMC = () => {
        if (altura && peso) {
            const alturaMetros = parseFloat(altura) / 100;
            const imc = parseFloat(peso) / (alturaMetros * alturaMetros);
            setResultado(imc.toFixed(2));
        }
    };
    const getClassificacao = () => {
        if (resultado) {
            if (resultado < 18.5) {
                return 'Abaixo do peso';
            } else if (resultado < 24.9) {
                return 'Peso normal';
            } else if (resultado < 29.9) {
                return 'Sobrepeso';
            } else if (resultado < 34.9) {
                return 'Obesidade Grau I';
            } else if (resultado < 39.9) {
                return 'Obesidade Grau II';
            } else {
                return 'Obesidade Grau III';
            }
        }
    };
    return (
        <div className="calculadora-imc">
            <h2 className="titulo">Calculadora de IMC</h2>
            <div className="campo">
                <label>Altura (cm):</label>
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Peso (kg):</label>
                <input
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                />
            </div>
            <button className="botao" onClick={calcularIMC}>
                Calcular
            </button>
            {resultado && (
                <div className="resultado">
                    <p>IMC: {resultado}</p>
                    <p>Classificação: {getClassificacao()}</p>
                </div>
            )}
        </div>
    );
};

export default CalculadoraIMC;