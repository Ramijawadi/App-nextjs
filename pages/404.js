
import Link from "next/link";
import { useEffect } from "react";
import {useRouter}  from 'next/router'


const NotFount = () => {
const router = useRouter();


useEffect (()=> {
setTimeout(()=> {
router.push('/')

}, 3000 )
}, [])



    return (  

<div className="not-found">

<h1> Ooooops ...</h1>
<h2> that page can not found.</h2>
<p> Go back to the  <Link href="/">Homepage</Link> </p>

</div>

    );

    } 
export default NotFount;