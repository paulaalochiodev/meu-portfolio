export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-[1750px] px-6 py-10">
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
  );
}