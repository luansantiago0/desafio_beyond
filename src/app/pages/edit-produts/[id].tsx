// pages/edit-product.tsx
"use client";
import React from "react";
import { useRouter } from "next/router";
import EditarProduto from "../edit-produts-exist/page";

const EditProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <div>Carregando...</div>;

  return <EditarProduto id={parseInt(id as string, 10)} />;
};

export default EditProductPage;
