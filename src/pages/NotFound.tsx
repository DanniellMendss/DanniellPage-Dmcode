import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página não encontrada | Daniel Mendes</title>
        <meta name="description" content="A página que você tentou acessar não existe. Volte para o início do portfólio de Daniel Mendes." />
        <meta property="og:title" content="Página não encontrada | Daniel Mendes" />
        <meta property="og:description" content="A página que você tentou acessar não existe. Volte para o início do portfólio de Daniel Mendes." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
