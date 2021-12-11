
import Link from 'next/link';

function Home(){
    return (
    <div>
        <h1>Home</h1>
        <Link href="/">
            <a>Acessar página Three</a>
        </Link>
        <Link href="/pag"> </Link>

    </div>
    )


}

export default Home