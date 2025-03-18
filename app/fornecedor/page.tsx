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
    const fetchFornecedores = async () => {
      try {
        const response = await fetch("/api/fornecedor");
        if (!response.ok) {
          throw new Error("Erro ao buscar fornecedores.");
        }
        const data = await response.json();
        setFornecedores(data.fornecedores);
      } catch (error) {
        setError("Erro ao carregar fornecedores.");
      } finally {
        setLoading(false);
      }
    };

    fetchFornecedores();
  }, []);

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