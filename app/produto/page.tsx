"use client";

import React, { useEffect, useState } from "react";
import Styles from "./styles.module.css";
import Header from "../components/header/page";
import { mockProduto } from "../api/mock/produtoMock"; 
import { useRouter } from 'next/navigation';

interface Produto {
  id_produto: number;
  nome: string;
  descricao: string;
  preco: number;
  quantidade_estoque: number;
}

export default function Produto() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch("/api/produto");
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos.");
        }
        const data = await response.json();
        setProdutos(data.produtos);

      } catch (error) {
        setError("Erro ao carregar produtos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div className={Styles.conteiner}>
      <Header />

      <h1 className={Styles.heading}>Lista de Produtos</h1>
      <button className={Styles.cadastrarButton} onClick={() => router.push('/cadastrarProduto')}>
        Cadastrar Produto
      </button>

      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className={Styles.error}>{error}</p>
      ) : produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <table className={Styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Quantidade em Estoque</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id_produto}>
                <td>{produto.id_produto}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>R$ {produto.preco.toFixed(2)}</td>
                <td>{produto.quantidade_estoque}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
