'use client';

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">

            <p>
                &copy; {new Date().getFullYear()} Harmanjeet Singh
            </p>

            <Link
                href="https://github.com/harmannjeetsingh7-ops/"
                target="_blank"
            >
                GitHub
            </Link>

            <Link
                href="https://www.linkedin.com/in/harmanjeet-singh-a16835382/"
                target="_blank"
            >
                LinkedIn
            </Link>

        </footer>
    );
}