import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div>ZakySports.com</div>
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/sports">Sports</a>
                    </li>
                    <li>
                        <a href="/news">Latest News</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
