'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from './styles.module.css';
import Header from '../components/header/page';

export default function CadastrarCompra() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        id_fornecedor: '',
        data_compra: '',
        valor_total: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://ceteia.guanambi.ifbaiano.edu.br:15050/api/compras', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Compra cadastrada com sucesso!');
                router.push('/compra'); // Redireciona para a lista de compras
            } else {
                alert('Erro ao cadastrar compra.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar compra:', error);
        }
    };

    return (
        <div className={Styles.conteiner}>
            <Header />
            <div className={Styles.form}>
                <h1 className={Styles.title}>Cadastrar Compra</h1>

                <div className={Styles.card}>
                    <p className={Styles.text}>ID do Fornecedor</p>
                    <input className={Styles.input} type="number" name="id_fornecedor" value={formData.id_fornecedor} onChange={handleChange} placeholder="Digite o ID do fornecedor" required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Data da Compra</p>
                    <input className={Styles.input} type="date" name="data_compra" value={formData.data_compra} onChange={handleChange} required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Valor Total</p>
                    <input className={Styles.input} type="number" name="valor_total" value={formData.valor_total} onChange={handleChange} placeholder="Digite o valor total" required />
                </div>

                <div className={Styles.buttonConteiner}>
                    <button className={Styles.button} type="submit" onClick={handleSubmit}>Salvar</button>
                    <button className={Styles.buttonVoltar} type="button" onClick={() => router.push('/compra')}>Voltar</button>
                </div>
            </div>
        </div>
    );
}
