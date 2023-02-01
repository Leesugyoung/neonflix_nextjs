import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavBar() {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      style={{
        background:
          scrollY < 25
            ? "linear-gradient(to bottom, #141414, rgba(20, 20, 20, 0))"
            : "#141414",
      }}
    >
      <Image
        className="logo"
        src="/N_logo.svg"
        alt="N_logo"
        width={25}
        height={25}
      />
      <div>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Movie</a>
        </Link>
        <Link href="/tv" legacyBehavior>
          <a className={router.pathname === "/tv" ? "active" : "white"}>
            Series
          </a>
        </Link>
        <Link href="/search" legacyBehavior>
          <a className={router.pathname === "/search" ? "active" : "white"}>
            Serach
          </a>
        </Link>
      </div>
      <style jsx global>{`
        nav {
          z-index: 999;
          display: flex;
          position: fixed;
          height: 60px;
          top: 0;
          width: 520px;
          gap: 10px;
          margin: 0 auto;
          flex-direction: row;
          align-items: center;
          padding: 10px 30px;
          justify-content: space-between;
          transition: background-color 0.5s ease;
        }
        .logo {
          max-width: 20px;
        }
        nav a {
          font-weight: 00;
          font-size: 15px;
          color: #e5e5e5;
        }
        .active {
          color: #e51013;
          font-weight: 700;
        }
        nav div {
          display: flex;
          gap: 15px;
        }
      `}</style>
    </nav>
  );
}
