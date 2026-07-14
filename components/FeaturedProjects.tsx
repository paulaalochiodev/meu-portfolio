export function FeaturedProjects() {
  return (
    <section id="projetos" className="mx-auto max-w-[1800px] px-6 py-10">
          <h2 className="text-3xl font-bold">projetos em destaque</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-5 transition hover:-translate-y-1 hover:border-purple-500">
              <div className="h-40 rounded-md bg-gradient-to-br from-purple-950 via-zinc-900 to-black" />

              <h3 className="mt-4 text-xl font-bold">ByteBoard</h3>

              <p className="mt-2 text-sm text-zinc-300">
                Dashboard analítico para gestão de projetos com métricas em tempo real.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                <span className="rounded border border-zinc-700 px-2 py-1">Next.js</span>
                <span className="rounded border border-zinc-700 px-2 py-1">TypeScript</span>
                <span className="rounded border border-zinc-700 px-2 py-1">Tailwind</span>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-5 transition hover:-translate-y-1 hover:border-purple-500">
              <div className="h-40 rounded-md bg-gradient-to-br from-lime-950 via-zinc-900 to-black" />

              <h3 className="mt-4 text-xl font-bold">Tripify</h3>

              <p className="mt-2 text-sm text-zinc-300">
                Plataforma de viagens com busca inteligente, filtros avançados e recomendações.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                <span className="rounded border border-zinc-700 px-2 py-1">React</span>
                <span className="rounded border border-zinc-700 px-2 py-1">Node.js</span>
                <span className="rounded border border-zinc-700 px-2 py-1">MongoDB</span>
              </div>
            </article>

            <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-5 transition hover:-translate-y-1 hover:border-purple-500">
              <div className="h-40 rounded-md bg-gradient-to-br from-zinc-800 via-zinc-950 to-purple-950" />

              <h3 className="mt-4 text-xl font-bold">Urban Store</h3>

              <p className="mt-2 text-sm text-zinc-300">
                E-commerce moderno e responsivo com foco em performance e conversão.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
                <span className="rounded border border-zinc-700 px-2 py-1">React</span>
                <span className="rounded border border-zinc-700 px-2 py-1">Node.js</span>
                <span className="rounded border border-zinc-700 px-2 py-1">MongoDB</span>
              </div>
            </article>
          </div>
        </section>
  );
}