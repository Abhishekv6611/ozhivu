import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import LoadingCards from '../components/LoadingCards';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Random');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [prevPageToken, setPrevPageToken] = useState(null);
  const [currentPageToken, setCurrentPageToken] = useState('');

  const API_KEY = import.meta.env.VITE_GOOGLE_YOUTUBE_KEY;

  const fetchYouTubeVideos = async (query, pageToken = '') => {
  setLoading(true);
  try {
    // Create a cache key based on the query and pageToken
    const cacheKey = `youtube-${query}-${pageToken}`;
    const cachedData = localStorage.getItem(cacheKey);
    
    if (cachedData) {
      // Use the cached results if available
      const data = JSON.parse(cachedData);
      setVideos(data.items || []);
      setNextPageToken(data.nextPageToken || null);
      setPrevPageToken(data.prevPageToken || null);
      setCurrentPageToken(pageToken);
      console.log('Using cached data');
    } else {
      // If no cache, construct the URL for fetching data from YouTube API
      const url = new URL(import.meta.env.VITE_GOOGLE_KEY);
      url.searchParams.append('part', 'snippet');
      url.searchParams.append('q', `${query} podcast`);
      url.searchParams.append('type', 'video');
      url.searchParams.append('maxResults', '8');
      url.searchParams.append('key', API_KEY);
      if (pageToken) {
        url.searchParams.append('pageToken', pageToken);
      }

      const response = await fetch(url.toString());
      const data = await response.json();

      // Save the fetched data in localStorage for caching
      localStorage.setItem(cacheKey, JSON.stringify(data));

      setVideos(data.items || []);
      setNextPageToken(data.nextPageToken || null);
      setPrevPageToken(data.prevPageToken || null);
      setCurrentPageToken(pageToken);
    }
  } catch (error) {
    console.error('Failed to fetch videos', error);
    setVideos([]);
    setNextPageToken(null);
    setPrevPageToken(null);
  } finally {
    setLoading(false);
  }
};


  // Fetch videos when activeTab changes, reset pagination
  useEffect(() => {
    fetchYouTubeVideos(activeTab, '');
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="fixed top-0 left-0 w-full z-50 pt-3 flex justify-center items-center">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <main className="pt-24 px-5">
        {loading ? (
          <LoadingCards />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
              {videos
                .filter((video) => video.id?.videoId)
                .map((video) => (
                  <div
                    key={video.id.videoId}
                    className="w-[300px] rounded "
                  >
                    <iframe
                      className="rounded w-[300px] h-[200px]"
                     src={`https://www.youtube.com/embed/${video.id.videoId}?modestbranding=1&rel=0&showinfo=0`}
                      title={video.snippet.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="pt-2 px-4 pb-3">
                      <p className="text-lg font-semibold">
                        {video.snippet.title.slice(0, 40)}...
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className=" flex justify-center gap-4 mt-8 pb-3">
              <button
                className="cursor-pointer px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                onClick={() => fetchYouTubeVideos(activeTab, prevPageToken)}
                disabled={!prevPageToken || loading}
              >
                Previous
              </button>
              <button
                className="cursor-pointer px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                onClick={() => fetchYouTubeVideos(activeTab, nextPageToken)}
                disabled={!nextPageToken || loading}
              >
                Next
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
