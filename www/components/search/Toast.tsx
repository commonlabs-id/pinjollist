import React, { useState } from 'react';

const Toast = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show ? (
        <span>
          Anda korban Pinjol Ilegal? Hubungi{' '}
          <a href="https://www.bantuanhukum.or.id/web/formulir-pengaduan-pos-korban-pinjaman-online-pinjol/">
            LBH Jakarta
          </a>
          !{' '}
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              setShow(false);
            }}
          >
            (tutup)
          </a>
        </span>
      ) : null}
      <style jsx>
        {`
          span {
            display: block;
            padding: 1rem;
            margin: 3rem auto;
            max-width: 100%;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            background: black;
            color: white;
            text-align: center;
          }
          a {
            color: rgba(255, 255, 255, 0.8);
          }
        `}
      </style>
    </>
  );
};

export default Toast;
