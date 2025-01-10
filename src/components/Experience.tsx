function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
      
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">Software Development Engineer II</h3>
              <p className="text-gray-600">FactSet Research Systems</p>
            </div>
            <span className="text-gray-500">2020 - 2023</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Led development of market data feed systems</li>
            <li>Optimized data processing pipelines</li>
            <li>Mentored junior developers</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">Software Development Engineer I</h3>
              <p className="text-gray-600">FactSet Research Systems</p>
            </div>
            <span className="text-gray-500">2018 - 2020</span>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Developed real-time market data processing systems</li>
            <li>Implemented data quality monitoring tools</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;