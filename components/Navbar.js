import Link from 'next/link'
import Image from "next/image"


const Navbar = () => {
    return (

<>


        <nav >

            <div className="logo">
              <Image src='/apple.png' width={80} height={60} borderRadius={5} alt='image' />
             </div>
            <Link href="/">Home</Link>
            <Link href="/about">about</Link>
            <Link href="/contact">contact</Link>
            <Link href="/ramirez">RamiList</Link>

        </nav>
        </>
    );
}

export default Navbar;


