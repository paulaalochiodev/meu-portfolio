export function ProfileCards() {
  return (
    <section className="mx-auto max-w-[1750px] px-6 py-14">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-500">
              <h2 className="text-xl font-bold">resumo profissional</h2>

              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                <li>• Experiência em desenvolvimento Full Stack</li>
                <li>• Atuação em projetos web escaláveis</li>
                <li>• Conhecimento em React, TypeScript e Node.js</li>
                <li>• Foco em performance, UX e qualidade de código</li>
              </ul>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-500">
              <h2 className="text-xl font-bold">informações-chave</h2>

              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <p>Localização: Brasil</p>
                <p>Modelo: Remoto / Híbrido</p>
                <p>Senioridade: Júnior / Pleno</p>
                <p>Disponibilidade: Imediata</p>
                <p>Foco: Full Stack Web</p>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-500">
              <h2 className="text-xl font-bold">formação & certificações</h2>

              <div className="mt-4 space-y-4 text-sm text-zinc-300">
                <p>
                  <strong className="text-lime-400">Graduação</strong>
                  <br />
                  Análise e Desenvolvimento de Sistemas
                </p>

                <p>
                  <strong className="text-lime-400">Especialização</strong>
                  <br />
                  Arquitetura de Software e Microsserviços
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-500">
              <h2 className="text-xl font-bold">idiomas & soft skills</h2>

              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <p>Português: Nativo</p>
                <p>Inglês: Intermediário</p>
                <p>Espanhol: Básico</p>

                <div className="flex flex-wrap gap-2 pt-3">
                  <span className="rounded border border-zinc-700 px-2 py-1">Comunicação</span>
                  <span className="rounded border border-zinc-700 px-2 py-1">Proatividade</span>
                  <span className="rounded border border-zinc-700 px-2 py-1">Trabalho em equipe</span>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
}