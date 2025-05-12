import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 text-gray-800">
  <h1 className="text-4xl font-bold mb-4 text-center">📚 Welcome to <span className='text-primary'>Book Store! :)</span></h1>
  
  <p className="text-lg mb-4 text-center">
    Your one-stop destination for books on programming, recipes, science, general knowledge, and more.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    <div>
      <h2 className="text-2xl font-semibold mb-2">🧠 What We Offer</h2>
      <ul className="list-disc list-inside text-base">
        <li>Free and paid books across multiple categories</li>
        <li>Beginner-friendly guides for Java & C Programming</li>
        <li>Easy-to-follow recipe books for food lovers</li>
        <li>Fun facts & knowledge through science and GK books</li>
      </ul>
    </div>

    <div>
      <h2 className="text-2xl font-semibold mb-2">💻 Built With Love</h2>
      <p className="text-base">
        This site is developed using <strong>React.js</strong>, styled with <strong>Tailwind CSS</strong> and <strong>DaisyUI</strong> for beautiful components and responsiveness.
        The goal is to create an engaging and informative platform for curious minds.
      </p>
    </div>
  </div>

  <div className="mt-6 text-center">
    <p className="text-lg">
      Thanks for visiting. We hope you enjoy your learning journey! ✨
    </p>
  </div>
</div>

    </div>
  )
}

export default About
