'use client'
import React, { useEffect, useState } from 'react';
import Styles from './styles.module.css';
import Header from '../components/header/page';
import { useRouter } from 'next/navigation';


interface Classificacao {
  id_classificacao: number;
  id_cliente: number;
  id_produto: number;
  nota: number;
  comentario: string;
  data_classificacao: string;
}

export default function Classificacao (){
  const [classificacoes, setClassificacoes] = useState<Classificacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();
  
  useEffect(() => {
    const fetchClasificacoes = async () => {
      try {
        const response = await fetch("/api/classificacao");
        if (!response.ok) {
          throw new Error("Erro ao buscar classificações.");
        }
        const data = await response.json();
        setClassificacoes(data.classificacoes);
      } catch (error) {
        setError("Erro ao carregar classificações.");
      } finally {
        setLoading(false);
      }
    };

    fetchClasificacoes();
  }, []);

    return(
        <div className={Styles.conteiner}>
            <Header/>
            <h1 className={Styles.heading}>Lista de Classificações</h1>
            <button className={Styles.cadastrarButton} onClick={() => router.push('/cadastrarClassificacao')}>
              Cadastrar Classificação
            </button>

            {loading ? (
                <p>Carregando...</p>
            ) : error ? (
                <p className={Styles.error}>{error}</p>
            ) : classificacoes.length === 0 ? (
                <p>Nenhuma classificação cadastrada.</p>
            ) : (
                <table className={Styles.table}>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>ID Cliente</th>
                    <th>ID Produto</th>
                    <th>Nota</th>
                    <th>Comentário</th>
                    <th>Data da Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    {classificacoes.map((classificacao) => (
                    <tr key={classificacao.id_classificacao}>
                        <td>{classificacao.id_classificacao}</td>
                        <td>{classificacao.id_cliente}</td>
                        <td>{classificacao.id_produto}</td>
                        <td>{classificacao.nota}</td>
                        <td>{classificacao.nota}</td>
                        <td>{classificacao.comentario}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            )}
        </div>
    )
}