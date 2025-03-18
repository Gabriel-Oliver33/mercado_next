'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from './styles.module.css';
import Header from '../components/header/page';

export default function CadastrarCliente() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        senha: '',
        data_nascimento: '',
    });

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://ceteia.guanambi.ifbaiano.edu.br:15050/api/clientes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Cliente cadastrado com sucesso!');
                router.push('/cliente'); // Redireciona para lista de clientes
            } else {
                alert('Erro ao cadastrar cliente.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
        }
    };

    return (
        <div className={Styles.conteiner}>
            <Header />
            <div className={Styles.form}>
                <h1 className={Styles.title}>Cadastrar Cliente</h1>

                <div className={Styles.card}>
                    <p className={Styles.text}>Nome do cliente</p>
                    <input className={Styles.input} type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Digite seu nome" required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Email</p>
                    <input className={Styles.input} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Digite seu email" required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Telefone</p>
                    <input className={Styles.input} type="text" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Digite seu telefone" required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Endereço</p>
                    <input className={Styles.input} type="text" name="endereco" value={formData.endereco} onChange={handleChange} placeholder="Digite seu endereço" required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Data de Nascimento</p>
                    <input className={Styles.input} type="date" name="data_nascimento" value={formData.data_nascimento} onChange={handleChange} required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Senha</p>
                    <div style={{ position: 'relative' }}>
                        <input className={Styles.input} type={mostrarSenha ? 'text' : 'password'} name="senha" value={formData.senha} onChange={handleChange} placeholder="Digite sua senha" required />
                        <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)} className={Styles.eyeButton}>
                            {mostrarSenha ? '🙈' : '👁️'}
                        </button>
                    </div>
                </div>

                <div className={Styles.buttonConteiner}>
                  <button className={Styles.button} type="submit" onClick={handleSubmit}>Salvar</button>
                  <button className={Styles.buttonVoltar} type="button" onClick={() => router.push('/cliente')}>Voltar</button>
                </div>
            </div>
        </div>
    );
}
