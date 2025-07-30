import React from 'react';

function Contact() {
    return (
        <div className="min-h-screen p-6 bg-white text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
                We'd love to hear from you! Use the form below to get in touch.
            </p>

            <form className="max-w-lg mx-auto text-left bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        placeholder="you@example.com"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        rows="4"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        placeholder="Write your message here..."
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;
