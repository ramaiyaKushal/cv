function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-4">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Email</h4>
                <p className="text-blue-600">kushal.ramaiya@example.com</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700">LinkedIn</h4>
                <a href="#" className="text-blue-600 hover:underline">linkedin.com/in/kushalramaiya</a>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700">GitHub</h4>
                <a href="#" className="text-blue-600 hover:underline">github.com/kushalramaiya</a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <p className="text-gray-700">
              Atlanta, Georgia<br />
              United States
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;