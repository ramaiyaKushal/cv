function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Market Data Processing System</h3>
          <p className="text-gray-700 mb-4">
            Developed a high-performance market data processing system handling millions of updates per second.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Java</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Spring Boot</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Kafka</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Data Quality Monitor</h3>
          <p className="text-gray-700 mb-4">
            Built a real-time monitoring system for detecting data quality issues in market feeds.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">FastAPI</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Redis</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;