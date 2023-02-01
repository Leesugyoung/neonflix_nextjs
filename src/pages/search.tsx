import Seo from "@/components/Seo";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import s from "../styles/search.module.css";

interface IForm {
  keyword: string;
}

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
    }
  ];
}

export default function Search() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<ISearchProps>();
  const { register, handleSubmit } = useForm<IForm>();

  const onValid = async ({ keyword }: IForm) => {
    setKeyword(keyword);
    const data = await (
      await fetch(
        `https://neonflix-nextjs-app.vercel.app/api/search/${keyword}`
      )
    ).json();
    setSearchResults(data);
  };
  const results = searchResults?.results;
  const onClick = (id: number, keyword: string) => {
    router.push({
      pathname: `/search/${id}/${keyword}`,
    });
  };
  return (
    <div className={s.container}>
      <Seo title="Search" />
      <div className={s.searchBar}>
        <svg
          className={s.svgIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#bababa"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </svg>
        <form onSubmit={handleSubmit(onValid)}>
          <input
            className={s.input}
            placeholder="Search here"
            {...register("keyword", { required: true, minLength: 2 })}
          />
        </form>
      </div>
      {/* 검색 후 */}
      {keyword && searchResults ? (
        <div className={s.resutls_container}>
          <div className={s.totalresults}>
            <span>&quot;{results?.length}&quot;</span> Search results
          </div>
          <div className={s.gird_container}>
            {results?.map(list => (
              <Link
                href={`/search/${list.id}/${keyword}`}
                key={list.id}
                legacyBehavior
              >
                <a onClick={() => onClick(list.id, keyword)}>
                  <div className={s.grid_Itemlist}>
                    <Image
                      src={
                        list.poster_path
                          ? `https://image.tmdb.org/t/p/w500${list.poster_path}`
                          : "/noPosterImg.jpg"
                      }
                      alt="search page poster_path"
                      width={230}
                      height={225}
                      priority
                    />
                    <div className={s.Info}>
                      <div className={s.Info_title}>
                        {list.title || list.original_title}
                        <h4 className={s.Info_average}>
                          ⭐ {list.vote_average ? list.vote_average : "0"}
                        </h4>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className={s.noresults}>No Search results</div>
      )}
    </div>
  );
}
