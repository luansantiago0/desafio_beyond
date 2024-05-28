import create from "zustand";

interface Produto {
  id: number;
  lote: string;
  nomeFabrica: string;
  valorProduto: string;
  nomeProduto: string;
}

interface StoreState {
  produtos: Produto[];
  addProduto: (produto: Produto) => void;
  setProduto: (produto: Produto) => void;
  deleteProduto: (id: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  produtos: [],
  addProduto: (produto) =>
    set((state) => ({
      produtos: [...state.produtos, produto],
    })),
  setProduto: (produto) =>
    set((state) => ({
      produtos: state.produtos.map((p) => (p.id === produto.id ? produto : p)),
    })),
  deleteProduto: (id) =>
    set((state) => ({
      produtos: state.produtos.filter((produto) => produto.id !== id),
    })),
}));
