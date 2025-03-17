'use client'
import React, { FormEvent, useEffect, useState } from 'react';
import Styles from './styles.module.css';
import FormFornecedor from '../components/forms/formFornecedor/page';
import Header from '../components/header/page';
import { mockFornecedores } from '../api/mock/fornecedoresMock';

interface Fornecedor {
    id_fornecedor: number;
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
}

export default function Fornecedor (){
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFornecedore = async () => {
      try {
        /* comentado pois site não esta funcionando
        const response = await fetch("/api/produto");
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos.");
        }
        const data = await response.json();
        setProdutos(data.produtos);
        */
        setFornecedores(mockFornecedores);
      } catch (error) {
        setError("Erro ao carregar produtos.");
      } finally {
        setLoading(false);
      }
    };

    fetchFornecedore();
  }, []);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)

        try {
            let response = await fetch ('../api/fornecedor/', {
                method: 'POST',
                body: formData
            })
            
            const data = await response.json()

            alert(`${data.nome} ${data.endereco} ${data.cidade}`);
        } catch (error) {
            console.error('Error submiting form', error)
        }
    }

    return(
        <div className={Styles.conteiner}>
            <Header/>

            <h1 className={Styles.heading}>Lista de Fornecedores</h1>

            {loading ? (
                <p>Carregando...</p>
            ) : error ? (
                <p className={Styles.error}>{error}</p>
            ) : fornecedores.length === 0 ? (
                <p>Nenhum fornecedor cadastrado.</p>
            ) : (
                <table className={Styles.table}>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    </tr>
                </thead>
                <tbody>
                    {fornecedores.map((fornecedor) => (
                    <tr key={fornecedor.id_fornecedor}>
                        <td>{fornecedor.id_fornecedor}</td>
                        <td>{fornecedor.nome}</td>
                        <td>{fornecedor.email}</td>
                        <td>{fornecedor.telefone}</td>
                        <td>{fornecedor.endereco}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            )}

        </div>
    )
}