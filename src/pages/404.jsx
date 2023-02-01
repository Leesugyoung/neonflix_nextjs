export default function NotFound404() {
  return (
    <div>
      <span>
        <h1>❗404 Error - Page Not Found</h1>
        <h2>Address not found. Please check the exact address.</h2>
      </span>
      <style jsx>{`
        div {
          height: 100vh;
          background-color: #181818;
        }
        span {
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        h1,
        h2 {
          color: #fff;
        }
        h2 {
          margin-top: 10px;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
}
