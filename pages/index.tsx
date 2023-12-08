import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <div className={cx("main")}>
        <div className={cx("header")}>
          <div className={cx("nav")}>
            <Link href="/">
              <Image
                src="/images/linkbrary.svg"
                alt="소개 이미지"
                className={cx("hero-image")}
                width={133}
                height={24}
              />
            </Link>
            <Link href="/signin">
              <div className={cx("gradient-link", "signin")}>로그인</div>
            </Link>
          </div>
          <div className={cx("head-container")}>
            <h1 className={cx("head-title")}>
              <span>
                <span className={cx("head-title-gradient")}>
                  세상의 모든 정보
                </span>
                를<br />
              </span>
              <span>쉽게 저장하고</span>
              <span>관리하세요</span>
            </h1>
            <Link href="/signin">
              <div className={cx("gradient-link", "signup")}>링크 추가하기</div>
            </Link>
            <img
              src="./images/hero.png"
              className={cx("hero-image")}
              alt="소개이미지"
            />
          </div>
        </div>
        <div className="section">
          <div className={cx("link save")}>
            <div className={cx("text-container")}>
              <h2 className={cx("main-text")}>
                <span className={cx("section-gradient-1")}>원하는 링크</span>를
                <br />
                저장하세요
                <br />
              </h2>
              <p>
                나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
                싶은 모든 것을 한 공간에 저장하세요.
              </p>
            </div>
            <div className="image-wrapper">
              <img
                src="./images/image1.png"
                className="save-image"
                alt="링크이미지"
              />
            </div>
          </div>
          <div className="link admin">
            <div className="image-wrapper">
              <img
                src="./images/image2.png"
                className="admin-image"
                alt="관리이미지"
              />
            </div>
            <div className="text-container">
              <h2 className="main-text">
                링크를 폴더로
                <br />
                <span className="section-gradient-2">관리</span>하세요
                <br />
              </h2>
              <p>
                나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
              </p>
            </div>
          </div>
          <div className="link share">
            <div className="text-container">
              <h2 className="main-text">
                저장한 링크를
                <br />
                <span className="section-gradient-3">공유</span>해 보세요
              </h2>
              <p>
                여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구,
                동료들에게 쉽고 빠르게 링크를 공유해 보세요.
              </p>
            </div>
            <div className="image-wrapper">
              <img
                src="./images/image3.png"
                className="share-image"
                alt="공유이미지"
              />
            </div>
          </div>
          <div className="link search">
            <div className="image-wrapper">
              <img
                src="./images/image4.png"
                className="search-image"
                alt="검색이미지"
              />
            </div>
            <div className="text-container">
              <h2 className="main-text">
                저장한 링크를
                <br />
                <span className="section-gradient-4">검색</span>해 보세요
              </h2>
              <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
            </div>
          </div>
        </div>
        <footer>
          <div className="copyright">©codeit - 2023</div>
          <div className="explain">
            <Link href="./privacy.html"> privacy policy</Link>
            <Link href="./faq.html">FAQ</Link>
          </div>
          <div className="sns-logo">
            <Link href="https://www.facebook.com/" target="_blank">
              <img src="./images/facebook.svg" alt="facebook logo" />
            </Link>
            <Link href="https://twitter.com/" target="_blank">
              <img src="./images/twitter.svg" alt="twitter logo" />
            </Link>
            <Link href="https://www.youtube.com/" target="_blank">
              <img src="./images/youtube.svg" alt="youtube logo" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <img src="./images/instagram.svg" alt="instagram logo" />
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}

{
  /*
// 랜딩페이지 옮겨오기 (6주차 템플릿이든 어디든)
// img 태그를 이미지 컴포넌트로 바꾸기 fill or (width, height)
// a 태그를 Link 컴포넌트 바꾸기
*/
}
