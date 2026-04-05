import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-white border-t border-gray-100 dark:bg-cardBgDark dark:border-gray-900 text-center">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                    &copy; {new Date().getFullYear()} Muzammil Ibrahim. All rights reserved.
                </p>
                <p className="mt-3 text-sm text-roseTaupe font-medium italic">
                    "Grit, faith, and consistency over hype."
                </p>
            </div>
        </footer>
    );
};

export default Footer;
