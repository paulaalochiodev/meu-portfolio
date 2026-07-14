export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1800px] flex-col gap-4 px-6 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <strong className="text-xl font-bold text-lime-400">
          {"<Paula.dev/>"}
        </strong>

        <p>© 2026 Paula.dev. Todos os direitos reservados.</p>

        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" className="transition hover:text-lime-400">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" className="transition hover:text-lime-400">
            LinkedIn
          </a>
          <a href="mailto:contato@email.com" className="transition hover:text-lime-400">
            Email
          </a>
        </div>
      </footer>
  );
}