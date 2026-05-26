export function FeaturedProjects() {
  return (
    <section id="projetos" className="mx-auto max-w-[1800px] px-6 py-10">
          <h2 className="text-3xl font-bold">projetos em destaque</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-5">
              <div className="h-40 rounded-md bg-zinc-900" />

              <h3 className="mt-4 text-xl font-bold">ByteBoard</h3>

              <p className="mt-2 text-sm text-zinc-300">
                Dashboard analítico para gestão de projetos com métricas em tempo real.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-5">
              <div className="h-40 rounded-md bg-zinc-900" />

              <h3 className="mt-4 text-xl font-bold">Tripify</h3>

              <p className="mt-2 text-sm text-zinc-300">
                Plataforma de viagens com busca inteligente, filtros avançados e recomendações.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-5">
              <div className="h-40 rounded-md bg-zinc-900" />

              <h3 className="mt-4 text-xl font-bold">Urban Store</h3>

              <p className="mt-2 text-sm text-zinc-300">
                E-commerce moderno e responsivo com foco em performance e conversão.
              </p>
            </article>
          </div>
        </section>
  );
}