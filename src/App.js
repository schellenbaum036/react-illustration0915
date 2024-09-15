import React, { useEffect, useRef } from "react";
import "./App.css";
import backgroundImage from "./images/shinbashi.jpg";

const App = () => {
  const diagramRef = useRef(null);

  useEffect(() => {
    const diagram = diagramRef.current;
    const items = diagram.querySelectorAll(".diagram-item");

    const animate = () => {
      items.forEach((item, index) => {
        const angle =
          (Date.now() * 0.001 + index * (Math.PI / 2)) % (Math.PI * 2);
        const radius = 50;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const scale = 1 + Math.sin(Date.now() * 0.002 + index) * 0.1;

        item.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="app">
      <header>
        <h1>9/15 記憶が蘇り、頭を駆け巡る日報</h1>
      </header>
      <div
        className="diagram"
        ref={diagramRef}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="emoji-snow">👔</div>
        <div className="emoji-snow">🍶</div>
        <div className="emoji-snow">🚂</div>
        <div className="emoji-snow">✨</div>
        <div className="emoji-snow">👔</div>
        <div className="emoji-snow">🍶</div>
        <div className="emoji-snow">🚂</div>
        <div className="emoji-snow">✨</div>
        <div className="emoji-snow">👔</div>
        <div className="emoji-snow">🍶</div>
        <div className="emoji-snow">🚂</div>
        <div className="emoji-snow">✨</div>
        <div className="diagram-item" data-index="0">
          <h2 style={{ color: "blue" }}>できた</h2>
          <p>Reactの継続学習とVercelの仕様確認</p>
        </div>
        <div className="diagram-item" data-index="1">
          <h2 style={{ color: "red" }}>学び</h2>
          <p>Reactの深い理解とVercelでのデプロイ体験</p>
        </div>
        <div className="diagram-item" data-index="2">
          <h2 style={{ color: "darkturquoise" }}>次にすること</h2>
          <p>さらなるReactの探求と実践</p>
        </div>
        <div className="diagram-item" data-index="3">
          <h2 style={{ color: "pink" }}>babubabu</h2>
          <p>新橋での懐かしい学習体験の回顧</p>
        </div>
      </div>
      <div className="report">
        <h2>【9/15　日報】</h2>
        <p>
          皆様お疲れ様です❗
          <br />
          本日の日報です✨
        </p>
        <h3 style={{ color: "blue" }}>できた</h3>
        <p>
          ・昨日に引き続きReact
          <br />
          ・Vercelについての仕様確認とTerminalでのコマンド操作
        </p>
        <h3 style={{ color: "red" }}>学び</h3>
        <p>
          昨日からReactそのものをいじり始めました。ついにHTMLに読み込む以外の方法で公開できるようになったので、更にいろいろ試そうと計画👀Vercelを使ってのデプロイはとても簡単ですが、もし本物のサーバーへのデプロイならどうなんでしょう？等色々気になることが盛り沢山。冒険はまだまだ続きそうです✨
        </p>
        <h3 style={{ color: "darkturquoise" }}>次にやること</h3>
        <p>もう、このまま突き進む！</p>
        <h3 style={{ color: "pink" }}>babubabu</h3>
        <p>
          巷では三連休の二日目✨今日はいつものコワーキングスペースがイベント貸し切りのため使えなくなっているので、気分転換を兼ねて東京・新橋までやってきました。
          <br />
          ここはかつて東品川まで片道2時間半という罰ゲームのような通勤をしていた頃、すこしでも学習時間をひねり出すために借りていたコワーキングスペースがあります。あの当時に戻りたいとは思いませんが、いろんなことを勉強して「このなかから好きなことを見つけて突き進んでやるぞ❗」という気持ちで学習に勤しみ、会社を辞める決心を固めつつあったあの頃の記憶が蘇ります。
          <br />
          極稀にですが、あえてここに来ることもあります😊
          <br />
          <br />
          新橋といえばネクタイを頭に巻いた酔っぱらいのイメージが有りましたが、そういえば通っていた当時も含めて一度もお目にかかったことがないですね👀
        </p>
      </div>
    </div>
  );
};

export default App;
