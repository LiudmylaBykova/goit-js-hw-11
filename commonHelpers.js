import"./assets/styles-a62dbe5a.js";import{S as u,i as m}from"./assets/vendor-9310f15c.js";const a={form:document.querySelector(".search-form"),input:document.querySelector(".search-inp"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),searchBtn:document.querySelector(".search-btn")},p="https://pixabay.com/api/",h="41834264-e3d0e5d80121a8a176d918e74";a.form.addEventListener("submit",e=>{e.preventDefault();const s=a.form.query.value.trim(),t=`${p}?key=${h}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;d(t).then(r=>{r.hits.length===0&&(y("Sorry, there are no images matching your search query. Please, try again!"),o(!1)),a.gallery.innerHTML=g(r.hits),o(!1),new u(".gallery-item a",{captionsData:"alt",captionDelay:250}),a.form.reset()}).catch(r=>console.error(r))});function d(e){return o(!0),fetch(e).then(s=>{if(!s.ok)throw new Error(s.ststusText);return s.json()})}function g(e){return e.map(({webformatURL:s,largeImageURL:t,tags:r,likes:n,views:l,comments:c,downloads:i})=>`
        <li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${r}"
    />
    <p class="gallery-descr">likes: <span class="descr-span">${n}</span> views: <span class="descr-span">${l}</span> comments: <span class="descr-span">${c}</span> downloads: <span class="descr-span">${i}</span></p>
  </a>
</li>`).join("")}function y(e){m.show({class:"error-svg",position:"topRight",icon:"error-svg",message:e,maxWidth:"432",messageColor:"#fff",messageSize:"16px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0})}function o(e=!0){a.loader.style.display=e?"inline-block":"none",a.searchBtn.disabled=e}
//# sourceMappingURL=commonHelpers.js.map
