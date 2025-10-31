import Image from 'next/image'

export const Footer = () => {
   return (
      <footer className="footer footer-center my-10 mx-[-20px] w-full bg-gray-300 text-gray-800 flex flex-col items-center">
         <Image src={'/screenshot-footer.png'} width={1600} height={651} alt="Hacemos tu proyecto realidad" />
      </footer>
   )
}
