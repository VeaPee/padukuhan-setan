import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Tentang
      </h1>
      <div className="text-center">
        <p className="text-lg"></p>
      </div>

      {/* <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div> */}

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <h2>Padukuhan Setan</h2>
        <p>
        Padukuhan Setan merupakan salah satu padukuhan yang berada di Kelurahan Wijimulyo, Kec. Nanggulan, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta
        </p>
        <p>
          <Link href="/contact">Hubungi Kami</Link>
        </p>

        <h2>KKN 84 UAJY</h2>
        <p>
          Website ini dibuat oleh KKN 84 Universitas Atma Jaya Yogyakarta yang Diharapkan Bisa Menjadikan Padukuhan Setan Lebih Digital dan Modern.
        </p>
        <p>
          <Link href="https://padukuhan-setan-kkn.vercel.app/kkn">Lihat Detail KKN UAJY</Link>
        </p>
      </div>
    </Container>
  );
}
