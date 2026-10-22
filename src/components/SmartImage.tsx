import { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
}

// An <img> that degrades gracefully to a tasteful gradient if the file is
// missing or fails to load — so a broken photo never breaks the layout.
export function SmartImage({ src, alt, className = '' }: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-deep/40 via-ink2 to-ink ${className}`}
      >
        <span className="font-hand text-lg text-lavender/50">a moment, still loading…</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export default SmartImage;
