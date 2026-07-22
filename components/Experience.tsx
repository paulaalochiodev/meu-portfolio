export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-[1750px] px-6 py-14">
          <h2 className="text-3xl font-black tracking-tight">experiência</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-lime-400">
              <span className="text-sm font-bold text-lime-400">
                produto & gestão
              </span>

              <h3 className="mt-2 text-xl font-bold">Product Owner</h3>

              <p className="mt-3 text-sm text-zinc-300">
                Experiência com visão de produto, priorização de backlog, levantamento
                de requisitos, comunicação com stakeholders e acompanhamento de entregas.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-lime-400">
              <span className="text-sm font-bold text-lime-400">
                transição técnica
              </span>

              <h3 className="mt-2 text-xl font-bold">Desenvolvimento Full Stack</h3>

              <p className="mt-3 text-sm text-zinc-300">
                Formação e prática em JavaScript, TypeScript, React, Next.js, Node.js,
                APIs, banco de dados, versionamento e boas práticas de desenvolvimento.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-lime-400">
              <span className="text-sm font-bold text-lime-400">
                projetos práticos
              </span>

              <h3 className="mt-2 text-xl font-bold">Aplicações Web</h3>

              <p className="mt-3 text-sm text-zinc-300">
                Criação de interfaces responsivas, organização de componentes, consumo
                de APIs, modelagem de dados e construção de soluções web completas.
              </p>
            </article>
          </div>
        </section>
  );
}