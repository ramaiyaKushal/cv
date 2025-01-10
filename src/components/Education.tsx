function Education() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">MS in Computer Science</h3>
              <p className="text-gray-600">Georgia Institute of Technology</p>
            </div>
            <span className="text-gray-500">2023 - Present</span>
          </div>
          <p className="text-gray-700">Specialization in Computing Systems</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">B.Tech in Computer Science</h3>
              <p className="text-gray-600">Previous University</p>
            </div>
            <span className="text-gray-500">2014 - 2018</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;