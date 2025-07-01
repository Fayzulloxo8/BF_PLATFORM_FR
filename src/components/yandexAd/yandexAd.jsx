// src/components/YandexAd.jsx
import { useEffect } from 'react';

const YandexAd = () => {
  useEffect(() => {
    // Har ehtimolga qarshi yaContextCb arrayi mavjudligini tekshiramiz
    window.yaContextCb = window.yaContextCb || [];

    window.yaContextCb.push(() => {
      window.Ya?.Context?.AdvManager?.render({
        blockId: "R-A-16091462-1",
        renderTo: "yandex_rtb_R-A-16091462-1"
      });
    });
  }, []);

  return <div id="yandex_rtb_R-A-16091462-1" />;
};

export default YandexAd;
