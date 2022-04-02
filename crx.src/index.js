// 创建按钮
const createBtn = () => {
    const backToTopBtn = document.createElement('div');
    backToTopBtn.setAttribute('id', 'back-to-top');
    backToTopBtn.innerHTML = '<svg t="1648898582726" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1768" width="64" height="64"><path d="M751.616 445.44c0-81.92-22.528-158.72-60.416-225.28-39.936-68.608-97.28-125.952-164.864-164.864h-1.024c-8.192-4.096-18.432-5.12-26.624 0C430.08 94.208 372.736 151.552 332.8 220.16c-38.912 66.56-60.416 143.36-60.416 225.28v8.192c-23.552 13.312-45.056 33.792-59.392 57.344-18.432 25.6-28.672 58.368-28.672 94.208 0 38.912 12.288 74.752 33.792 103.424 21.504 29.696 52.224 52.224 87.04 64.512 2.048 1.024 5.12 1.024 8.192 1.024 14.336 0 27.648-11.264 27.648-25.6 0-15.36 4.096-29.696 9.216-41.984l3.072-6.144c4.096 6.144 8.192 12.288 13.312 18.432 12.288 16.384 25.6 31.744 40.96 46.08 5.12 6.144 12.288 9.216 20.48 9.216h168.96c6.144 0 13.312-2.048 18.432-7.168 15.36-14.336 29.696-30.72 43.008-48.128 4.096-6.144 8.192-12.288 13.312-17.408l2.048 6.144c5.12 13.312 8.192 27.648 9.216 41.984 0 2.048 1.024 5.12 1.024 7.168 5.12 14.336 20.48 21.504 33.792 17.408 35.84-12.288 66.56-34.816 88.064-64.512 20.48-28.672 32.768-63.488 33.792-101.376v-2.048c0-34.816-10.24-68.608-28.672-96.256-15.36-23.552-35.84-43.008-60.416-57.344v-5.12l1.024-2.048zM565.248 828.416v56.32c0 9.216 7.168 16.384 16.384 16.384 9.216 0 16.384-7.168 16.384-16.384v-56.32c0-9.216-7.168-15.36-16.384-16.384-9.216 0-16.384 7.168-16.384 16.384z m21.504-394.24c-40.96 40.96-108.544 40.96-149.504 0-40.96-40.96-41.984-108.544 0-149.504 40.96-40.96 108.544-41.984 150.528 0 39.936 40.96 39.936 108.544-1.024 149.504z m-129.024 450.56v-56.32c0-9.216-7.168-16.384-16.384-16.384-8.192 0-16.384 7.168-16.384 16.384v56.32c0 8.192 7.168 15.36 16.384 15.36 9.216 1.024 16.384-6.144 16.384-15.36zM512 813.056c-9.216 0-16.384 7.168-16.384 16.384v128c0 8.192 7.168 15.36 16.384 15.36 9.216 0 16.384-7.168 16.384-16.384v-128c-1.024-9.216-8.192-16.384-16.384-15.36z m70.656-453.632c0 38.912-31.744 70.656-70.656 70.656-38.912 0-70.656-31.744-70.656-70.656 0-38.912 31.744-70.656 70.656-70.656 38.912-1.024 70.656 30.72 70.656 70.656z m0 0" fill="#D81E06" p-id="1769"></path></svg>'
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