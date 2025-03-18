'use client'
import React, { useEffect, useState } from 'react';
import Styles from './styles.module.css';
import Header from '../components/header/page';
import { useRouter } from 'next/navigation';


interface Local {
  id_local: number;
  nome: string;
  endereco: string;
}

export default function Local (){
  const [locais, setLocais] = useState<Local[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchLocais = async () => {
      try {
        const response = await fetch("/api/local");
        if (!response.ok) {
          throw new Error("Erro ao buscar locais.");
        }
        const data = await response.json();
        setLocais(data.locais);
      } catch (error) {
        setError("Erro ao carregar locais.");
      } finally {
        setLoading(false);
      }
    };

    fetchLocais();
  }, []);

    return(
        <div className={Styles.conteiner}>
            <Header/>
            <h1 className={Styles.heading}>Lista de Locais</h1>
            <button className={Styles.cadastrarButton} onClick={() => router.push('/cadastrarLocal')}>
              Cadastrar Local
            </button>

            {loading ? (
                <p>Carregando...</p>
            ) : error ? (
                <p className={Styles.error}>{error}</p>
            ) : locais.length === 0 ? (
                <p>Nenhum local cadastrada.</p>
            ) : (
                <table className={Styles.table}>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Endereço</th>
                    </tr>
                </thead>
                <tbody>
                    {locais.map((local) => (
                    <tr key={local.id_local}>
                        <td>{local.id_local}</td>
                        <td>{local.nome}</td>
                        <td>{local.endereco}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            )}
        </div>
    )
}