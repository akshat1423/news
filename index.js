const genBtn = document.getElementById("general");
const techBtn = document.getElementById("technology");
const busBtn = document.getElementById("business");
const entBtn = document.getElementById("entertainment");
const sportBtn = document.getElementById("sport");
const newsdetails = document.getElementById("container");
const searchBtn = document.getElementById("searchbtn");
const newsQuery = document.getElementById("newsQuery");
const newsdetails2 = document.getElementById("searchres");
const headlineslider= document.getElementById("sliider");
const newspanel=document.getElementById("news-glance");

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#333 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;



var newsDataArr = [];
const API_KEY="e0d6c7828ee645ae889ce33c8f66c04e"
const GLOBAL_HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function() {
    
    Headlines();
    GlobalHeadlines();

};
genBtn.addEventListener("click",function(){
    document.getElementById('general').textContent = 'GENERAL';
    document.getElementById('general').className = "buts";
    document.getElementById('technology').className = "filter";
    document.getElementById('business').className = "filter";
    document.getElementById('sport').className = "filter";
    document.getElementById('entertainment').className = "filter";
    GeneralNews();
});

busBtn.addEventListener("click",function(){
    document.getElementById('business').textContent = 'BUSINESS';
    document.getElementById('general').className = "filter";
    document.getElementById('technology').className = "filter";
    document.getElementById('business').className = "buts";
    document.getElementById('sport').className = "filter";
    document.getElementById('entertainment').className = "filter";

    BusinessNews();
});

sportBtn.addEventListener("click",function(){
    document.getElementById('sport').textContent = 'SPORTS';
    document.getElementById('general').className = "filter";
    document.getElementById('technology').className = "filter";
    document.getElementById('business').className = "filter";
    document.getElementById('sport').className = "buts";
    document.getElementById('entertainment').className = "filter";
    SportsNews();
});

entBtn.addEventListener("click",function(){
    document.getElementById('entertainment').textContent = 'ENTERTAINMENT';
    document.getElementById('general').className = "filter";
    document.getElementById('technology').className = "filter";
    document.getElementById('business').className = "filter";
    document.getElementById('sport').className = "filter";
    document.getElementById('entertainment').className = "buts";
    EntertainmentNews();
});

techBtn.addEventListener("click",function(){
    document.getElementById('technology').textContent = 'TECHNOLOGY';
    document.getElementById('general').className = "filter";
    document.getElementById('technology').className = "buts";
    document.getElementById('business').className = "filter";
    document.getElementById('sport').className = "filter";
    document.getElementById('entertainment').className = "filter";
    TechnologyNews();
});

searchBtn.addEventListener("click",function(){
    QueryNews();
});

const QueryNews = async () => {
    newsdetails2.innerHTML="<h4>Search : " +newsQuery.value+ "</h4>";
    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        //error handle
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Please work on a local server .Ex:  Use live server of Visual Studio </h5>"
        return;
    }

    displayNews();
}

const Headlines = async () => {
    const response = await fetch(HEADLINES_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Please work on a local server .Ex:  Use live server of Visual Studio </h5>"
        return;
    }

    displayNews();
}

const GlobalHeadlines = async () => {
    const response = await fetch(GLOBAL_HEADLINES_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Please work on a local server .Ex:  Use live server of Visual Studio </h5>"
        return;
    }

    sliderNews();
    panelNews();
}



const GeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Please work on a local server .Ex:  Use live server of Visual Studio </h5>"
        return;
    }

    displayNews();
}

const BusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Please work on a local server .Ex:  Use live server of Visual Studio </h5>"
        return;
    }

    displayNews();
}

const EntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Please work on a local server .Ex:  Use live server of Visual Studio </h5>"
        return;
    }

    displayNews();
}

const SportsNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Please work on a local server .Ex:  Use live server of Visual Studio </h5>"
        return;
    }

    displayNews();
}

const TechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>Please work on a local server .Ex:  Use live server of Visual Studio </h5> "
        return;
    }

    displayNews();
}

function displayNews() {

    newsdetails.innerHTML = "";

    newsDataArr.forEach(news => {
   
        var col = document.createElement('div');
        col.className="news";

        var flipcard = document.createElement('div');
        flipcard.className="flip-card";

        var flipcardinner = document.createElement('div');
        flipcardinner.className="flip-card-inner";

        var flipcardfront = document.createElement('div');
        flipcardfront.className="flip-card-front";
        flipcardfront.setAttribute("height","700px");

        var image1 = document.createElement('img');
        image1.className = "newsimg";
        image1.setAttribute("height","matchparent");
        image1.setAttribute("width","100%");       
        image1.src=news.urlToImage;  
        
        flipcardfront.appendChild(image1);

        var cardBody = document.createElement('div');
        cardBody.className="card";

        var newsHeading = document.createElement('div');
        newsHeading.className = "header";

        var newsHeadingin = document.createElement('h2');
        newsHeadingin.innerHTML = news.title;

        newsHeading.appendChild(newsHeadingin);
        cardBody.appendChild(newsHeading);

        var contentmain = document.createElement('div');
        contentmain.className = "content";

        var contentmain2 = document.createElement('p');
        contentmain2.className = "title";
        contentmain2.innerHTML = news.description; 

        var contentmain3 = document.createElement('p');
        contentmain3.className = "title";       
        contentmain3.innerHTML = "    ";


        contentmain.appendChild(contentmain3);
        contentmain.appendChild(contentmain2);
        cardBody.appendChild(contentmain);

        var hover1 = document.createElement('p');
        var hover2 = document.createElement('button');
        hover2.className = "hover";
        hover2.innerHTML = "Hover to view the whole story"; 

        hover1.appendChild(hover2);
        cardBody.appendChild(hover1);
        
        flipcardfront.appendChild(cardBody);
        flipcardinner.appendChild(flipcardfront);

        var flipcardback = document.createElement('div');
        flipcardback.className="flip-card-back";

        var cardback = document.createElement('div');
        cardback.className="card-back";
        
        var description = document.createElement('h2');
        description.innerHTML = news.content;

        var desc = document.createElement('h3');
        desc.innerHTML = "THIS IS ONLY FOR DEMO,  API THUS NOT SHOWING FULL DESCRIPTION";
            
        cardback.appendChild(description);
        cardback.appendChild(desc);

        flipcardback.appendChild(cardback);
        flipcardinner.appendChild(flipcardback);
        flipcard.appendChild(flipcardinner);
        col.appendChild(flipcard);
        newsdetails.appendChild(col);
 
    
    });

}

function buttoncall1(){

}

function buttoncall2(){

}

function sliderNews() {

    headlineslider.innerHTML = "";
    var ctr=0;
    var c = document.createElement('div');
        c.className="c";

    newsDataArr.forEach(news => {

        ctr= ctr+1;

        var slide = document.createElement('input');
        slide.className="slide";
        slide.id="cr-"+ctr;
        slide.checked = true;
        slide.setAttribute("name","a");
        slide.setAttribute("type","radio");

        c.appendChild(slide);

        var label = document.createElement('label');
        label.setAttribute("for","cr-"+ctr);
        label.setAttribute("style","--hue: 32");

        c.appendChild(label);

        var ci = document.createElement('div');
        ci.className="ci";
        ci.setAttribute("style","--z: 4");
    

        var ch = document.createElement('h2');
        ch.className="ch";
        ch.setAttribute("style","--h: 82; --s: 80%; --l: 90%");
        ch.innerHTML = news.title;

        var imageee = document.createElement('img');
        imageee.setAttribute("height","matchparent");
        imageee.setAttribute("width","100%");
        imageee.src=news.urlToImage;  

        ci.appendChild(ch);
        ci.appendChild(imageee)

        c.appendChild(ci);
    });
    headlineslider.appendChild(c)

}

function panelNews() {

    newspanel.innerHTML = "";
    var ctr=0;
    var ngh = document.createElement('h2');
        ngh.className="news-glance-head";
        ngh.setAttribute("align","center");
        ngh.innerHTML="News at a Glance!";
        newspanel.append(ngh);

    newsDataArr.forEach(news => {

        ctr= ctr+1;
        var newsele = document.createElement('div');
        newsele.className="news-elements";

        var newseleh = document.createElement('h3');
        newseleh.innerHTML =news.title;

        newsele.appendChild(newseleh);

        var newseleimg = document.createElement('img');
        newseleimg.src=news.urlToImage;
        newseleimg.className="panel1";

        newsele.appendChild(newseleimg);
        newspanel.appendChild(newsele);
    });

}




