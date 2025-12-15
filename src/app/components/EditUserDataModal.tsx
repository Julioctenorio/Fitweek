"use client";

import { useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface EditUserDataModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  weight: number | string;
  height: number | string;
}

const getInitialData = (): FormData => {
  if (typeof window === "undefined") {
    return { name: "Usuário", weight: "", height: "" };
  }

  return {
    name: localStorage.getItem("username") || "Usuário",
    weight: localStorage.getItem("weight")
      ? Number(localStorage.getItem("weight"))
      : "",
    height: localStorage.getItem("height")
      ? Number(localStorage.getItem("height"))
      : "",
  };
};

export function EditUserDataModal({ isOpen, onClose }: EditUserDataModalProps) {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>(getInitialData);
  const [originalData] = useState<FormData>(getInitialData);

  const handleSave = () => {
    localStorage.setItem("username", formData.name);
    localStorage.setItem("weight", String(formData.weight));
    localStorage.setItem("height", String(formData.height));
    onClose();
  };

  const handleLogout = () => {
    router.push("/user");
  };

  const hasChanges =
    formData.name !== originalData.name ||
    String(formData.weight) !== String(originalData.weight) ||
    String(formData.height) !== String(originalData.height);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-neutral-800 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Meus Dados</h2>
          <button
            onClick={onClose}
            className="text-3xl leading-none text-gray-400 hover:text-white"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="user-name"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Nome
            </label>
            <input
              id="user-name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-lg bg-neutral-700 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label
              htmlFor="user-weight"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Peso
            </label>
            <div className="relative">
              <input
                id="user-weight"
                type="number"
                step="0.1"
                value={formData.weight}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    weight: e.target.value ? Number(e.target.value) : "",
                  })
                }
                className="w-full rounded-lg bg-neutral-700 px-4 py-3 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                kg
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="user-height"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Altura
            </label>
            <div className="relative">
              <input
                id="user-height"
                type="number"
                step="1"
                value={formData.height}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    height: e.target.value ? Number(e.target.value) : "",
                  })
                }
                className="w-full rounded-lg bg-neutral-700 px-4 py-3 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                cm
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between space-x-3 text-center">
          <Button
            text="Sair"
            onClick={handleLogout}
            width="bg-red-300 inline-flex items-center justify-center leading-none w-16"
          />
          <Button
            text="Cancelar"
            onClick={onClose}
            width="bg-neutral-600 inline-flex items-center justify-center leading-none w-24"
          />
          <Button
            text="Salvar"
            onClick={handleSave}
            disabled={!hasChanges}
          />
        </div>
      </div>
    </div>
  );
}
