// url 에 변수를 넣는 방법 : [] -> url is "movies/id"
// [...변수] : catch all url 기능

import Seo from "@/components/Seo";
import Image from "next/image";
import React from "react";
import detail from "../../styles/detail.module.css";

interface ITvDetailProps {
  id: number;
  backdrop_path: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  original_name: string;
  overview: string;
  poster_path: string;
  name: string;
  vote_average: number;
  first_air_date: string;
}

const SeriesDetail: React.FC<{ data: ITvDetailProps }> = ({ data }) => {
  const sub_Openday = data.first_air_date
    ? data.first_air_date.substring(0, 4)
    : "";
  return (
    <div className={detail.container}>
      <Seo title={data.name} />
      <span className={detail.backdrop_span}>
        {data.backdrop_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt="series backdrop_path"
            width={520}
            height={410}
            priority
          />
        ) : (
          <Image
            src={`/notimage.jpg`}
            alt="series backdrop_path"
            width={520}
            height={410}
            priority
          />
        )}
      </span>
      <span className={detail.poster_span}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt="series poster_path"
          width={230}
          height={340}
          priority
        />
      </span>
      <div className={detail.Info}>
        <div className={detail.title}>{data.name}</div>
        <span className={detail.openday}>
          {sub_Openday ? sub_Openday : "not Info"}
        </span>
        <span>
          ⭐ {data.vote_average ? data.vote_average.toFixed(1) : "Not vote"}
        </span>
        {data.genres ? (
          data.genres.slice(0, 3).map((gen, index) => (
            <span key={gen.id}>
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
  );
};

export default SeriesDetail;

export async function getServerSideProps({ params: { params } }: any) {
  const id = params[0];
  const data = await (
    await fetch(`https://neonflix-nextjs-app.vercel.app/api/tv/${id}`)
  ).json();
  return {
    props: {
      data,
    },
  };
}
