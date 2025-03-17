"use client"
import React, { } from 'react';
import { useRouter } from "next/navigation";
import Styles from './styles.module.css';

export default function Header (){
    const router = useRouter();

    return(
        <div className={Styles.header}>
            <p className={Styles.logo} onClick={() => router.push("/homeScreen")}>Mercado</p>
            <p onClick={() => router.push("/cliente")}>Clientes</p>
            <p onClick={() => router.push("./fornecedor")}>Fornecedores</p>
            <p onClick={() => router.push("./produto")}>Produtos</p>
            <p onClick={() => router.push("./venda")}>Vendas</p>
            <p onClick={() => router.push("./compra")}>Compras</p>
            <p onClick={() => router.push("./classificacao")}>Classificações</p>
            <p onClick={() => router.push("./local")}>Locais</p>
        </div>
    )
}