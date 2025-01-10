function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Kushal Atul Ramaiya</h1>
            <h2 className="text-2xl text-gray-600 mb-4">Software Development Engineer</h2>
            <p className="text-gray-600">
              Passionate about building scalable systems and exploring AI/ML
            </p>
          </div>
          <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
            <p>
              Pursuing MS in Computer Science at Georgia Tech, specializing in Computing Systems
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Experience Highlight</h3>
            <p>
              Former SDE II at FactSet, working on Market DataFeed systems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;