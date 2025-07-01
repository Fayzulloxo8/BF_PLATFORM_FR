import React, { useEffect } from 'react';
import "./ad10.scss";

const Ad10 = () => {
    useEffect(() => {
        let isMounted = true;

        function renderAd() {
            if (!isMounted) return;
            
            window.yaContextCb = window.yaContextCb ||  [];
            window.yaContextCb.push(() => {
                Ya.Context.AdvManager.render({
                    blockId: 'R-A-16091462-1', // Yangi blok ID
                    renderTo: 'yandex_rtb_R-A-16091462-1' // Yangi render target
                });
            });
        }

        // Tekshirish Yandex API yuklanganmi yoki script mavjudmi
        if (window.Ya ||  document.getElementById('yandex-context-script')) {
            renderAd();
            return;
        }

        // Yandex context scriptini yuklash
        const script = document.createElement('script');
        script.id = 'yandex-context-script';
        script.src = 'https://yandex.ru/ads/system/context.js';
        script.async = true;

        script.onload = renderAd;
        script.onerror = () => console.error('Yandex context script failed to load');

        document.body.appendChild(script);

        return () => {
            isMounted = false;
            const script = document.getElementById('yandex-context-script');
            if (script) document.body.removeChild(script);
            
            // Reklama konteynerini tozalash
            const adContainer = document.getElementById('yandex_rtb_R-A-16091462-1');
            if (adContainer) adContainer.innerHTML = '';
        };
    }, []);

    return (
        <div id="yandex_rtb_R-A-16091462-1"></div> // Yangi container div
    );
}

export default YandexAd;