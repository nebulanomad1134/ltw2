import React from 'react';
import './Banner.css';

export const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <h1>Buy and sell your books for the best prices</h1>
                <p>Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.</p>
                <div>
                    <input type="search" placeholder="Search a book here" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};
