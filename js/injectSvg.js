const fetchSvg = (image) => {
   fetch(image.src)
      .then((response) => response.text())
      .then((data) => {
         const span = document.createElement("span");
         span.innerHTML = data;
         const inlineSvg = span.querySelector("svg");
         inlineSvg.setAttribute("id", "instagramIcon");
         if(image.src !== "http://127.0.0.1:5500/assets/instagram.svg") {
            inlineSvg.setAttribute("id", "linkedinIcon");
         };
         image.parentNode.replaceChild(inlineSvg, image);
         return true;
      });
};