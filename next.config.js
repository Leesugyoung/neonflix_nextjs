/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        // movie(메인) 페이지
        // Rewrites를 사용하면 들어오는 request 경로를 다른 destination 경로에 매핑할 수 있다.
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
        // Rewrites은 URL 프록시 역할을 하고 destination 경로를 mask하여 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보이게 합니다. 반대로 redirects은 새 페이지로 reroute되고 URL 변경 사항을 표시합니다.
      },
      {
        // movie detail 페이지
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
      {
        // series 페이지
        source: "/api/tv",
        destination: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
      },
      {
        // series detail 페이지
        source: "/api/tv/:id",
        destination: `https://api.themoviedb.org/3/tv/:id?api_key=${API_KEY}`,
      },
      {
        // search movie 결과
        source: "/api/search/:keyword",
        destination: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=:keyword&page=1`,
      },
      {
        // search tv 결과
        source: "/api/search/:keyword",
        destination: `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=:keyword&page=1`,
      },
    ];
  },
};

module.exports = nextConfig;
