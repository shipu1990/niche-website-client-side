import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div class="content-page-404">
                <div class="title-error">
                    404		</div>
                <div class="sub-title">
                    Oops! That page can't be found.		</div>
                    <p>We're really sorry but we can't seem to find the page you were looking for.	</p>
                 <Link to="/">Back The Homepage	</Link>
            </div>
        </div>
    );
};

export default NotFound;