// src/components/YandexAd.jsx
const YandexAd = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <!-- Yandex.RTB R-A-16091462-1 -->
          <div id="yandex_rtb_R-A-16091462-1"></div>
          <script>
            window.yaContextCb = window.yaContextCb || [];
            window.yaContextCb.push(() => {
              Ya.Context.AdvManager.render({
                blockId: "R-A-16091462-1",
                renderTo: "yandex_rtb_R-A-16091462-1"
              });
            });
          </script>
        `,
      }}
    />
  );
};

export default YandexAd;
