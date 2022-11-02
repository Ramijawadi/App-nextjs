import Link from 'next/link'
import Image from "next/image"


const Navbar = () => {
    return (

<>


        <nav >

            <div className="logo">
              <h2 className='pos-h2'>App</h2><Image src='/apple.png' width={80} height={60} borderRadius={5} alt='image' /><h2 className='pos2-h2'>Le</h2>
             </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/ramirez">StoreList</Link>

        </nav>
        </>
    );
}

export default Navbar;


