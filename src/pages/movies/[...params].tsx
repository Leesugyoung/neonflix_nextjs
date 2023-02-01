// url 에 변수를 넣는 방법 : [] -> url is "movies/id"
// [...변수] : catch all url 기능

import Seo from "@/components/Seo";
import Image from "next/image";
import React from "react";
import detail from "../../styles/detail.module.css";

interface IMovieDetailProps {
  id: number;
  backdrop_path: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
}

const MovieDetail: React.FC<{ data: IMovieDetailProps }> = ({ data }) => {
  const sub_Openday = data.release_date
    ? data.release_date.substring(0, 4)
    : "";
  return (
    <div className={detail.container}>
      <Seo title={data.title} />
      <div className={detail.InfoWarp}>
        <span className={detail.backdrop_span}>
          {data.backdrop_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
              alt="movie backdrop_path"
              width={520}
              height={410}
              priority
            />
          ) : (
            <Image
              src={`/notimage.jpg`}
              alt="movie backdrop_path"
              width={520}
              height={410}
            />
          )}
        </span>
        <span className={detail.poster_span}>
          {data.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt="Movie poster_path"
              width={230}
              height={340}
              priority
            />
          ) : (
            <Image
              src={`/noPosterImg.jpg`}
              alt="Movie poster_path"
              width={230}
              height={340}
              priority
            />
          )}
        </span>
        <div className={detail.Info}>
          <div className={detail.title}>{data.title}</div>
          <span className={detail.openday}>
            {sub_Openday ? sub_Openday : "Not Info"}
          </span>
          <span style={{ color: "#c2c2c2" }}>
            ⭐ {data.vote_average ? data.vote_average.toFixed(1) : "Not vote"}
          </span>
          {data.genres ? (
            data.genres.slice(0, 3).map((gen, index) => (
              <span style={{ color: "#c2c2c2" }} key={gen.id}>
                {gen.name}
                {index !== data.genres.slice(0, 3).length - 1 && " ·"}
              </span>
            ))
          ) : (
            <span>not genres</span>
          )}
          <div className={detail.overview}>
            {data.overview ? data.overview : "Not overview."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

export async function getServerSideProps({ params: { params } }: any) {
  const id = params[1];
  const data = await (
    await fetch(`https://neonflix-nextjs-app.vercel.app/api/movies/${id}`)
  ).json();
  return {
    props: {
      data,
    },
  };
}
