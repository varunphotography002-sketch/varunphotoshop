import Image from 'next/image';

export default function HeroImage() {
  return (
    <Image
      src="/optimized/hero-1600.webp"
      alt="Hero photo"
      width={1600}
      height={900}
      priority
      placeholder="blur"
      blurDataURL="/placeholders/hero-blur.webp"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  );
}

