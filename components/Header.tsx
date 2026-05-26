export function Header() {
  return (
    <header className="mx-auto flex max-w-[1750px] items-center justify-between px-6 py-6">
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

      <a
        href="/curriculo.pdf"
        className="rounded-md border border-lime-400 px-5 py-3 text-sm font-bold text-lime-400"
      >
        ver currículo
      </a>
    </header>
  );
}