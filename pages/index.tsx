import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="https://i.postimg.cc/cJKnZr52/IMG-7248.jpg" />
        <meta property="og:title" content="Linkbrary" />
        <meta property="og:description" content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요" />
        <meta property="og:url" content="https://weeklymission-hy.netlify.app/" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
        <Link rel="stylesheet" href="./styles/index.css" />
        <title>Linkbrary</title>
      </Head>
      <body>
    <header>
      <nav>
          <a href="./index.html"><img src="images/logo.svg"></a>
          <a href="signin.html"><div class="gradient-link signin">로그인</div></a>
      </nav>
      <div class="head-container">
        <h1 class="head-title">
          <span>
            <span class="head-title-gradient">세상의 모든 정보</span>를<br>
          </span>
          <span>쉽게 저장하고</span>
          <span>관리하세요</span>
        </h1>
        <a href="signup.html"><div class="gradient-link signup">링크 추가하기</div></a>
        <img src="./images/hero.png" class="hero-image" alt="소개이미지">
      </div>
    </header>
    <section>
      <div class="link save">
        <div class="text-container">
          <h2 class="main-text">
          <span class="section-gradient-1">원하는 링크</span>를<br>
            저장하세요<br>
          </h2>
          <p>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상,
            사고 싶은 옷, 기억하고 싶은 모든 것을
            한 공간에 저장하세요.
          </p>
        </div>
        <div class="image-wrapper">
          <img src="./images/image1.png" class="save-image" alt="링크이미지">
        </div>
      </div>
      <div class="link admin">
        <div class="image-wrapper">
          <img src="./images/image2.png" class="admin-image" alt="관리이미지">
        </div>
        <div class="text-container">
          <h2 class="main-text">
          링크를 폴더로<br>
          <span class="section-gradient-2">관리</span>하세요<br>
          </h2>
          <p>
            나만의 폴더를 무제한으로 만들고
            다양하게 활용할 수 있습니다.
          </p>
        </div>
      </div>
      <div class="link share">
        <div class="text-container">
          <h2 class="main-text">
          저장한 링크를<br>
          <span class="section-gradient-3">공유</span>해 보세요
          </h2>
          <p>
          여러 링크를 폴더에 담고 공유할 수 있습니다.
          가족, 친구, 동료들에게 쉽고 빠르게 링크를
          공유해 보세요.
          </p>
        </div>
        <div class="image-wrapper">
          <img src="./images/image3.png" class="share-image" alt="공유이미지">
        </div>    
      </div>
      <div class="link search">
        <div class="image-wrapper">
          <img src="./images/image4.png" class="search-image" alt="검색이미지">
        </div>
        <div class="text-container">
          <h2 class="main-text">
          저장한 링크를<br>
          <span class="section-gradient-4">검색</span>해 보세요
          </h2>
          <p>
          중요한 정보들을 검색으로 쉽게 찾아보세요.
          </p>
        </div>
      </div>
    </section>
    <footer>
        <div class="copyright">
        ©codeit - 2023
        </div>
        <div class="explain">
          <a href="./privacy.html"> privacy policy</a>
          <a href="./faq.html">FAQ</a>
        </div>
        <div class="sns-logo">
          <a href="https://www.facebook.com/" target="_blank">
            <img src="./images/facebook.svg" alt="facebook logo">
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src="./images/twitter.svg" alt="twitter logo">
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src="./images/youtube.svg" alt="youtube logo">
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="./images/instagram.svg" alt="instagram logo">
          </a>
        </div>
      </div>
    </footer>
  </body>


      {/*
        // 랜딩페이지 옮겨오기 (6주차 템플릿이든 어디든)
        // img 태그를 이미지 컴포넌트로 바꾸기 fill or (width, height)
        // a 태그를 Link 컴포넌트 바꾸기
      */}
    </>
  );
}
