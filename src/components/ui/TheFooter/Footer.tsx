const Footer = () => (
  <footer className="w-full text-center mt-auto flex flex-col items-center">
    <small className="format text-sm">
      &copy; {new Date().getFullYear()} made with 💝 by rezonmain
    </small>
    <small className="format text-sm">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/rezonmain/scared-ape-web"
        className="hover:underline"
      >
        github
      </a>
    </small>
  </footer>
);

export { Footer };
