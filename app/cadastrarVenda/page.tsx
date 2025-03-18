'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from './styles.module.css';
import Header from '../components/header/page';

export default function CadastrarVenda() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        id_cliente: '',
        data_venda: '',
        valor_total: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://ceteia.guanambi.ifbaiano.edu.br:15050/api/venda', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Venda cadastrada com sucesso!');
                router.push('/venda'); // Redireciona para a lista de vendas
            } else {
                alert('Erro ao cadastrar venda.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar venda:', error);
        }
    };

    return (
        <div className={Styles.conteiner}>
            <Header />
            <div className={Styles.form}>
                <h1 className={Styles.title}>Cadastrar Venda</h1>

                <div className={Styles.card}>
                    <p className={Styles.text}>ID do Cliente</p>
                    <input className={Styles.input} type="number" name="id_cliente" value={formData.id_cliente} onChange={handleChange} placeholder="Digite o ID do cliente" required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Data da Venda</p>
                    <input className={Styles.input} type="date" name="data_venda" value={formData.data_venda} onChange={handleChange} required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Valor Total</p>
                    <input className={Styles.input} type="number" name="valor_total" value={formData.valor_total} onChange={handleChange} placeholder="Digite o valor total" required />
                </div>

                <div className={Styles.buttonConteiner}>
                    <button className={Styles.button} type="submit" onClick={handleSubmit}>Salvar</button>
                    <button className={Styles.buttonVoltar} type="button" onClick={() => router.push('/venda')}>Voltar</button>
                </div>
            </div>
        </div>
    );
}
