'use client';
import React, { } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Grupo(){

    const dados = useSearchParams();
    const nome = dados.get("nome");
    const endereco = dados.get("endereco");
    const cidade = dados.get("cidade");

    return(
        <div>
            <p>nome do cliente: {nome} </p>
            <p>endereço do cliente: {endereco}</p>
            <p>endereço do cliente: {cidade}</p>
        </div>
    )
}