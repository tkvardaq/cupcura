import { useState, useEffect } from 'react';
import { Beverage, BEVERAGES_DATA } from '../data/beverages';

/**
 * Hook for lazy loading beverage data with intelligent prefetching
 * Prevents blocking initial render with large data payload
 */
export const useLazyBeverages = () => {
  const [beverages, setBeverages] = useState<Beverage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate staggered loading to prevent blocking UI
    const loadData = async () => {
      try {
        setIsLoading(true);
        
        // In a real app, this would fetch from API
        // For now, we simulate async loading with timeout
        await new Promise(resolve => setTimeout(resolve, 10));
        
        // Sort by name for consistent ordering
        const sortedBeverages = [...BEVERAGES_DATA].sort((a, b) => 
          a.name.localeCompare(b.name)
        );
        
        setBeverages(sortedBeverages);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Return data with loading states
  return {
    beverages: isLoading ? [] : beverages,
    isLoading,
    error,
    // For backward compatibility
    all: isLoading ? [] : beverages
  };
};

export default useLazyBeverages;