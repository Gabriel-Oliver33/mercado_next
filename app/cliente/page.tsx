'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from './styles.module.css';
import FormCliente from '../components/forms/formCliente/page';
import Header from '../components/header/page';

interface Cliente {
    id_cliente: number;
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
    data_nascimento: string;
}

export default function Cliente() {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await fetch("/api/cliente");
                if (!response.ok) {
                    throw new Error("Erro ao buscar clientes.");
                }
                const data = await response.json();
                setClientes(data.clientes);
            } catch (error) {
                setError("Erro ao carregar clientes.");
            } finally {
                setLoading(false);
            }
        };

        fetchClientes();
    }, []);

    return (
        <div className={Styles.conteiner}>
            <Header />
            
            <h1 className={Styles.heading}>Lista de Clientes</h1>
            <button className={Styles.cadastrarButton} onClick={() => router.push('/cadastrarCliente')}>
              Cadastrar Cliente
            </button>

            {loading ? (
                <p>Carregando...</p>
            ) : error ? (
                <p className={Styles.error}>{error}</p>
            ) : clientes.length === 0 ? (
                <p>Nenhum cliente cadastrado.</p>
            ) : (
                <table className={Styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                            <th>Data de Nascimento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr key={cliente.id_cliente}>
                                <td>{cliente.id_cliente}</td>
                                <td>{cliente.nome}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.telefone}</td>
                                <td>{cliente.endereco}</td>
                                <td>{cliente.data_nascimento}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
