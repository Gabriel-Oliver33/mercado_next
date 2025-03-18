'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from './styles.module.css';
import Header from '../components/header/page';

export default function CadastrarClassificacao() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        id_cliente: '',
        id_produto: '',
        nota: '',
        comentario: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://ceteia.guanambi.ifbaiano.edu.br:15050/api/classificacao', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Classificação cadastrada com sucesso!');
                router.push('/classificacao'); // Redireciona para a lista de classificações
            } else {
                alert('Erro ao cadastrar classificação.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar classificação:', error);
        }
    };

    return (
        <div className={Styles.conteiner}>
            <Header />
            <div className={Styles.form}>
                <h1 className={Styles.title}>Cadastrar Classificação</h1>

                <div className={Styles.card}>
                    <p className={Styles.text}>ID do Cliente</p>
                    <input className={Styles.input} type="number" name="id_cliente" value={formData.id_cliente} onChange={handleChange} placeholder="Digite o ID do cliente" required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>ID do Produto</p>
                    <input className={Styles.input} type="number" name="id_produto" value={formData.id_produto} onChange={handleChange} placeholder="Digite o ID do produto" required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Nota</p>
                    <input className={Styles.input} type="number" name="nota" value={formData.nota} onChange={handleChange} placeholder="Digite a nota (0 a 10)" min="0" max="10" required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Comentário</p>
                    <textarea className={Styles.input} name="comentario" value={formData.comentario} onChange={handleChange} placeholder="Digite um comentário" required />
                </div>

                <div className={Styles.buttonConteiner}>
                    <button className={Styles.button} type="submit" onClick={handleSubmit}>Salvar</button>
                    <button className={Styles.buttonVoltar} type="button" onClick={() => router.push('/classificacao')}>Voltar</button>
                </div>
            </div>
        </div>
    );
}
