export function Header() {
  return (
    <header className="mx-auto flex max-w-[1750px] items-center justify-between border-b border-zinc-900 px-6 py-6">
      <strong className="text-xl font-bold text-lime-400">
        {"<Paula.dev/>"}
      </strong>

      <nav className="hidden gap-8 text-sm font-medium md:flex">
        <a
          href="#inicio"
          className="border-b-2 border-purple-600 pb-2 text-purple-400 transition hover:text-lime-400"
        >
          início
        </a>
        <a href="#sobre" className="transition hover:text-lime-400">sobre</a>
        <a href="#projetos" className="transition hover:text-lime-400">projetos</a>
        <a href="#experiencia" className="transition hover:text-lime-400">experiência</a>
        <a href="#contato" className="transition hover:text-lime-400">contato</a>
      </nav>

      <a
        href="/curriculo.pdf"
        className="rounded-md border border-lime-400 px-5 py-3 text-sm font-bold text-lime-400 transition hover:bg-lime-400 hover:text-black"
      >
        ver currículo
      </a>
    </header>
  );
}