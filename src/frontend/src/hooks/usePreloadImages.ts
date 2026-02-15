import { useState, useEffect } from 'react';

/**
 * Preloads an array of image URLs and tracks loading state
 * @param imageUrls Array of image URLs to preload
 * @returns Object with loading state and ready flags
 */
export function usePreloadImages(imageUrls: string[]) {
  const [loadedCount, setLoadedCount] = useState(0);
  const [firstImageReady, setFirstImageReady] = useState(false);
  const [allImagesReady, setAllImagesReady] = useState(false);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setAllImagesReady(true);
      setFirstImageReady(true);
      return;
    }

    let mounted = true;
    const images: HTMLImageElement[] = [];
    let loadedImages = 0;

    imageUrls.forEach((url, index) => {
      const img = new Image();
      images.push(img);

      img.onload = () => {
        if (!mounted) return;
        
        loadedImages++;
        setLoadedCount(loadedImages);

        // Mark first image as ready
        if (index === 0) {
          setFirstImageReady(true);
        }

        // Mark all images as ready when complete
        if (loadedImages === imageUrls.length) {
          setAllImagesReady(true);
        }
      };

      img.onerror = () => {
        if (!mounted) return;
        
        loadedImages++;
        setLoadedCount(loadedImages);

        // Still mark as ready even on error to prevent blocking
        if (index === 0) {
          setFirstImageReady(true);
        }

        if (loadedImages === imageUrls.length) {
          setAllImagesReady(true);
        }
      };

      // Start loading
      img.src = url;
    });

    return () => {
      mounted = false;
      // Clean up image references
      images.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  return {
    loadedCount,
    firstImageReady,
    allImagesReady,
    isLoading: !allImagesReady,
  };
}
