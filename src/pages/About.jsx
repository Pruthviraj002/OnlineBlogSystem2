import React from 'react';

function About() {
    return (
        <div className="min-h-screen p-6 bg-gray-50 text-center">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                MyApp is a modern web application designed to showcase how you can build fast, scalable, and user-friendly UIs using React, Tailwind CSS, and Flowbite.
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto">
                This project is created for learning and demonstration purposes. It includes routing, reusable components, and clean design to help developers get started quickly.
            </p>
        </div>
    );
}

export default About;
