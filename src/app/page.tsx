

import Link from "next/link";

export default function Home() {
  return (
   <div>
      <nav >
        <ul>
            <Link href={"/"}><li>Home</li></Link>
           <Link href={"/about"}><li>About</li></Link>
            <Link href={"/services"}><li>Services</li></Link>
           <Link href={"/contact"}><li>Contact</li></Link>
  
        </ul>
       
      </nav>

      HomePage
   </div>
  );
}
