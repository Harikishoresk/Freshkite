
const Homepage = () => {
  return (
    <>
        <div>
          <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">TodoMaster</h1>
        <nav className="space-x-4">
          <a href="#desc" className="hover:text-gray-300">
            Description
          </a>
          
        </nav>
      </header>
      <section
        id="about"
        className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-gray-800 dark:to-gray-700 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold">About TodoMaster</h3>
          <p className="mt-4 text-lg text-gray-100 dark:text-gray-400">
            TodoMaster is designed to make your daily task management as easy
            and efficient as possible. Our mission is to help you stay
            productive and organized.
          </p>
        </div>
      </section>
            <section>
                <h1> Welcome to Todo App</h1>
                <a
            href="/login"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300">
            Get Started
          </a>
            </section>
            <section>
                <h2>About our App</h2>
                <p></p>
            </section>
            <footer className="text-center py-6 bg-gray-900 dark:bg-gray-800 text-gray-400">
        <p> ©️2025 TodoAPP, under progress</p>
      </footer>
        </div>
    </>
    
  )
}

export default Homepage