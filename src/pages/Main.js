import React, { useEffect, useState, useCallback } from 'react';
import api from '../services/api';
import logo from '../assets/logo.png';
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

    const manageData = useCallback((rAlunoTurma, rTurma) => {
        localStorage.setItem('@webppv/turma_id', rTurma.dados._id);
        if (rTurma.dados.descricao === "ESPERA") {
            setEstado("Lista de Espera");
            setEndereco("à definir");
            setData("à definir");
            setGooglemaps('');
        } else {
            setEstado(rAlunoTurma.dados.estado);
            setEndereco(rTurma.dados.endereco);
            const date = new Date(rTurma.dados.data);
            setData(date.getDate() + ' de ' + monthNames[date.getMonth()] + ' de ' + date.getFullYear());
            setGooglemaps(rTurma.dados.googlemaps);
        }
        setConfirmar(rAlunoTurma.dados.confirmar);
    }, [monthNames]);

    useEffect(() => {
        if (aluno === '') {
            localStorage.removeItem('@webppv/aluno_id');
            localStorage.removeItem('@webppv/turma_id');
            if (history) history.push('/login');
        } else {
            setFetching(true);
            api.get('/aluno/turma', { headers: { 'aluno_id': aluno } })
                .then((rAlunoTurma) => {
                    console.log("rAlunoTurma");
                    console.log(rAlunoTurma.data.dados);
                    api.get(`/turma/${rAlunoTurma.data.dados.turma}`)
                        .then((rTurma) => {
                            console.log("rTurma");
                            console.log(rTurma.data.dados);
                            manageData(rAlunoTurma.data, rTurma.data);
                            setFetching(false);
                        })
                        .catch((error) => {
                            setFetching(false);
                            if (error.response) {
                                console.log(error.response.data.msg);
                            }
                            handleLogout();
                        });
                })
                .catch((error) => {
                    setFetching(false);
                    if (error.response) {
                        console.log(error.response.data.msg);
                    }
                    handleLogout();
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function handleSim() {
        setLoading(true);
        api.get('/aluno/turma/aceitar', { headers: { 'aluno_id': aluno, "turma_id": localStorage.getItem('@webppv/turma_id') } })
            .then((response) => {
                setConfirmar(response.data.dados.confirmar);
                setEstado(response.data.dados.estado);
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
            .then((rAlunoTurma) => {
                if (rAlunoTurma.status === 200 || rAlunoTurma.status === 220) {
                    api.get(`/turma/${rAlunoTurma.data.dados.turma}`)
                        .then((rTurma) => {
                            manageData(rAlunoTurma.data, rTurma.data);
                            setFetching(false);
                        })
                        .catch((error) => {
                            setFetching(false);
                            if (error.response) {
                                console.log(error.response.data.msg);
                            }
                            handleLogout();
                        });
                    if (rAlunoTurma.status === 220) {
                        alert('Você já fez o curso.');
                    } else {
                        alert("Você foi transferido de turma!");
                    }
                    setLoading(false);

                } else if (rAlunoTurma.status === 210) { // removido
                    setLoading(false);
                    alert('Você foi removido do sistema. Caso tenha interesse em realizar o curso, realize novamente sua inscrição.');
                    localStorage.removeItem('@webppv/aluno_id');
                    localStorage.removeItem('@webppv/turma_id');
                    if (history) history.push('/login');
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
                        <iframe title="GoogleMaps" src={googlemaps} style={{ border: 0, width: "100%", height: "200" }}></iframe>
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