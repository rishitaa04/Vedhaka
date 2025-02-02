import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Resources() {
    return (
        <>
            <Navbar />
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="max-w-3xl p-6 mx-auto mt-10 bg-gray-100 rounded-lg shadow-lg faq-container">
                <h2 className="mb-6 text-4xl font-semibold text-center text-gray-800">Why Choose Us ??</h2>
                
                <div className="mb-4 faq-item">
                    <div className="text-lg font-medium text-gray-700 question">
                        {/* <span>Why Choose Vedhaka?</span> */}
                    </div>
                    <div className="text-gray-600 answer">
                    {/* <br/> */}
                    <br/>
                        <p><strong>Comprehensive Features:</strong> From tracking to reporting, everything you need is in one place.</p><br/>
                        <p><strong>User-Friendly Design:</strong> Simplified workflows and intuitive interfaces for easy adoption.</p><br/>
                        <p><strong>Customizable Solutions:</strong> Tailor-made to suit your unique business goals.</p><br/>
                        <p><strong>Reliable Support:</strong> Our expert team is available to assist you at every stage.</p><br/>
                        <p><strong>Future-Ready Technology:</strong> Built to adapt to the evolving affiliate marketing landscape.</p>
                    </div>
                </div>
            </div>
            <div className="mt-16 text-center">
                <span className="text-4xl text-pink-500">
                    Vedhaka has the solutions you need to succeed.
                </span>
            </div>

            <Footer />
        </>
    );
}

export default Resources;
