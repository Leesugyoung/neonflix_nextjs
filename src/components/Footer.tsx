import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div>
        <span>
          If you&apos;re using it on your PC,
          <Link href="https://leesugyoung.github.io/neonflix/" legacyBehavior>
            <a target="_blank" rel="noreferrer">
              Click here🌐
            </a>
          </Link>
        </span>
        <p>&copy; {new Date().getFullYear()} leesu_Neonflix</p>
      </div>
      <style jsx>{`
        div {
          background-color: #181818;
          text-align: center;
          padding-top: 20px;
          padding-bottom: 10px;
          width: 540px;
          height: 6vh;
          margin: 0 auto;
          position: relative;
          bottom: 0;
        }
        span,
        p {
          color: #8d8d8d;
          font-size: 11px;
        }
        a {
          font-weight: 600;
          margin-left: 5px;
          font-size: 12px;
        }
        @media screen and (max-width: 767px) {
          div {
            height: 80px;
          }
        }
      `}</style>
    </>
  );
}
