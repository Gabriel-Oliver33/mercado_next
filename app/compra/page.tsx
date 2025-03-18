"use client";

import React, { useEffect, useState } from "react";
import Styles from "./styles.module.css";
import Header from "../components/header/page";
import { useRouter } from 'next/navigation';

interface Compra {
  id_compra: number;
  id_fornecedor: number;
  data_compra: string;
  valor_total: number;
}

export default function Compra() {
  const [compras, setCompras] = useState<Compra[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const response = await fetch("/api/compra");
        if (!response.ok) {
          throw new Error("Erro ao buscar compras.");
        }
        const data = await response.json();
        setCompras(data.compras);

      } catch (error) {
        setError("Erro ao carregar compras.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompras();
  }, []);

  return (
    <div className={Styles.conteiner}>
      <Header />

      <h1 className={Styles.heading}>Lista de Compras</h1>
      <button className={Styles.cadastrarButton} onClick={() => router.push('/cadastrarCompra')}>
        Cadastrar Compra
      </button>

      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className={Styles.error}>{error}</p>
      ) : compras.length === 0 ? (
        <p>Nenhuma compra cadastrado.</p>
      ) : (
        <table className={Styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>ID do Fornecedor</th>
              <th>Data da Compra</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {compras.map((compra) => (
              <tr key={compra.id_compra}>
                <td>{compra.id_compra}</td>
                <td>{compra.id_fornecedor}</td>
                <td>{compra.data_compra}</td>
                <td>R$ {compra.valor_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
