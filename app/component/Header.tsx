
import Link from 'next/link';
import  React from 'react';


function Header() {
    return (
        <div  >
       
<Link href="/"> Home </Link> 
<Link href="/About">About </Link>
<Link href ="/Contact">Contact</Link>

        </div>
 )
}
export default Header