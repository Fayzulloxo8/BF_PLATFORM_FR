// src/components/YandexAd.jsx
import { useEffect } from 'react';

const YandexAd = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      window.yaContextCb = window.yaContextCb || [];
      window.yaContextCb.push(() => {
        Ya.Context.AdvManager.render({
          blockId: "R-A-16091462-1",
          renderTo: "yandex_rtb_R-A-16091462-1"
        })
      });
    `;
    document.body.appendChild(script);
  }, []);

  return <div id="yandex_rtb_R-A-16091462-1" style={{marginTop: '15px'}}></div>;
};

export default YandexAd;
