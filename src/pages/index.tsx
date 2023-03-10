import Seo from "@/components/Seo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import main from "../styles/main.module.css";

interface IMovieProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: [number];
  release_date: string;
}

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const onClick = (id: number, title: string) => {
    router.push({
      pathname: `/movies/${title}/${id}`,
    });
  };
  return (
    <>
      <Seo title="Home" />
      <div className={main.container}>
        <Link
          href={`/movies/${results[0].title}/${results[0].id}`}
          legacyBehavior
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500${results[0].backdrop_path}`}
            alt="results[0].backdrop_pathh"
            width={540}
            height={310}
            priority
            quality={100}
          />
        </Link>
        <div className={main.gradient} />
        <div className={main.banner_Title}>
          <a onClick={() => onClick(results[0].id, results[0].original_title)}>
            {results[0].title}
          </a>
        </div>
        <div className={main.banner_minititle}>
          <span>{results[0].release_date.substring(0, 4)}</span>
          <span>
            ⭐ {results[0].vote_average ? results[0].vote_average : "0"}
          </span>
        </div>
        <div className={main.Trending}>Trending Now</div>
        <div className={main.gird_container}>
          {results?.map((movie: IMovieProps, index: number) => {
            if (index !== 0) {
              return (
                <Link
                  href={`/movies/${movie.original_title}/${movie.id}`}
                  key={movie.id}
                  legacyBehavior
                >
                  <a onClick={() => onClick(movie.id, movie.original_title)}>
                    <div className={main.grid_Itemlist}>
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt="Movie poster_path"
                        width={230}
                        height={345}
                        priority
                      />
                      <div className={main.Info}>
                        <div className={main.Info_title}>
                          {movie.title || movie.original_title}
                          <h4 className={main.Info_average}>
                            ⭐ {movie.vote_average ? movie.vote_average : "0"}
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

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`https://neonflix-nextjs-app.vercel.app/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
