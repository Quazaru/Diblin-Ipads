import '../css/styles.scss';
import '../css/normalize.css';

const blog = document.querySelector('.blog');
const blogTape = document.querySelector('.blog__tape');
const pageBtnsMenu = document.querySelector('.blog__nav')
const pageBtns = document.querySelectorAll('.blog__page-btn');
let postBtnList = document.querySelectorAll('.post__btn');
const blockPost = document.querySelector('.post');
const blogTapeHTML = blogTape.innerHTML;


const startPost = `
<div class="post">
<button class="common-btn post__exit"> << Go back</button>
<div class="post__action">
    <div class="post__info">
        <h3>Dublin’s iphone apps Online Demo</h3>
        <ul>
            <li>29 / may / 2011</li>
            <li>written by : Anonimas</li>
        </ul>
    </div>
    <div class="blog__links">
        <button><img src="img/blog-card/twitter.png" alt="twitter-icon"></button>
        <button><img src="img/blog-card/facebook.png" alt="facebook-icon"></button>
    </div>
</div>

<img src="img/post/preview.png" alt="post-preview" class="post__preview">
<div class="post__description ">
    <p>Lorem ipsum dolor sit amet, consectetuadipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliua. Ut enim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aluip ex ea commodo consequat. Duis aute irure dolor in esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetuadipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliua. Ut enim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aluip ex ea commodo consequat. Duis aute irure dolor in esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetuadipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliua. Ut enim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aluip ex ea commodo consequat. Duis aute irure dolor in esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <ul class="post__ul">
        <h3>Dublin’s iphone apps Online Demo</h3>
        <li>Lorem ipsum dolor sit.</li>
        <li>Esse corporis laborum ullam?</li>
        <li>Distinctio, laboriosam earum? Numquam.</li>
        <li>Tempore excepturi porro illum!</li>
        <li>Inventore cupiditate autem culpa?</li>
        <li>Praesentium cum fugiat earum?</li>
    </ul>

</div>
<div class="products">
    <div class="products__header">
        <h3>Related Products</h3>
        <p>Lorem, ipsum salam moleculam.</p>
    </div>
    <div class="products__tape">
        <div class="products__card">
            <img src="img/products/iPad.png" alt="Products-iPad">
            <h3>Iphone Apps</h3>
            <p>Lorem ipsum dolor sit.</p>
            <button class="products__btn">Read More</button>
        </div>
        <div class="products__card">
            <img src="img/products/iPad.png" alt="Products-iPad">
            <h3>Iphone Apps</h3>
            <p>Lorem ipsum dolor sit.</p>
            <button class="products__btn">Read More</button>
        </div>
        <div class="products__card">
            <img src="img/products/iPad.png" alt="Products-iPad">
            <h3>Iphone Apps</h3>
            <p>Lorem ipsum dolor sit.</p>
            <button class="products__btn">Read More</button>
        </div>
        <div class="products__card">
            <img src="img/products/iPad.png" alt="Products-iPad">
            <h3>Iphone Apps</h3>
            <p>Lorem ipsum dolor sit.</p>
            <button class="products__btn">Read More</button>
        </div>
    </div>
</div>
</div>
`;

const renderPostBtn = (postCard) => {
    postBtnList.forEach(element => {
        element.addEventListener('click', () => {
            
            blogTape.innerHTML = '';
            pageBtnsMenu.style.display = 'none';
            blog.insertAdjacentHTML('afterbegin', postCard);
            console.log(postCard);
            window.scrollTo(0,0);
                const postExit = document.querySelector('.post__exit');
                const post = document.querySelector('.post');
                postExit.addEventListener('click', () => {
                    post.innerHTML = '';
                    blogTape.innerHTML = blogTapeHTML;
                    pageBtnsMenu.style.display = '';
                    postBtnList = document.querySelectorAll('.post__btn');
                    renderPostBtn(postCard);
                    window.scrollTo(0,0);
                })
            
    })
    
    });
};
renderPostBtn(startPost);


pageBtns.forEach(element => {
    element.addEventListener('click', (event) => {
        const target = event.target;
        postBtnList = '';
        console.log(postBtnList);
        drawTape(event, target);
       
       
    })

});



const createCards = (page) => {
    blogTape.innerHTML = '';
    window.scrollTo(0,0);
    for (let i = 0; i < 3; i++) {
        blogTape.insertAdjacentHTML('afterbegin',`
        <div class="blog__card">
            <img src="img/blog-card/preview.png" alt="news-preview" class="blog__img">
            <div class="blog__info-block">
                <h3>${page.cardHead}</h3>
                <ul>
                    <li>29 / may / 2011</li>
                    <li>written by : ${page.cardAuthor}</li>
    
                </ul>
                <p>${page.cardDescription}</p>
                <div class="blog__links">
                    <button><img src="img/blog-card/twitter.png" alt="twitter-icon"></button>
                    <button><img src="img/blog-card/facebook.png" alt="facebook-icon"></button>
                </div>
                <button class="common-btn post__btn">Read More</button>
            </div>
            </div>
        ` )  
        
    }

    postBtnList = document.querySelectorAll('.post__btn');
    const pagedPost = `
<div class="post">
<button class="common-btn post__exit"> << Go back</button>
<div class="post__action">
    <div class="post__info">
        <h3>${page.cardHead}</h3>
        <ul>
            <li>29 / may / 2011</li>
            <li>written by : ${page.cardAuthor}</li>
        </ul>
    </div>
    <div class="blog__links">
        <button><img src="img/blog-card/twitter.png" alt="twitter-icon"></button>
        <button><img src="img/blog-card/facebook.png" alt="facebook-icon"></button>
    </div>
</div>

<img src="img/post/preview.png" alt="post-preview" class="post__preview">
<div class="post__description ">
    <p>${page.cardDescription}</p>
    <p>Lorem ipsum dolor sit amet, consectetuadipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliua. Ut enim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aluip ex ea commodo consequat. Duis aute irure dolor in esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetuadipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliua. Ut enim ad minim veniam, quis nostud exercitation ullamco laboris nisi ut aluip ex ea commodo consequat. Duis aute irure dolor in esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <ul class="post__ul">
        <h3>Dublin’s iphone apps Online Demo</h3>
        <li>Lorem ipsum dolor sit.</li>
        <li>Esse corporis laborum ullam?</li>
        <li>Distinctio, laboriosam earum? Numquam.</li>
        <li>Tempore excepturi porro illum!</li>
        <li>Inventore cupiditate autem culpa?</li>
        <li>Praesentium cum fugiat earum?</li>
    </ul>

</div>
<div class="products">
    <div class="products__header">
        <h3>Related Products</h3>
        <p>Lorem, ipsum salam moleculam.</p>
    </div>
    <div class="products__tape">
        <div class="products__card">
            <img src="img/products/iPad.png" alt="Products-iPad">
            <h3>Iphone Apps</h3>
            <p>Lorem ipsum dolor sit.</p>
            <button class="products__btn">Read More</button>
        </div>
        <div class="products__card">
            <img src="img/products/iPad.png" alt="Products-iPad">
            <h3>Iphone Apps</h3>
            <p>Lorem ipsum dolor sit.</p>
            <button class="products__btn">Read More</button>
        </div>
        <div class="products__card">
            <img src="img/products/iPad.png" alt="Products-iPad">
            <h3>Iphone Apps</h3>
            <p>Lorem ipsum dolor sit.</p>
            <button class="products__btn">Read More</button>
        </div>
        <div class="products__card">
            <img src="img/products/iPad.png" alt="Products-iPad">
            <h3>Iphone Apps</h3>
            <p>Lorem ipsum dolor sit.</p>
            <button class="products__btn">Read More</button>
        </div>
    </div>
</div>
</div>
`;
    renderPostBtn(pagedPost);

    
}
const drawTape = (event, target) => {
    
    let pageNum = +target.innerHTML;
    if(  !Number.isInteger(pageNum) ){
        target.innerHTML == '&lt;&lt; First' ? pageNum = 0: pageNum = pageBtns[pageBtns.length - 3].textContent ;
    }else{
        pageNum--;
    }
    const getData = async (data, pageNum) => {
    const response  =  await fetch(data);      
    const dataBase = await response.json();
    
    return dataBase.pages[pageNum];
    }
    getData('./DB/blog.JSON', pageNum).then(createCards);
    

    
    
}


  




  
// const drawTape = (event) => {
//     const target = event.target;
//     fetch('/DB/blog.JSON')
//         .then(response => response.json())
//         .then(renderTape);
        
//         // .then(createCard)
        
// }






