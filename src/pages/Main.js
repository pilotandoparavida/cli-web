import React, { useEffect, useState, useCallback } from 'react';
import api from '../services/api';
import logo from './public/assets/logo.png';
import { BallBeat } from 'react-pure-loaders';

export default function Main({ history }) {
    const monthNames = [
        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho", "Julho",
        "Agosto", "Setembro", "Outubro",
        "Novembro", "Dezembro"
    ];
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);

    const [aluno] = useState(
        localStorage.getItem('@webppv/aluno_id') || ''
    )

    const [estado, setEstado] = useState('');
    const [endereco, setEndereco] = useState('');
    const [data, setData] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [googlemaps, setGooglemaps] = useState('');

    const manageData = useCallback((data) => {
        localStorage.setItem('@webppv/turma_id', data.turma._id);
        if (data.turma.descricao === "ESPERA") {
            setEstado("Lista de Espera");
            setEndereco("à definir");
            setData("à definir");
            setGooglemaps('');
        } else {
            setEstado(data.estado);
            setEndereco(data.turma.endereco);
            const date = new Date(data.turma.data);
            setData(date.getDate() + ' de ' + monthNames[date.getMonth()] + ' de ' + date.getFullYear());
            setGooglemaps(data.turma.googlemaps);
            // const datac = new Date(data.updatedAt);  
            // datac.addDays(3);                 
            // setDataconf(datac.getDate() + ' de ' + monthNames[datac.getMonth()] + ' de ' + datac.getFullYear());
        }
        setConfirmar(data.confirmar);
    }, [monthNames]);

    useEffect(() => {
        async function alunoturma() {
            api.get('/aluno/turma', { headers: { 'aluno_id': aluno } })
                .then((response) => {
                    setFetching(false);
                    manageData(response.data.dados);
                })
                .catch((error) => {
                    setFetching(false);
                    if (error.response) {
                        console.log(error.response.data.msg);
                    }
                    handleLogout();
                });
        }
        if (aluno === '') {
            localStorage.removeItem('@webppv/aluno_id');
            localStorage.removeItem('@webppv/turma_id');
            if (history) history.push('/login');
        } else {
            setFetching(true);
            alunoturma();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [aluno, history]);

    async function handleSim() {
        setLoading(true);
        api.get('/aluno/turma/aceitar', { headers: { 'aluno_id': aluno, "turma_id": localStorage.getItem('@webppv/turma_id') } })
            .then((response) => {
                manageData(response.data.dados);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                if (error.response) {
                    console.log(error.response.data.msg);
                }
                handleLogout();
            });
    }

    async function handleNao() {
        setLoading(true);
        api.get('/aluno/turma/negar', { headers: { 'aluno_id': aluno, 'turma_id': localStorage.getItem('@webppv/turma_id') } })
            .then((response) => {
                if (response.status === 200) { // transferido
                    manageData(response.data.dados);
                    setLoading(false);
                    alert("Você foi transferido de turma!");
                } else if (response.status === 210) { // removido
                    setLoading(false);
                    alert('Você foi removido do sistema. Caso tenha interesse em realizar o curso, realize novamente sua inscrição.');
                    localStorage.removeItem('@webppv/aluno_id');
                    localStorage.removeItem('@webppv/turma_id');
                    if (history) history.push('/login');
                } else if (response.status === 220) { // já fez curso, sem permissão de transferir
                    manageData(response.data.dados);
                    setLoading(false);
                    alert('Você já fez o curso.');
                }
            })
            .catch((error) => {
                setLoading(false);
                if (error.response) {
                    console.log(error.response.data.msg);
                }
                handleLogout();
            });
    }

    function handleLogout() {
        localStorage.removeItem('@webppv/aluno_id');
        localStorage.removeItem('@webppv/turma_id');
        if (history) history.push('/login');
    }

    function ShowTurmaInfo(props) {
        return (
            <>
                <p style={{ 'justifyContent': 'center' }}>{estado}</p>
                <label style={{ 'fontWeight': 'bold' }}>Data: </label>
                <label htmlFor="data">{data}</label>
                <p />
                <label style={{ 'fontWeight': 'bold' }}>Endereço: </label>
                <label htmlFor="data">{endereco}</label>
                <p />
                {googlemaps !== '' &&
                    <center>
                        <iframe title="GoogleMaps"  src={googlemaps} style={{border:0, width:"100%", height:"200"}}></iframe>
                    </center>
                }
                <p />
                {confirmar === true &&
                    <Confirmar />
                }
            </>
        );
    }

    function Confirmar(props) {
        return (
            <div>
                <p />
                {/* <label>Você deve confirmar a sua presença até a data ${dataConf} para que sua vaga seja garantida! Após você será removido do sistema e deverá realizar um novo cadastro.</label> */}
                <label>Você deve confirmar a sua presença para que sua vaga seja garantida!</label>
                <p />
                <button style={{ width: '40%', margin: '10px' }} onClick={() => handleSim()} disabled={loading}>
                    <label>Sim</label>
                </button>
                <button style={{ width: '40%', margin: '10px' }} onClick={() => handleNao()} disabled={loading}>
                    <label>Não</label>
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="container">
                <img src={logo} style={{ 'cursor': 'pointer' }} alt="Pilotando para Vida" className="logo" onClick={() => handleLogout()} />
                <div className="content">
                    {fetching &&
                        <div className="fetching">
                            <BallBeat
                                color={'#F58D50'}
                                loading={fetching}
                            />
                        </div>
                    }
                    {!fetching && <ShowTurmaInfo />}
                </div>
            </div>
        </>
    );
}