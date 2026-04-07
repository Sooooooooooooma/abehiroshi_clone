import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="main-area">
      <div className="side_link">
        <p>・トップ</p>
        <p>・映画出演</p>
        <p>・ドラマ出演</p>
        <p>・舞台出演</p>
        <p>・写真集</p>
        <p>・出版本</p>
        <p>・管理者</p>
      </div>

      <div className="main">
        <div className="header">
          <h1>阿部 寛のホームページ </h1>
        </div>
        <div className="content">
          <div className="img_profile">
            <img
              className="img"
              src="https://abehiroshi.la.coocan.jp/abe-top-20190328-2.jpg"
              alt="阿部 寛(あべ ひろし)の写真"
            />
            <p>
              阿部寛（あべ ひろし）
              <br />
              Hiroshi Abe
              <br />
              生年月日 1964年6月22日
              <br />
              血液型A型
              <br />
              プロフィール
            </p>
            <p>
              If you have any enquiries<br></br> regarding my works or would
              <br></br> like to discuss future projects <br></br>with me, please
              do not hesitate<br></br> to contact me at{" "}
              <a href="mailto:info@officea2023.co.jp">
                info@office
                <br />
                a2023.co.jp
              </a>
            </p>
            <br></br>
            <p>
              所属：
              <br />
              株式会社オフィスA
              <br />
              107-0052
              <br />
              東京都港区赤坂9-5-29<br></br>赤坂ロイヤルマンション301<br></br>
              TEL:+81-3-6434-7140<br></br>FAX:+81-3-6434-7141
            </p>
          </div>

          <div className="drama_history_Note">
            <p className="Latest_information">★★★ 最新情報 ★★★</p>
            <hr />
            <p>・ドラマ</p>
            <div className="dramas">
              <a href="https://www.tbs.co.jp/VIVANT_tbs/">『VIVANT』続編」</a>

              <p className="update">2026年放送</p>
              <a href="https://www.netflix.com/jp/title/81607397">
                「Netflixシリーズ「イクサガミ」
              </a>
              <p className="update">2025年11月13日配信</p>
            </div>
            <hr />
            <p>
              当サイトの内容、テキスト、画像等の無断転載・無断使用を固く禁じます。
              <br />
              また、まとめサイト等への引用を厳禁いたします。
              <br />
              お問い合わせはメールでご連絡をお願いいたします。
            </p>
            <p className="red_color">
              ※阿部寛のサイトを名乗る偽サイトの報告が寄せられておりますのでご注意ください。
              <br />
              <span className="black_color">
                ※SNS上で阿部寛を名乗るアカウントがあるといった“なりすまし”の報告が寄せられておりますが、阿部本人は
                一切行っておりませんので、ご注意ください
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
