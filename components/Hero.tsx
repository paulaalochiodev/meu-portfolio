export function Hero() {
  return (
    <section
          id="inicio"
          className="mx-auto grid max-w-[1750px] gap-10 px-6 pt-8 pb-15 md:grid-cols-2 md:items-center"
        >
          <div>
            <span className="mb-6 inline-block bg-purple-600 px-3 py-2 text-sm font-bold text-black">
              DESENVOLVEDORA FULL STACK
            </span>

            <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-[81px]">
              transformando ideias em{" "}
              <span className="bg-lime-400 px-2 text-black">soluções</span>{" "}
              digitais escaláveis
            </h1>

            <div className="mt-3 h-2 w-24 rounded-full bg-purple-600" />

            <p className="mt-6 max-w-xl text-lg text-zinc-300">
              Desenvolvedora Full Stack com foco em produtos digitais de alto impacto,
              performance, experiência do usuário e código limpo.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="rounded-md bg-lime-400 px-6 py-4 text-sm font-bold text-black transition hover:bg-lime-300">
                ver projetos
              </a>

              <a
                href="/curriculo.pdf"
                className="rounded-md border border-zinc-700 px-6 py-4 text-sm font-bold text-white transition hover:border-lime-400 hover:text-lime-400">
                ver currículo
              </a>
            </div>
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

            <div className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-purple-600 blur-3xl" />

            <div className="relative flex min-h-80 items-center justify-center">
              <span className="text-8xl font-black text-white">P</span>
            </div>
          </div>
        </section>
  );
}