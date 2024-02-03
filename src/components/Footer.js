import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>

                <Link href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <svg class="bi me-2" width="40" height="32"></svg>
                </Link>

                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
                    <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Features</Link></li>
                    <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Pricing</Link></li>
                    <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">FAQs</Link></li>
                    <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">About</Link></li>
                </ul>
            </footer>
        </div>
    )
}
