'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from './styles.module.css';
import Header from '../components/header/page';

export default function CadastrarProduto() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        preco: '',
        quantidade_estoque: '',
        id_fornecedor: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://ceteia.guanambi.ifbaiano.edu.br:15050/api/produto', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Produto cadastrado com sucesso!');
                router.push('/produto'); // Redireciona para a lista de produtos
            } else {
                alert('Erro ao cadastrar produto.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
        }
    };

    return (
        <div className={Styles.conteiner}>
            <Header />
            <div className={Styles.form}>
                <h1 className={Styles.title}>Cadastrar Produto</h1>

                <div className={Styles.card}>
                    <p className={Styles.text}>Nome do Produto</p>
                    <input className={Styles.input} type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Digite o nome do produto" required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Descrição</p>
                    <input className={Styles.input} type="text" name="descricao" value={formData.descricao} onChange={handleChange} placeholder="Digite a descrição" required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Preço</p>
                    <input className={Styles.input} type="number" name="preco" value={formData.preco} onChange={handleChange} placeholder="Digite o preço" required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>Quantidade em Estoque</p>
                    <input className={Styles.input} type="number" name="quantidade_estoque" value={formData.quantidade_estoque} onChange={handleChange} placeholder="Digite a quantidade" required />
                </div>

                <div className={Styles.card}>
                    <p className={Styles.text}>ID do Fornecedor</p>
                    <input className={Styles.input} type="number" name="id_fornecedor" value={formData.id_fornecedor} onChange={handleChange} placeholder="Digite o ID do fornecedor" required />
                </div>

                <div className={Styles.buttonConteiner}>
                    <button className={Styles.button} type="submit" onClick={handleSubmit}>Salvar</button>
                    <button className={Styles.buttonVoltar} type="button" onClick={() => router.push('/produto')}>Voltar</button>
                </div>
            </div>
        </div>
    );
}
