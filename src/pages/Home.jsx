import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggle,
    NavbarCollapse
} from 'flowbite-react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            {/* Navbar */}


            {/* Hero Section */}
            <main className="p-6 text-center bg-gray-50 min-h-[80vh]">
                <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    MyApp is a modern React application built with Flowbite and Tailwind CSS.
                    It’s fast, responsive, and easy to scale.
                </p>

                <div className="flex justify-center mb-6">
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                        alt="Technology"
                        className="rounded-lg shadow-lg w-full max-w-3xl"
                    />
                </div>

                <Link
                    to="/about"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Learn More
                </Link>
            </main>

            {/* Features Section */}
            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-6">Why Choose MyApp?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="font-semibold text-lg mb-2">Fast & Lightweight</h3>
                            <p className="text-sm text-gray-600">
                                Built with performance in mind, ensuring a seamless experience.
                            </p>
                        </div>
                        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="font-semibold text-lg mb-2">Modern UI</h3>
                            <p className="text-sm text-gray-600">
                                Utilizes Tailwind CSS and Flowbite for a sleek and consistent design.
                            </p>
                        </div>
                        <div className="p-4 border rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="font-semibold text-lg mb-2">Easy to Extend</h3>
                            <p className="text-sm text-gray-600">
                                Easily customizable and scalable for any kind of project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600 mt-10">
                © 2025 MyApp. All rights reserved.
            </footer>
        </>
    );
}

export default Home;
