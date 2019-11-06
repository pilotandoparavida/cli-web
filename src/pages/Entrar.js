import React, { useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Entrar({ history }) {
    const [geralError, setGeralError] = useState('');
    const [cnh, setCnh] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cnhError, setCnherror] = useState('');
    const [nascError, setNascerror] = useState('');
    const [loading, setLoading] = useState(false);

    function validateForm() {
        let valid = true;
        if (!cnh) {
            setCnherror('Informe a CNH.');
            valid = false;
        } else {
            setCnherror('');
        }
        if (!nascimento) {
            setNascerror('Informe a data de nascimento.');
            valid = false;
        } else {
            setNascerror('');
            var regExpCaracter = /[^\d]/;     //Expressão regular para procurar caracter não-numérico.
            var regExpEspaco = /^\s+|\s+$/g;  //Expressão regular para retirar espaços em branco.
            if (nascimento.length !== 10) {
                setNascerror('Data fora do padrão DD/MM/AAAA.');
                valid = false;
            } else {
                var splitData = nascimento.split('/');
                if (splitData.length !== 3) {
                    setNascerror('Data fora do padrão DD/MM/AAAA.');
                    valid = false;
                } else {
                    splitData[0] = splitData[0].replace(regExpEspaco, '');
                    splitData[1] = splitData[1].replace(regExpEspaco, '');
                    splitData[2] = splitData[2].replace(regExpEspaco, '');
                    if ((splitData[0].length !== 2) || (splitData[1].length !== 2) || (splitData[2].length !== 4)) {
                        setNascerror('Data fora do padrão DD/MM/AAAA');
                        valid = false;
                    }
                    if (regExpCaracter.test(splitData[0]) || regExpCaracter.test(splitData[1]) || regExpCaracter.test(splitData[2])) {
                        setNascerror('Caracter inválido encontrado!');
                        valid = false;
                    }
                }
            }
        }
        return valid;
    }

    async function handleEntrar(event) {        
        setGeralError('');
        event.preventDefault();
        if (validateForm()) {
            setLoading(true);
            api.get('/login', { headers: { cnh, nascimento } })
                .then((response) => {
                    setLoading(false);
                    const { _id } = response.data.dados;
                    localStorage.setItem('@webppv/aluno_id', _id);
                    if (history) history.push('/');
                })
                .catch((error) => {
                    setLoading(false);
                    if (error.response) {
                        setGeralError(error.response.data.msg);
                    } 
                });
        }
    }

    function handleLogout() {
        localStorage.removeItem('@webppv/aluno_id');
        localStorage.removeItem('@webppv/turma_id');
    }

    return (
        <>
            <div className="container">
                <img src={logo} style={{ cursor: 'pointer' }} alt="Pilotando para Vida" className="logo" onClick={() => handleLogout()} />
                <div className="content">
                    <form onSubmit={handleEntrar}>
                        <label htmlFor="cnh">CNH*</label>
                        <div style={{ fontSize: 12, color: 'red' }}>{cnhError}</div>
                        <input type="text" id="cnh" placeholder="CNH" onChange={event => setCnh(event.target.value)} value={cnh} />

                        <label htmlFor="nascimento">Data de nascimento*</label>
                        <div style={{ fontSize: 12, color: 'red' }}>{nascError}</div>
                        <input type="text" id="nascimento" placeholder="Data de nascimento" onChange={event => setNascimento(event.target.value)} value={nascimento} />

                        <div style={{ fontSize: 12, color: 'red' }}>{geralError}</div>
                        <button type="submit" disabled={loading}>
                            {loading && <i className="fa fa-refresh fa-spin" />}
                            Entrar
                        </button>
                    </form>
                    <p />
                    <Link to='/cad'>
                        <button>Cadastro</button>
                    </Link>
                </div>
            </div>
        </>
    );
}