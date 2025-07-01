import { useEffect } from "react";

const BannerAd1 = () => {
  useEffect(() => {
    // Skriptni yuklash
    const script = document.createElement("script");
    script.src = "https://yandex.ru/ads/system/context.js";
    script.async = true;
    document.body.appendChild(script);

    // Reklama ko‘rsatish
    window.yaContextCb = window.yaContextCb || [];
    window.yaContextCb.push(() => {
      if (window.Ya && window.Ya.Context && window.Ya.Context.AdvManager) {
        window.Ya.Context.AdvManager.render({
          blockId: "R-A-16091462-4",
          renderTo: "yandex_rtb_R-A-16091462-4"
        });
      }
    });

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div id="yandex_rtb_R-A-16091462-4"></div>
  );
};

export default BannerAd1;
