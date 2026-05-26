export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <strong className="text-xl font-bold text-lime-400">
          {"<Paula.dev/>"}
        </strong>

        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#inicio">início</a>
          <a href="#sobre">sobre</a>
          <a href="#projetos">projetos</a>
          <a href="#experiencia">experiência</a>
          <a href="#contato">contato</a>
        </nav>

        <a href="/curriculo.pdf" className="rounded-md border border-lime-400 px-5 py-3 text-sm font-bold text-lime-400">
        ver currículo
        </a>  
      </header>

      <main>
        <section
          id="inicio"
          className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center"
        >
          <div>
            <span className="mb-6 inline-block bg-purple-600 px-3 py-2 text-sm font-bold text-black">
              DESENVOLVEDORA FULL STACK
            </span>

            <h1 className="max-w-2xl text-5xl font-black leading-tight md:text-7xl">
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
        
        <section id="sobre" className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-8">
            <h2 className="text-3xl font-bold">sobre mim</h2>

            <p className="mt-4 max-w-2xl text-zinc-300">
              Sou desenvolvedora Full Stack apaixonada por criar produtos digitais que
              resolvem problemas reais. Trabalho com JavaScript, TypeScript, React,
              Next.js, Node.js e tecnologias modernas para entregar soluções escaláveis,
              acessíveis e centradas no usuário.
            </p>

            <ul className="mt-6 grid gap-4 text-sm text-zinc-300 md:grid-cols-2">
              <li>• Foco em performance e escalabilidade</li>
              <li>• Experiência em times ágeis e colaborativos</li>
              <li>• Atenção a UX, acessibilidade e qualidade</li>
              <li>• Código limpo, testável e de fácil manutenção</li>
            </ul>
          </div>
        </section>

        <section id="tecnologias" className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-3xl font-bold">tecnologias</h2>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-md border border-zinc-800 bg-zinc-950 p-4">
              React
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-950 p-4">
              Next.js
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-950 p-4">
              TypeScript
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-950 p-4">
              Node.js
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-950 p-4">
              Tailwind CSS
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-950 p-4">
              PostgreSQL
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-950 p-4">
              Git/GitHub
            </div>
            <div className="rounded-md border border-zinc-800 bg-zinc-950 p-4">
              Vercel
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
              <h2 className="text-xl font-bold">resumo profissional</h2>

              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                <li>• Experiência em desenvolvimento Full Stack</li>
                <li>• Atuação em projetos web escaláveis</li>
                <li>• Conhecimento em React, TypeScript e Node.js</li>
                <li>• Foco em performance, UX e qualidade de código</li>
              </ul>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
              <h2 className="text-xl font-bold">informações-chave</h2>

              <div className="mt-4 space-y-3 text-sm text-zinc-300">
                <p>Localização: Brasil</p>
                <p>Modelo: Remoto / Híbrido</p>
                <p>Senioridade: Júnior / Pleno</p>
                <p>Disponibilidade: Imediata</p>
                <p>Foco: Full Stack Web</p>
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
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

            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
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

        <section id="projetos" className="mx-auto max-w-6xl px-6 py-10">
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

        <section id="experiencia" className="mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-3xl font-bold">experiência</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
              <span className="text-sm font-bold text-lime-400">
                produto & gestão
              </span>

              <h3 className="mt-2 text-xl font-bold">Product Owner</h3>

              <p className="mt-3 text-sm text-zinc-300">
                Experiência com visão de produto, priorização de backlog, levantamento
                de requisitos, comunicação com stakeholders e acompanhamento de entregas.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
              <span className="text-sm font-bold text-lime-400">
                transição técnica
              </span>

              <h3 className="mt-2 text-xl font-bold">Desenvolvimento Full Stack</h3>

              <p className="mt-3 text-sm text-zinc-300">
                Formação e prática em JavaScript, TypeScript, React, Next.js, Node.js,
                APIs, banco de dados, versionamento e boas práticas de desenvolvimento.
              </p>
            </article>

            <article className="rounded-lg border border-zinc-800 bg-zinc-950 p-6">
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

        <section id="contato" className="mx-auto max-w-6xl px-6 py-10">
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
      </main>
    </div>
  );
}