import Link from "next/link";


export default function Layout({ children }) {
    return (
        <div className="flex flex-col justify-between item-center shadow-sm">
            <div className="text-center justify-between item-center shadow-sm">
                <Link href="/">
                    <a className="mx-2 text-black">Home</a>
                </Link>
                <Link href="/contact_us">
                    <a className="mx-2 text-black"> Contact Us</a>
                </Link>
                <Link href="/ratings">
                    <a className="mx-2 text-black"> Beach Ratings</a>
                </Link>
            </div>
            {children}
        </div>
    );

}