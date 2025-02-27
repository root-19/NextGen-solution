function Projects() {
    return (
      <div className="container mx-auto p-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6"></h1>
  
        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-30">
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">40+</h2>
            <p className="text-lg">Total Clients</p>
          </div>
          <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">40+</h2>
            <p className="text-lg">Completed Projects</p>
          </div>
          <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="text-lg">Ongoing Projects</p>
          </div>
          <div className="bg-yellow-600 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">4+</h2>
            <p className="text-lg">Industries Served</p>
          </div>
        </div>
  
        {/* Content Boxes */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Box 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">Innovative Web Solutions</h2>
            <p className="text-gray-600">
              We specialize in developing custom web applications tailored to business needs, providing seamless user experiences and scalable solutions.
            </p>
          </div>
  
          {/* Box 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">Mobile App Development</h2>
            <p className="text-gray-600">
              Our team builds high-performance mobile apps for both Android, ensuring smooth functionality and intuitive design for users.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;
  