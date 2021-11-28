import { PropsWithChildren } from 'react';
import Image from 'next/image';

export default function ProfileImage({ src }: PropsWithChildren<{ src: string | StaticImageData }>) {
  return (
    <div className="pb-3 text-md-end text-center">
      <Image src={src} alt="Profile" className="rounded-full" height='320' width='320'/>
    </div>
  );
}
