import { useState } from 'react';
import axios from '../../lib/axios';
import { TextField, Button, Typography } from '@mui/material';

const NovoLocal = () => {
    const [local, setLocal] = useState({
        nome: '',
        apelido: '',
        tipo: '',
        cnpj: '',
        cidade: '',
        estado: '',
        cep: '',
        endereco: '',
        complemento: '',
        email: '',
        telefone: '',
    });

    const [entradas, setEntradas] = useState([]);
    const [catracas, setCatracas] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocal({
            ...local,
            [name]: value,
        });
    };

    const handleAddEntrada = () => {
        setEntradas([...entradas, { nomeNumero: '' }]);
    };

    const handleAddCatraca = () => {
        setCatracas([...catracas, { nomeNumero: '' }]);
    };

    const handleChangeEntrada = (index, value) => {
        const newEntradas = entradas.slice();
        newEntradas[index].nomeNumero = value;
        setEntradas(newEntradas);
    };

    const handleChangeCatraca = (index, value) => {
        const newCatracas = catracas.slice();
        newCatracas[index].nomeNumero = value;
        setCatracas(newCatracas);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/locais', local);
            const localId = response.data.id;
            for (let entrada of entradas) {
                await axios.post('/entradas', { ...entrada, localId });
            }
            for (let catraca of catracas) {
                await axios.post('/catracas', { ...catraca, localId });
            }
            alert('Local cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar local:', error);
            alert('Erro ao cadastrar local.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h4">Novo Local</Typography>
            <TextField label="Nome" name="nome" value={local.nome} onChange={handleChange} required />
            {/* Adicione os outros campos aqui */}
            <Button onClick={handleAddEntrada}>Adicionar Entrada</Button>
            {entradas.map((entrada, index) => (
                <TextField
                    key={index}
                    label={`Entrada ${index + 1}`}
                    value={entrada.nomeNumero}
                    onChange={(e) => handleChangeEntrada(index, e.target.value)}
                />
            ))}
            <Button onClick={handleAddCatraca}>Adicionar Catraca</Button>
            {catracas.map((catraca, index) => (
                <TextField
                    key={index}
                    label={`Catraca ${index + 1}`}
                    value={catraca.nomeNumero}
                    onChange={(e) => handleChangeCatraca(index, e.target.value)}
                />
            ))}
            <Button type="submit">Cadastrar Local</Button>
        </form>
    );
};

export default NovoLocal;