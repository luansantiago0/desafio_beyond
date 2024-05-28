import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/universe.jpg')" }}
    >
      <div className="max-w-md mx-auto p-4 text-center text-white">
        <h1 className="text-2xl font-bold mb-4 font-serif">
          Sistema de Delivery Interplanetário. 🌏
        </h1>
        <p className="mb-6">Clique abaixo para cadastrar um produto:</p>
        <Link
          className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-700 font-semibold"
          href="/pages/create-address"
        >
          Cadastrar Produto
        </Link>
      </div>
    </div>
  );
}
