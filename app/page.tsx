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
          </div>
        </section>

        <section id="tecnologias">Tecnologias</section>
        <section id="projetos">Projetos</section>
        <section id="experiencia">Experiência</section>
        <section id="contato">Contato</section>
      </main>
    </div>
  );
}