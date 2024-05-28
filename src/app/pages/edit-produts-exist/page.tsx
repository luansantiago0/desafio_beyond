"use client";
import React, { useState, useEffect } from "react";
import { useStore } from "@/store/use-store";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface EditarProdutoProps {
  id: number;
}

export default function EditarProduto({ id }: EditarProdutoProps) {
  const [lote, setLote] = useState("");
  const [nomeFabrica, setNomeFabrica] = useState("");
  const [valorProduto, setValorProduto] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const setProduto = useStore((state) => state.setProduto);
  const produtos = useStore((state) => state.produtos);
  const router = useRouter();

  useEffect(() => {
    const produto = produtos.find((p) => p.id === id);
    if (produto) {
      setLote(produto.lote);
      setNomeFabrica(produto.nomeFabrica);
      setValorProduto(produto.valorProduto);
      setNomeProduto(produto.nomeProduto);
    }
  }, [id, produtos]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProduto({
      id,
      lote,
      nomeFabrica,
      valorProduto,
      nomeProduto,
    });
    router.push("/pages/edit-address");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white"
      style={{
        background: "linear-gradient(to right, #4b6cb7, #182848)",
      }}
    >
      <div className="max-w-md mx-auto p-4 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Editar Produto</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="lote" className="block text-white">
              Lote:
            </label>
            <input
              type="text"
              id="lote"
              value={lote}
              onChange={(e) => setLote(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              maxLength={4}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nomeFabrica" className="block text-white">
              Nome da fábrica:
            </label>
            <input
              type="text"
              id="nomeFabrica"
              value={nomeFabrica}
              onChange={(e) => setNomeFabrica(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="valorProduto" className="block text-white">
              Valor do produto:
            </label>
            <input
              type="text"
              id="valorProduto"
              value={valorProduto}
              onChange={(e) => setValorProduto(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nomeProduto" className="block text-white">
              Nome do produto:
            </label>
            <input
              type="text"
              id="nomeProduto"
              value={nomeProduto}
              onChange={(e) => setNomeProduto(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-700"
          >
            Salvar
          </button>
        </form>
        <Link className="block mt-4 text-indigo-300 hover:underline" href="/">
          Voltar para a página inicial
        </Link>
        <Link
          className="block mt-4 text-indigo-300 hover:underline"
          href="/pages/edit-address"
        >
          Voltar para a página de produtos
        </Link>
      </div>
    </div>
  );
}
