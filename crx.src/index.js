// 创建按钮
const createBtn = () => {
    const backToTopBtn = document.createElement('div');
    backToTopBtn.setAttribute('id', 'back-to-top');
    backToTopBtn.innerHTML = '<svg t="1648898418623" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4344" width="128" height="128"><path d="M778.94 659.1c-1.3-13.86-4.78-33.96-13.12-61.31-16.49-54.08-63.83-89.67-74.29-97a3.825 3.825 0 0 1-1.56-3.87c3.04-15.68 17.79-104.94-12.94-225.32C646.65 152.62 541 97.64 519.31 87.48c-2.48-1.16-7-2.55-9.45-1.44-10.39 4.73-128.49 58.66-160.88 185.58-30.73 120.37-15.98 209.63-12.94 225.31 0.29 1.48-0.32 3-1.56 3.87-10.47 7.34-57.81 42.92-74.29 97-8.15 26.74-11.66 46.56-13.03 60.38-1.36 13.68 9.38 25.55 23.14 25.55h123.48c0.99 0 1.94 0.38 2.66 1.07l0.19 0.18c0.74 0.71 1.16 1.7 1.17 2.73 0.86 62.99 52.2 113.79 115.39 113.79 63.26 0 114.63-50.9 115.39-113.97 0.01-0.92 0.34-1.81 0.96-2.5 0.73-0.83 1.78-1.3 2.88-1.3h124.03c13.27-0.01 23.73-11.41 22.49-24.63z m-265.9-224.97c-36.52 0-66.12-29.6-66.12-66.12s29.6-66.12 66.12-66.12 66.12 29.6 66.12 66.12-29.6 66.12-66.12 66.12z" p-id="4345" fill="#1296db"></path><path d="M513.04 368.01m-44.14 0a44.14 44.14 0 1 0 88.28 0 44.14 44.14 0 1 0-88.28 0Z" p-id="4346" fill="#1296db"></path><path d="M353.12 830.01c-13.29 0-24.16-10.87-24.16-24.16v-84.77c0-13.29 10.87-24.16 24.16-24.16 13.29 0 24.16 10.87 24.16 24.16v84.77c0 13.29-10.87 24.16-24.16 24.16zM675.68 830.86c-13.29 0-24.16-10.87-24.16-24.16v-84.77c0-13.29 10.87-24.16 24.16-24.16 13.29 0 24.16 10.87 24.16 24.16v84.77c0 13.29-10.88 24.16-24.16 24.16zM513.04 948.69c-13.29 0-24.16-10.87-24.16-24.16v-84.77c0-13.29 10.87-24.16 24.16-24.16 13.29 0 24.16 10.87 24.16 24.16v84.77c0 13.29-10.87 24.16-24.16 24.16z" p-id="4347" fill="#1296db"></path></svg>'
    backToTopBtn.setAttribute('style', 'opacity: 0.6; position: fixed; width: 50px; height: auto; z-index: 2147483647; border: 0px; padding: 0px; min-width: auto; min-height: auto; max-width: none; max-height: none; bottom: 100px; right: 80px; margin: 0px; cursor: pointer;display:none;');
    backToTopBtn.addEventListener('click', onClick);
    return backToTopBtn;
  }
  // 点击事件
  const onClick = () => {
    (function smoothscroll(){
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
           window.requestAnimationFrame(smoothscroll);
           window.scrollTo (0,currentScroll - (currentScroll/5));
      }
    })();
  }
  
  // 把按钮插入文档
  const injectBtn = () => {
    var body = document.querySelector('body');
    body.appendChild(createBtn());
  };
  
  // 监听滚动，大于50px才显示按钮
  window.onscroll = function(e){
    var currentScroll=document.documentElement.scrollTop||document.body.scrollTop;
    var backToTopBtn = document.querySelector('#back-to-top');
    if (currentScroll >50) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  }
  
  injectBtn();