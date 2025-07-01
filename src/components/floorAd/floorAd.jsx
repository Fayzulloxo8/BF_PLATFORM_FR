import { useEffect } from "react";

const FloorAd = () => {
  useEffect(() => {
    // Skriptni dinamik yuklash
    const script = document.createElement("script");
    script.src = "https://yandex.ru/ads/system/context.js";
    script.async = true;
    document.body.appendChild(script);

    // Yandex reklama funksiyasini navbatga qo‘shish
    window.yaContextCb = window.yaContextCb || [];
    window.yaContextCb.push(() => {
      if (window.Ya && window.Ya.Context && window.Ya.Context.AdvManager) {
        window.Ya.Context.AdvManager.render({
          blockId: "R-A-16091462-2",
          type: "floorAd",
          platform: "desktop",
        });
      }
    });

    return () => {
      // Komponent o‘chirilsa tozalash
      script.remove();
    };
  }, []);

  return (
    // Bu divga reklama joylashadi
    <div id="yandex_rtb_R-A-16091462-2"></div>
  );
};

export default FloorAd;
