function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-12 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
        Olá, sou um desenvolvedor front-end apaixonado por transformar ideias em
        interfaces incríveis.
      </h1>
      <p className="text-lg text-gray-700">
        Após 5 anos a atuar em empresas com equipas remotas
         desenvolvi uma base sólida de
        comunicação, responsabilidade e foco em resultados. Essa vivência
        despertou em mim a clareza de propósito e a coragem para redirecionar
        minha trajetória profissional. Hoje, trago essa maturidade para o
        universo do desenvolvimento web, onde aplico não apenas habilidades
        técnicas em React, Next.js e Tailwind, mas também uma visão humana e
        estratégica. Este portfólio reflete a convergência entre o pensamento
        criativo, o rigor técnico e o autoconhecimento — uma combinação que me
        permite construir soluções modernas, funcionais e emocionalmente
        inteligentes. Projetos como o{" "}
        <span className="font-semibold text-blue-600">FreelaFlow</span>,{" "}
        <span className="font-semibold text-blue-600">Mente Viva</span> e{" "}
        <span className="font-semibold text-blue-600">PetShop</span> são
        exemplos dessa missão em ação.
      </p>
      <a
        href="/projetos"
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Ver projetos
      </a>
    </section>
  );
}

export default Home;
