
const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
] as const;

export default function Home() {
  return (
    <section
      aria-labelledby="home-title"
      className="relative isolate overflow-hidden px-6 py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Front-End Developer
          </p>

          <h1
            id="home-title"
            className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Transformo ideias em
            <span className="block text-blue-600">
              experiências digitais.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Sou desenvolvedor Front-End focado em React,
            TypeScript e Next.js. Desenvolvo interfaces
            modernas, acessíveis e responsivas, com
            atenção à arquitetura, performance e
            qualidade do código.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
            A minha experiência profissional anterior
            fortaleceu competências como comunicação,
            autonomia e responsabilidade. Hoje, aplico
            essa maturidade à resolução de problemas
            através da tecnologia.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/projetos"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              Explorar projetos
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </a>

            <a
              href="/contacto"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 px-6 font-semibold text-slate-800 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              Entrar em contacto
            </a>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-7">
            <p className="mb-4 text-sm font-medium text-slate-500">
              Tecnologias com que trabalho
            </p>

            <ul className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

