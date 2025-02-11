import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    experiencia: 'iniciante'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica para enviar o formulário
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium mb-2">Nome Completo</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
          required
        />
      </div>
      
      <div>
        <label htmlFor="telefone" className="block text-sm font-medium mb-2">Telefone</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
          required
        />
      </div>
      
      <div>
        <label htmlFor="experiencia" className="block text-sm font-medium mb-2">Nível de Experiência</label>
        <select
          id="experiencia"
          name="experiencia"
          value={formData.experiencia}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
        >
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediário</option>
          <option value="avancado">Avançado</option>
        </select>
      </div>
      
      <button
        type="submit"
        className="w-full bg-yellow-500 text-black py-3 px-6 rounded-lg font-bold hover:bg-yellow-400 transition"
      >
        Enviar Inscrição
      </button>
    </form>
  );
} 