"use client";
import { useStore } from "@/store/use-store";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ReceberProdutos() {
  const produtos = useStore((state) => state.produtos);
  const deleteProduto = useStore((state) => state.deleteProduto);

  const handleDelete = (id: number) => {
    deleteProduto(id);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center text-white"
      style={{
        background: "linear-gradient(to right, #4b6cb7, #182848)",
      }}
    >
      <div className="w-full h-full p-4">
        <h1 className="text-2xl font-bold mb-4">Detalhes do Produto</h1>
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="flex gap-8 bg-gray-800 p-4 mb-4 rounded-sm"
          >
            <Image
              src="/mapimage.jpg"
              alt="Produto"
              width={100}
              height={398}
              className="object-cover rounded-sm mr-4"
            />

            <div className="border-l-2 pl-4 flex-grow">
              <strong>Lote:</strong> {produto.lote}
              <br />
              <strong>Fábrica:</strong> {produto.nomeFabrica}
              <br />
              <strong>Produto:</strong> {produto.nomeProduto}
              <br />
              <strong>Valor:</strong> R${produto.valorProduto}
              <div className="flex mt-2 mr-2">
                <Button
                  className="bg-red-700 mt-2 mr-4 text-white"
                  onClick={() => handleDelete(produto.id)}
                >
                  Excluir
                </Button>
                <Link href={`/pages/edit-produts-exist?id=${produto.id}`}>
                  <Button className="bg-white mt-2 text-black">Editar</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        <Link className="block mt-4 text-indigo-300 hover:underline" href="/">
          Voltar para a página inicial
        </Link>
        <Link
          className="block mt-4 text-indigo-300 hover:underline"
          href="/pages/create-address"
        >
          Voltar para a página de cadastro de produtos
        </Link>
      </div>
    </div>
  );
}
