export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-[1750px] px-6 py-14">
      <div className="grid gap-8 rounded-lg border border-zinc-800 bg-zinc-950 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black tracking-tight">sobre mim</h2>

          <p className="mt-4 max-w-2xl text-zinc-300">
            Sou desenvolvedora Full Stack apaixonada por criar produtos digitais que
            resolvem problemas reais. Trabalho com JavaScript, TypeScript, React,
            Next.js, Node.js e tecnologias modernas para entregar soluções escaláveis,
            acessíveis e centradas no usuário.
          </p>
        </div>

        <ul className="grid gap-4 text-sm text-zinc-300">
          <li className="rounded-md border border-zinc-800 bg-black/40 p-4 transition hover:border-lime-400 hover:text-lime-400">
            Foco em performance e escalabilidade
          </li>
          <li className="rounded-md border border-zinc-800 bg-black/40 p-4 transition hover:border-lime-400 hover:text-lime-400">
            Experiência em times ágeis e colaborativos
          </li>
          <li className="rounded-md border border-zinc-800 bg-black/40 p-4 transition hover:border-lime-400 hover:text-lime-400">
            Atenção a UX, acessibilidade e qualidade
          </li>
          <li className="rounded-md border border-zinc-800 bg-black/40 p-4 transition hover:border-lime-400 hover:text-lime-400">
            Código limpo, testável e de fácil manutenção
          </li>
        </ul>
      </div>
    </section>
  );
}