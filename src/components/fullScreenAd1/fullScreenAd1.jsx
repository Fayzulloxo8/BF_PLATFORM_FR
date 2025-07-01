import { useEffect } from "react";

const FullScreenAd1 = () => {
  useEffect(() => {
    // Reklama skriptini yuklash
    const script = document.createElement("script");
    script.src = "https://yandex.ru/ads/system/context.js";
    script.async = true;
    document.body.appendChild(script);

    // Reklama navbatga qo‘shiladi
    window.yaContextCb = window.yaContextCb || [];
    window.yaContextCb.push(() => {
      if (window.Ya && window.Ya.Context && window.Ya.Context.AdvManager) {
        window.Ya.Context.AdvManager.render({
          blockId: "R-A-16091462-5",
          type: "fullscreen",
          platform: "desktop"
        });
      }
    });

    return () => {
      script.remove();
    };
  }, []);

  return null; // Fullscreen reklama DOMda joy olmaydi
};

export default FullScreenAd1;
