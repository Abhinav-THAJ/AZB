'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface StoreImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src?: string | null;
  alt?: string;
  aspectRatio?: '1/1' | '4/3' | '16/9' | '16/10' | '16/7' | '3/1' | 'auto';
  fallback?: string;
  containerClassName?: string;
}

export default function StoreImage({
  src,
  alt = 'AZB Store Image',
  aspectRatio = 'auto',
  fallback,
  containerClassName = '',
  className = '',
  fill = true,
  ...props
}: StoreImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Determine if we have a valid image source to show
  const hasValidSrc = src && !error;
  
  // Calculate padding bottom based on aspect ratio to maintain the placeholder shape
  const getAspectRatioPadding = () => {
    switch (aspectRatio) {
      case '1/1': return '100%';
      case '4/3': return '75%';
      case '16/9': return '56.25%';
      case '16/10': return '62.5%';
      case '16/7': return '43.75%';
      case '3/1': return '33.33%';
      default: return '100%'; // Default to square if not specified
    }
  };

  const isAutoRatio = aspectRatio === 'auto';
  
  // Base container styles
  const containerStyle = isAutoRatio ? {} : { 
    position: 'relative' as const, 
    width: '100%',
    paddingBottom: getAspectRatioPadding(),
    overflow: 'hidden',
    backgroundColor: 'var(--color-neutral-100, #f3f4f6)',
  };

  return (
    <div 
      className={`store-image-container ${containerClassName}`} 
      style={isAutoRatio ? { position: 'relative', width: '100%', height: '100%', backgroundColor: 'var(--color-neutral-100, #f3f4f6)' } : containerStyle}
    >
      {!hasValidSrc ? (
        <div className="store-image-placeholder" style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-neutral-400, #9ca3af)',
          border: '1px dashed var(--color-neutral-300, #d1d5db)',
          padding: '1rem',
          textAlign: 'center'
        }}>
          {fallback ? (
            // If fallback provided, try to load it
            <Image 
              src={fallback} 
              alt={alt} 
              fill={fill}
              className={className}
              style={{ objectFit: 'cover' }}
              {...props} 
            />
          ) : (
            // Elegant placeholder
            <>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '0.5rem', opacity: 0.5 }}>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <span style={{ fontSize: '0.875rem', fontWeight: 500, opacity: 0.7 }}>Image coming soon</span>
            </>
          )}
        </div>
      ) : (
        <>
          {loading && (
            <div className="store-image-skeleton" style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'var(--color-neutral-200, #e5e7eb)',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }} />
          )}
          <Image
            src={src}
            alt={alt}
            fill={fill}
            className={`store-image-content ${className} ${loading ? 'opacity-0' : 'opacity-100'}`}
            style={{ 
              objectFit: 'cover',
              transition: 'opacity 0.3s ease-in-out',
            }}
            onLoad={() => setLoading(false)}
            onError={() => setError(true)}
            {...props}
          />
        </>
      )}
    </div>
  );
}
