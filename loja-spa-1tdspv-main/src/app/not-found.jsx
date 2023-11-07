import Image from "next/image";

export default function NotFound() {
  return (
    <div>
        <h1>OOPS! 404</h1>
        <p>!Not Found</p>
        <div>
            <Image 
            src="https://httpstatusdogs.com/img/404.jpg"
            alt="Cachorro cavando..."
            width={650}
            height={500}
            />
        </div>
    </div>
  )
}
