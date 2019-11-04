const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");

(async () => {
  const files = await imagemin(["img/*.{png}"], {
    destination: "compressed-images",
    plugins: [
      imageminPngquant({
        quality: [0.5, 0.6]
      })
    ]
  });
})();