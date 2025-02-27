import Sticker from "../assets/coding.png";
function Services() {
    return (
      <div className="container mx-auto p-6">
        {/* <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Services</h1> */}
        <p className="text-gray-600 text-center mb-10">
          At <span className="font-semibold text-green-600">NextGen Solution</span>, we specialize in developing, maintaining, and optimizing high-quality digital solutions.
          Whether you need a robust **web application**, a seamless **mobile app**, or expert **system maintenance and bug fixing**, we are here to help.
        </p>
  
        {/* Services Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section (Left Side) */}
          <div className="md:w-1/3 flex justify-center">
            <img 
              src={Sticker}
              alt="Coding Sticker"
              className="w-60 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
  
          {/* Text Content (Right Side) */}
          <div className="md:w-2/3 space-y-6">
            {/* Web Application Development */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-600 mb-2">Web Application Development</h2>
              <p className="text-gray-600">
                We build **modern, scalable, and secure web applications** tailored to your business needs. Our goal is to create fast and responsive
                platforms that provide a seamless user experience.
              </p>
            </div>
  
            {/* Mobile Application Development */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-600 mb-2">Mobile Application Development</h2>
              <p className="text-gray-600">
                Our team develops **high-performance mobile apps** for Android and iOS, ensuring intuitive interfaces and smooth user interactions.
              </p>
            </div>
  
            {/* System Maintenance & Bug Fixing */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-600 mb-2">System Maintenance & Bug Fixing</h2>
              <p className="text-gray-600">
                We provide **ongoing system maintenance, bug fixes, and performance optimizations** to ensure your applications run smoothly and securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  