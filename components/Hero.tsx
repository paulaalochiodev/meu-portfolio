export function Hero() {
  return (
    <section
          id="inicio"
          className="mx-auto grid max-w-[1750px] gap-10 px-6 py-20 md:grid-cols-2 md:items-center"
        >
          <div>
            <span className="mb-6 inline-block bg-purple-600 px-3 py-2 text-sm font-bold text-black">
              DESENVOLVEDORA FULL STACK
            </span>

            <h1 className="max-w-2xl text-5xl font-black leading-tight md:text-8xl">
              transformando ideias em{" "}
              <span className="bg-lime-400 px-2 text-black">soluções</span>{" "}
              digitais escaláveis
            </h1>

            <p className="mt-6 max-w-xl text-lg text-zinc-300">
              Desenvolvedora Full Stack com foco em produtos digitais de alto impacto,
              performance, experiência do usuário e código limpo.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="rounded-md bg-lime-400 px-6 py-4 text-sm font-bold text-black">
                ver projetos
              </a>

              <a
                href="/curriculo.pdf"
                className="rounded-md border border-zinc-700 px-6 py-4 text-sm font-bold text-white">
                ver currículo
              </a>
            </div>
          </div>

          <div className="min-h-80 rounded-lg border border-zinc-800 bg-zinc-950" />
        </section>
  );
}