function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Welcome to <span className="text-green-600"> NextGen </span> Solutions
        </h1>
  
        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
          Your partner in innovation—empowering businesses and individuals with cutting-edge, efficient, and scalable system solutions. Whether you're building a new digital experience or enhancing existing workflows, we help you stay ahead in the ever-evolving tech landscape.
        </p>
  
        {/* Additional Context */}
        <p className="mt-4 text-md md:text-lg text-gray-500 max-w-3xl">
          At NextGen Solutions, we specialize in transforming ideas into reality. Our team of experts is dedicated to providing tailored solutions for businesses, ensuring seamless integration of technology that drives efficiency, growth, and success.
        </p>
  
        {/* Call-to-Action Button */}
        <button className="mt-6 px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-md hover:bg-green-700 transition">
          Get Started
        </button>
  
        {/* Additional Supporting Statement */}
        <p className="mt-20 text-gray-500">
          Join us and experience the future of digital transformation today!
        </p>
      </div>
    );
  }
  
  export default Home;
  