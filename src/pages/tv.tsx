import Seo from "../components/Seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import main from "../styles/main.module.css";

interface ITvProps {
  id: number;
  backdrop_path: string;
  original_name: string;
  overview: string;
  poster_path: string;
  name: string;
  vote_average: number;
  genre_ids: [number];
  first_air_date: string;
}

export default function Series({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const onClick = (id: number, name: string) => {
    router.push({
      pathname: `/tv/${id}/${name}`,
    });
  };
  return (
    <>
      <div className={main.container}>
        <Link href={`/tv/${results[0].id}/${results[0].name}`} legacyBehavior>
          <Image
            src={`https://image.tmdb.org/t/p/w500${results[0].backdrop_path}`}
            alt="results[0].backdrop_path"
            width={520}
            height={310}
            priority
            quality={100}
          />
        </Link>
        <div className={main.gradient} />
        <div className={main.banner_Title}>
          <a onClick={() => onClick(results[0].id, results[0].name)}>
            {results[0].name}
          </a>
        </div>
        <div className={main.banner_minititle}>
          <span>{results[0].first_air_date.substring(0, 4)}</span>
          <span>
            ⭐ {results[0].vote_average ? results[0].vote_average : "0"}
          </span>
        </div>
        <div className={main.Trending}>Trending Now</div>
        <div className={main.gird_container}>
          <Seo title="Series" />
          {results?.map((series: ITvProps, index: number) => {
            if (index !== 0) {
              return (
                <Link
                  href={`/tv/${series.id}/${series.name}`}
                  key={series.id}
                  legacyBehavior
                >
                  <a onClick={() => onClick(series.id, series.name)}>
                    <div className={main.grid_Itemlist}>
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                        alt="Movie poster_path"
                        width={230}
                        height={345}
                        priority
                      />
                      <div className={main.Info}>
                        <div className={main.Info_title}>
                          {series.name || series.original_name}
                          <h4 className={main.Info_average}>
                            ⭐ {series.vote_average ? series.vote_average : "0"}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({}: GetServerSideProps) {
  const { results } = await (
    await fetch(`https://neonflix-nextjs-app.vercel.app/api/tv`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
