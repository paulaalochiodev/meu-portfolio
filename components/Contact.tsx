export function Contacts() {
  return (
        <section id="contato" className="mx-auto max-w-[1800px] px-6 py-10">
          <div className="rounded-lg border border-zinc-800 bg-gradient-to-r from-purple-950 to-zinc-950 p-8">
            <h2 className="text-3xl font-bold">
              interessada em{" "}
              <span className="text-lime-400">oportunidades</span> full stack
            </h2>

            <p className="mt-3 text-zinc-300">
              Aberta a novos desafios em produtos digitais inovadores.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/curriculo.pdf"
                className="rounded-md bg-lime-400 px-6 py-4 text-sm font-bold text-black"
              >
                baixar currículo
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="rounded-md border border-zinc-700 px-6 py-4 text-sm font-bold text-white"
              >
                ver LinkedIn
              </a>
            </div>

            <p className="mt-6 text-sm font-bold text-lime-400">
              contato@email.com
            </p>
          </div>
        </section>
  );
}