export default function NotFoundPage() {
    return (
      <div className="grid h-screen place-content-center bg-gray-900 px-4 dark:bg-gray-900">
    <div className="text-center">
      <h1 className="text-9xl font-black text-green-200 dark:text-gray-700">404</h1>
  
      <p className="text-2xl font-bold tracking-tight text-green-300 sm:text-4xl dark:text-white">
        Ops! :(
      </p>
  
      <p className="mt-4 text-green-300">Not Found Page!</p>
  
      <a
        href="/"
        className="mt-6 inline-block rounded-sm bg-green-400 px-5 py-3 text-sm font-medium text-white hover:bg-green-500 focus:ring-3 focus:outline-hidden"
      >
        Voltar
      </a>
    </div>
  </div>
    );
  }