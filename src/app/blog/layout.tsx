import Image from "next/image";

export default function layout({ children }) {
    return (
        <div>
            <nav>header</nav>
            <video autoPlay muted>
                <source src="/videos/video.mp4" type="video/mp4" />
                
                Your  browser does not support the video tag.

            </video>
           
            {children}
            <Image src="https://picsum.photos/200/300" alt='random image' width={200} height={300} />
        </div>
    )
}
