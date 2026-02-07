import './App.css'
import Header from './components/Navbar/Header'

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
      <main className="max-w-[1200px] mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Welcome to StoryFlow
        </h2>
      </main>
    </div>
  )
}

export default App
