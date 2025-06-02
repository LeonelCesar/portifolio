function Footer() {
  return (
     <footer className="bg-gray-100 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} MeuPortfólio. Todos os direitos reservados.</p>
        <p>Desenvolvido por Leonel Helder da Costa César</p>
      </div>
    </footer>
  );
}

export default Footer;
