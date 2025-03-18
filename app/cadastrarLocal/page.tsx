'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from './styles.module.css';
import Header from '../components/header/page';

export default function CadastrarLocal() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        nome: '',
        endereco: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://ceteia.guanambi.ifbaiano.edu.br:15050/api/local', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Local cadastrado com sucesso!');
                router.push('/local'); // Redireciona para a lista de locais
            } else {
                alert('Erro ao cadastrar local.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar local:', error);
        }
    };

    return (
        <div className={Styles.conteiner}>
            <Header />
            <div className={Styles.form}>
                <h1 className={Styles.title}>Cadastrar Local</h1>

                <div className={Styles.card}>
                    <p className={Styles.text}>Nome do Local</p>
                    <input className={Styles.input} type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Digite o nome do local" required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Endereço</p>
                    <input className={Styles.input} type="text" name="endereco" value={formData.endereco} onChange={handleChange} placeholder="Digite o endereço" required />
                </div>

                <div className={Styles.buttonConteiner}>
                    <button className={Styles.button} type="submit" onClick={handleSubmit}>Salvar</button>
                    <button className={Styles.buttonVoltar} type="button" onClick={() => router.push('/local')}>Voltar</button>
                </div>
            </div>
        </div>
    );
}
