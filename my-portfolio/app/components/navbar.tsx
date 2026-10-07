'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathName: string = usePathname();

    const getLinkClass = (href: string) =>
        pathName === href || pathName.startsWith(href + '/')
            ? 'activeLink'
            : 'inactiveLink';

    return (
        <nav>
            <Link href="/" className="brand">
                <img
                    src="/favicon.ico"
                    alt="Harmanjeet Singh Logo"
                    className="logo"
                />

                <span>Harmanjeet Singh</span>
            </Link>

            <div className="navLinks">
                <Link href="/" className={getLinkClass('/')}>
                    Home
                </Link>

                <Link href="/about" className={getLinkClass('/about')}>
                    About
                </Link>

                <Link href="/projects" className={getLinkClass('/projects')}>
                    Projects
                </Link>

                <Link href="/skills" className={getLinkClass('/skills')}>
                    Skills
                </Link>

                <Link href="/contact" className={getLinkClass('/contact')}>
                    Contact
                </Link>
            </div>
        </nav>
    );
}