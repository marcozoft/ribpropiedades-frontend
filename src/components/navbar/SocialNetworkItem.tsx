import Image from 'next/image';
import Link from 'next/link';

type Props = {
   src: string;
   alt: string;
   href: string;
};

export const SocialNetworkItem = ({src, alt, href}: Props) => {
  return (
      <Link href={href}>
         <div className='flex'>
            <Image src={src} alt={alt} height={25} width={25} />
         </div>
      </Link>
  )
}
