export default function ErrorPage () {
  return (
    <div>
      <span>
        <h1>❗500 Error - Internal Server Error.</h1>
        <h2>{errorMessage}</h2>
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

ErrorPage.getInitialProps = ({ res, err }) => {
  const errorMessage =
    (res && res.statusCode) || (err && err.message) || 'An unknown error has occurred';
  return { errorMessage };
};