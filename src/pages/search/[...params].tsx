import Seo from "@/components/Seo";
import Image from "next/image";
import { useEffect } from "react";
import detail from "../../styles/detail.module.css";

interface ISearchProps {
  results: [
    {
      id: number;
      original_title: string;
      overview: string;
      poster_path: string;
      title: string;
      vote_average: number;
      genre_ids: [number];
      release_date: string;
      total_results: number;
      backdrop_path: string;
    }
  ];
}

const SearchDetail: React.FC<{
  id: number;
  data: ISearchProps;
  keyword: string;
}> = ({ data, id, keyword }) => {
  const resultsdata = data.results.find(item => item.id === Number(id));
  const sub_Openday = resultsdata?.release_date
    ? resultsdata.release_date.substring(0, 4)
    : "";
  return (
    <div className={detail.container}>
      <Seo title={keyword} />
      <div className={detail.InfoWarp}>
        <span className={detail.backdrop_span}>
          {resultsdata?.backdrop_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${resultsdata.backdrop_path}`}
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
          {resultsdata?.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500${resultsdata.poster_path}`}
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
      </div>
      <div className={detail.Info}>
        <div className={detail.title}>{resultsdata?.title}</div>
        <span className={detail.openday}>
          {sub_Openday ? sub_Openday : "Not Info"}
        </span>
        <span style={{ color: "#c2c2c2" }}>
          ⭐{" "}
          {resultsdata?.vote_average
            ? resultsdata.vote_average.toFixed(1)
            : "Not vote"}
        </span>

        <div className={detail.overview}>
          {resultsdata?.overview ? resultsdata.overview : "Not overview."}
        </div>
      </div>
    </div>
  );
};

export default SearchDetail;

export async function getServerSideProps({ params: { params } }: any) {
  const id = params[0];
  const keyword = params[1];
  const data = await (
    await fetch(`https://neonflix-nextjs-app.vercel.app/api/search/${keyword}`)
  ).json();
  return {
    props: {
      data,
      id,
      keyword,
    },
  };
}
