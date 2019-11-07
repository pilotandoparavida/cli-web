import React, { useState } from 'react';
import api from '../services/api';
import logo from '../assets/logo.png';

export default function Cadastro({ history }) {
    const classname = "WEBPPV:Cadastro";
    const [nome, setNome] = useState('');
    const [nomeError, setNomeerror] = useState('');
    const [cpf, setCpf] = useState('');
    const [cpfError, setCpferror] = useState('');
    const [rg, setRg] = useState('');
    const [rgError, setRgerror] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [nascError, setNascerror] = useState('');
    const [cnh, setCnh] = useState('');
    const [cnhError, setCnherror] = useState('');
    const [ufcnh, setUfcnh] = useState('');
    const [ufcnhError, setUfcnherror] = useState('');
    const [tempocnh, setTempocnh] = useState('');
    const [cidade, setCidade] = useState('');
    const [whats, setWhats] = useState('');
    const [whatsError, setWhatserror] = useState('');
    const [sexo, setSexo] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailerror] = useState('');

    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [placa, setPlaca] = useState('');
    const [placaError, setPlacaerror] = useState('');

    const [loading, setLoading] = useState(false);

    function validaCnh(value) {
        var char1 = value.charAt(0);
        var dv1, dv2;

        value = value.replace(/[^\d]/g, '');

        if ((value.length !== 11 && value.length !== 9) || char1.repeat(11) === value) {
            return false;
        }

        if (value.length === 9) {
            value = '00' + value;
        }

        for (var sum = 0, i = 0, j = 9; i <= 8; i++ , j--) {
            sum += (j * +value[i]);
        }

        dv1 = sum % 11;

        var incrDig2 = dv1 === 10 ? -2 : 0;

        if (dv1 > 9) {
            dv1 = 0;
        }

        for (sum = 0, i = 0, j = 1; i <= 8; i++ , j++) {
            sum += (j * +value[i]);
        }

        if ((dv2 = ((sum % 11) + incrDig2) < 0 ? 11 + (sum % 11) + incrDig2 : (sum % 11) + incrDig2) > 9) {
            dv2 = 0;
        }

        if (dv1 !== parseInt(value[9]) || dv2 !== parseInt(value[10])) {
            return false;
        }

        return true;
    }

    function validaCpf(value) {
        value = value[0] + value[1] + value[2] + value[3];
        value = value.split("");
        if (value === "00000000000") return false;

        var Soma;
        var Resto;
        var i;
        // 1o digito
        Soma = 0;
        for (i = 0; i < 9; i++) {
            Soma = Soma + value[i] * (10 - i);
        }
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11)) {
            Resto = 0;
        }
        if (Resto !== parseInt(value[9])) {
            return false;
        }

        // 2o digito
        Soma = 0;
        for (i = 0; i < 10; i++) {
            Soma = Soma + value[i] * (11 - i);
        }
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11)) {
            Resto = 0;
        }
        if (Resto !== parseInt(value[10])) {
            return false;
        }

        return true;
    }

    function validateForm() {
        console.log(classname + ":validateForm inside");
        let valid = true;

        if (!placa) {
            setPlacaerror('Informe a placa da moto no padrão XXX-XXXX.');
            valid = false;
        } else {
            setPlacaerror('');
            if (placa.length !== 8) {
                setPlacaerror("Placa fora do padrão XXX-XXXX.");
                valid = false;
            }
            var regExpGeral = /^[a-z,A-Z]{3}-\d.\d{2}/;
            if (!regExpGeral.test(placa)) {
                setPlacaerror("Placa fora do padrão XXX-XXXX.");
                valid = false;
            }
        }

        if (!email) {
            setEmailerror('Informe o email.');
            valid = false;
        } else {
            setEmailerror('');
        }

        if (!whats) {
            setWhatserror('Informe o WhastApp.');
            valid = false;
        } else {
            setWhatserror('');
        }

        if (!ufcnh) {
            setUfcnherror('Informe a Unidade Federativa da CNH.');
            valid = false;
        } else {
            setUfcnherror('');
            if (ufcnh.length !== 2) {
                setUfcnherror('Informe a sigla da unidade federativa da CNH.');
                valid = false;
            }
        }

        if (!rg) {
            setRgerror('Informe o rg.');
            valid = false;
        } else {
            setRgerror('');
        }

        if (!cpf) {
            setCpferror('Informe o CPF.');
            valid = false;
        } else {
            setCpferror('');
            var split1p = cpf.split(".");
            if (split1p.length !== 3) {
                setCpferror('Informe o CPF no formato XXX.XXX.XXX-XX');
                valid = false;
            } else {
                var split2p = split1p[2].split("-");
                if (split2p.length !== 2) {
                    setCpferror('Informe o dígito do CPF.');
                    valid = false;
                } else if (!validaCpf(cpf.split(/[\s.-]+/))) {
                    setCpferror('CPF inválido.');
                    valid = false;
                }
            }
        }

        if (!nome) {
            setNomeerror('Informe o nome.');
            valid = false;
        } else {
            setNomeerror('');
        }

        if (!cnh) {
            setCnherror('Informe a CNH.');
            valid = false;
        } else {
            setCnherror('');
            if (!validaCnh(cnh)) {
                setCnherror('CNH inválida.');
                valid = false;
            }
        }

        if (!nascimento) {
            setNascerror('Informe a data de nascimento no padrão DD/MM/AAAA.');
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

    async function handleSubmit(event) {
        console.log(classname + ":handleSubmit:" + event);
        event.preventDefault();
        if (validateForm()) {
            setLoading(true);
            api.post('/aluno/cadastro', { nome, cpf, rg, nascimento, cnh, ufcnh, tempocnh, cidade, 'celular': whats, sexo, email, marca, modelo, placa })
                .then((response) => {
                    setLoading(false);
                    const {msg, dados} = response.data;
                    alert(msg);
                    const { _id, turma } = dados;
                    localStorage.setItem('@webppv/aluno_id', _id);
                    localStorage.setItem('@webppv/turma_id', turma);
                    if (history) history.push('/');
                })
                .catch((error) => {
                    setLoading(false);
                    if (error.response) {
                        console.log(error.response.data.msg);
                    }
                });
        }
    }

    function handleLogout() {
        console.log(classname + ":handleLogout");
        if (history) history.push('/');
    }

    return (
        <>
            <div className="container">
                <img src={logo} alt="Pilotando para Vida" className="logo" onClick={() => handleLogout()} />
                <div className="content">
                    <p>Cadastre-se no <strong>Pilotando para Vida</strong></p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nome">Nome*</label>
                        <div style={{ fontSize: 12, color: 'red' }}>{nomeError}</div>
                        <input type="text" id="nome" placeholder="Nome" onChange={event => setNome(event.target.value)} value={nome} />

                        <label htmlFor="cpf">CPF*</label>
                        <div style={{ fontSize: 12, color: 'red' }}>{cpfError}</div>
                        <input type="text" id="cpf" placeholder="CPF no formato XXX.XXX.XXX-XX" onChange={event => setCpf(event.target.value)} value={cpf} />

                        <label htmlFor="rg">RG*</label>
                        <div style={{ fontSize: 12, color: 'red' }}>{rgError}</div>
                        <input type="text" id="rg" placeholder="RG" onChange={event => setRg(event.target.value)} value={rg} />

                        <label htmlFor="nascimento">Data de nascimento*</label>
                        <div style={{ fontSize: 12, color: 'red' }}>{nascError}</div>
                        <input type="text" id="nascimento" placeholder="Data de nascimento no formato XX/XX/XXXX" onChange={event => setNascimento(event.target.value)} value={nascimento} />

                        <label htmlFor="cnh">CNH*</label>
                        <div style={{ fontSize: 12, color: 'red' }}>{cnhError}</div>
                        <input type="text" id="cnh" placeholder="CNH" onChange={event => setCnh(event.target.value)} value={cnh} />

                        <label htmlFor="ufcnh">UF da CNH*</label>
                        <div style={{ fontSize: 12, color: 'red' }}>{ufcnhError}</div>
                        <input type="text" id="ufcnh" placeholder="UF da CNH" onChange={event => setUfcnh(event.target.value)} value={ufcnh} />

                        <label htmlFor="tempocnh">Tempo de habilitação de moto</label>
                        <input type="text" id="tempocnh" placeholder="Tempo de habilitação de moto" onChange={event => setTempocnh(event.target.value)} value={tempocnh} />

                        <label htmlFor="cidade">Cidade</label>
                        <input type="text" id="cidade" placeholder="Cidade" onChange={event => setCidade(event.target.value)} value={cidade} />

                        <label htmlFor="whats">WhatsApp*</label>
                        <div style={{ fontSize: 12, color: 'red' }}>{whatsError}</div>
                        <input type="text" id="whats" placeholder="WhatsApp (XX) xxxxx-xxxx" onChange={event => setWhats(event.target.value)} value={whats} />

                        <label htmlFor="email">E-mail*</label>
                        <div style={{ fontSize: 12, color: 'red' }}>{emailError}</div>
                        <input type="email" id="email" placeholder="E-mail" onChange={event => setEmail(event.target.value)} value={email} />

                        <label htmlFor="sexo">Sexo</label>
                        <select name="sexo" id="sexo" onChange={event => setSexo(event.target.value)} value={sexo}>
                            <option value="M" selected>Masculino</option>
                            <option value="F">Feminino</option>
                        </select>

                        <label>Dados da moto</label>
                        <label htmlFor="marca">Marca</label>
                        <input type="text" id="marca" placeholder="Marca" onChange={event => setMarca(event.target.value)} value={marca} />

                        <label htmlFor="modelo">Modelo</label>
                        <input type="text" id="modelo" placeholder="Modelo" onChange={event => setModelo(event.target.value)} value={modelo} />

                        <label htmlFor="placa">Placa*</label>
                        <div style={{ fontSize: 12, color: 'red' }}>{placaError}</div>
                        <input type="text" id="placa" placeholder="Placa no formato XXX-XXXX" onChange={event => setPlaca(event.target.value)} value={placa} />

                        <button type="submit" disabled={loading}>
                            {loading && <i className="fa fa-cog fa-spin" />}
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}