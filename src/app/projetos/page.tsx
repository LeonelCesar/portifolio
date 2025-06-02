function Projetos() {
  const projetos = [
    {
      nome: "FreelaFlow",
      descricao:
        "Dashboard completa para freelancers acompanharem projetos, finanças e produtividade.",
      tecnologias: ["React", "Next.js", "Zustand", "Tailwind", "TypeScript"],
      link: "https://freela-flow-fupc.vercel.app/",
    },
    {
      nome: "Mente Viva",
      descricao:
        "Aplicação interativa baseada na teoria de Augusto Cury para gestão emocional.",
      tecnologias: ["React", "Next.js", "React Hook Form", "Zod"],
      link: "https://mente-viva-two.vercel.app/",
    },
    {
      nome: "PetShop",
      descricao:
        "Gestão de agendamentos e serviços para petshops com painel administrativo.",
      tecnologias: ["React", "Next.js", "Tailwind", "React Query"],
      link: "https://pet-dog-two.vercel.app/",
    },
  ];

  return (
    <section className="py-8 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Meus Projetos</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto) => (
          <div
            key={projeto.nome}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{projeto.nome}</h2>
              <p className="text-gray-700 mb-4">{projeto.descricao}</p>
              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias.map((tec) => (
                  <span
                    key={tec}
                    className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded"
                  >
                    {tec}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={projeto.link}
              className="mt-6 inline-block text-blue-600 font-medium hover:underline"
            >
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
