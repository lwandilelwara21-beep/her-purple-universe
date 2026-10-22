import { site } from '../data/site';

export function Footer() {
  return (
    <footer className="border-t border-lavender/10 px-5 py-14 text-center sm:px-8">
      <p className="font-hand text-3xl text-lavender">{site.madeWith}</p>
      <p className="mt-3 text-sm text-silver/70">{site.signature}</p>
      <p className="mt-1 text-xs text-silver/40">{site.dateNote}</p>
      <p className="mx-auto mt-6 max-w-md text-[0.7rem] leading-relaxed text-silver/30">{site.imageCreditNote}</p>
    </footer>
  );
}

export default Footer;
