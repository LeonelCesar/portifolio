import { Mail, Phone, Github, Linkedin } from 'lucide-react';

 function Contatos() {
  return (
    <section className="px-4 py-16 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Contato</h1>
      <p className="text-lg text-gray-700 mb-10">
        Estou sempre aberto a novas conexões, projetos desafiadores ou simplesmente boas conversas sobre tecnologia e desenvolvimento pessoal.
        Aqui estão as formas mais diretas de entrar em contacto comigo:
      </p>

      <ul className="space-y-6 text-base">
        <li className="flex items-center space-x-4">
          <Phone className="text-blue-600" />
          <span>+351 936 071 778</span>
        </li>
        <li className="flex items-center space-x-4">
          <Mail className="text-blue-600" />
          <span>leonelcesar62@gmail.com</span>
        </li>
        <li className="flex items-center space-x-4">
          <Linkedin className="text-blue-600" />
          <a
            href="https://www.linkedin.com/in/leonel-c%C3%A9sar-12b456208/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-700"
          >
            linkedin.com/in/leonel-cesar
          </a>
        </li>
        <li className="flex items-center space-x-4">
          <Github className="text-blue-600" />
          <a
            href="https://github.com/LeonelCesar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-700"
          >
            github.com/leonelCesar
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contatos;
