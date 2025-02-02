import React from "react";

function Footer() {
  return (
    <div>
      <br />
      <br />
      <footer className="py-16 text-white bg-black rounded footer footer-center">
        {/* Footer Content */}
        <div className="container flex flex-wrap items-start justify-between mx-auto">
          {/* Company Section */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-6 text-lg font-bold">Company</h3>
              <ul>
                <li className="mb-2 no-underline link">About</li>
                <li className="mb-2 no-underline link">Pricing</li>
                <li className="mb-2 no-underline link">Blogs & Journals</li>
                <li className="mb-2 no-underline link">Case Studies</li>
                <li className="mb-2 no-underline link">Contact</li>
                <li className="mb-2 no-underline link">Abuse Report</li>
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="mb-6 text-lg font-bold">Services</h3>
              <ul>
                <li className="mb-2 no-underline link">On-Boarding</li>
                <li className="mb-2 no-underline link">Customer Support</li>
                <li className="mb-2 no-underline link">Migration</li>
                <li className="mb-2 no-underline link">User Guide</li>
                <li className="mb-2 no-underline link">Integration</li>
                <li className="mb-2 no-underline link">Compare</li>
              </ul>
            </div>

            {/* Compare Subsection */}
            <div>
              <h3 className="mb-6 text-lg font-bold">Compare</h3>
              <ul>
                <li className="mb-2 no-underline link">Affise vs Vedhaka</li>
                <li className="mb-2 no-underline link">Cake vs Vedhaka</li>
                <li className="mb-2 no-underline link">HasOffers vs Vedhaka</li>
                <li className="mb-2 no-underline link">Voluum vs Vedhaka</li>
              </ul>
            </div>

            {/* Product Section */}
            <div>
              <h3 className="mb-6 text-lg font-bold">Product</h3>
              <ul>
                <li className="mb-2 no-underline link">
                  Affiliate Marketing Tracking Software
                </li>
                <li className="mb-2 no-underline link">
                  Automated Affiliate Marketing
                </li>
                <li className="mb-2 no-underline link">
                  Fraud Detection Software
                </li>
                <li className="mb-2 no-underline link">White Label Software</li>
                <li className="mb-2 no-underline link">
                  Mobile Attribution Platform
                </li>
                <li className="mb-2 no-underline link">
                  Affiliate Marketing Software
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Social Media */}
        <nav className="mt-8">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="34"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" // Facebook logo
                alt="Facebook Logo"
                className="w-auto h-8"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" // LinkedIn logo
                alt="LinkedIn Logo"
                className="w-auto h-8"
              />
            </a>

            {/* Instagram Icon Link */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" // Example of a multicolor Instagram logo
                alt="Instagram Logo"
                className="w-auto h-8"
              />
            </a>
            {/* Youtube Icon Link */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                alt="Instagram Logo"
                className="w-auto h-8"
              />
            </a>
          </div>
        </nav>

        {/* Languages Section at Bottom Left */}

        {/* Footer Bottom */}
        <aside className="mt-8 text-center text-gray-400">
          <p>Copyright © 2024 - All rights reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
