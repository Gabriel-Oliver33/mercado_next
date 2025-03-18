import { NextResponse, useSearchParams } from "next/server";
const API_URL = "http://ceteia.guanambi.ifbaiano.edu.br:15050/api";

export async function POST(req, res){
    const formData = await req.formData();
    const nome = formData.get('nome');
    const endereco = formData.get('endereco');
    const cidade = formData.get('cidade');

    //response
    return NextResponse.json({nome, endereco, cidade})
}

// Buscar fornecedores
export async function GET() {
  try {
    const response = await fetch(`${API_URL}/fornecedor`);
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Erro ao buscar fornecedor." }), { status: 500 });
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Erro ao conectar à API." }), { status: 500 });
  }
}