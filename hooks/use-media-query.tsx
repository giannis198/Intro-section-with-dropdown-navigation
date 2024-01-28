import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatches = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addListener(updateMatches);

    // Initial check
    setMatches(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeListener(updateMatches);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
