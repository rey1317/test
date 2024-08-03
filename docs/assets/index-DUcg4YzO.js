(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const l="/test/img/avatar.svg";document.querySelector("#app").innerHTML=`
  <div class="container">
    <div class="row-one">
      <div class="row-one__left">
        <img src="${l}" class="row-one__left__avatar" alt="">
        <div class="row-one__left__info block-grey-radius">
          <div class="row-one__left__info__line-top" contenteditable="true">
            Hello 👋🏻 I’m
          </div>
          <div class="row-one__left__info__line-bottom">
            <div class="row-one__left__info__line-bottom__name" contenteditable="true" data-key="name">
              Karthik SR
            </div>
            <div class="row-one__left__info__line-bottom__job" contenteditable="true">
              UX/UI Designer
            </div>
          </div>
        </div>
      </div> 
      <div class="row-one__right block-grey-radius ripple-container">
        <div class="row-one__right__top" contenteditable="true">
          Languages
        </div>
        <div class="row-one__right__bottom">
          <div class="row-one__right__bottom__text">
            <div class="row-one__right__bottom__text__row" contenteditable="true" data-key="lang-1">
              English
            </div>
            <div class="row-one__right__bottom__text__row" contenteditable="true" data-key="lang-2">
              Malayalamс
            </div>
            <div class="row-one__right__bottom__text__row" contenteditable="true" data-key="lang-3">
              Hindi
            </div>
          </div>
          <div class="row-one__right__bottom__lines">
            <div class="row-one__right__bottom__lines__item"></div>
            <div class="row-one__right__bottom__lines__item"></div>
            <div class="row-one__right__bottom__lines__item"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="row-two">
      <div class="row-two__left block-grey-radius">
        <div class="row-two__left__title">
          Experience
        </div>
        <div class="row-two__left__experience">
          <div class="row-two__left__experience__item">
            <div class="row-one__right__bottom__lines__item__top">
              <div class="row-two__left__experience__item__top">
                Jun. 2023 - Present 
                <span class="row-two__left__experience__item__top__fav">most recent</span>
              </div>
              <div class="row-two__left__experience__item__top__tag">
                
              </div>
            </div>
            <div class="row-two__left__experience__item__bottom">
              <div class="row-two__left__experience__item__bottom__job">
                <div class="row-two__left__experience__item__bottom__job__title">
                  Marketing Manager
                </div>
                <div class="row-two__left__experience__item__bottom__job__sub-title">
                  <div class="row-two__left__experience__item__bottom__job__sub-title__item">
                    Pankayam
                  </div>
                  <div class="row-two__left__experience__item__bottom__job__sub-title__item">
                    Full-time
                  </div>
                </div>
              </div>
              <div class="row-two__left__experience__item__bottom__description">
                <ul>
                  <li>Development of internal projects from scratch, product design of brands </li>
                  <li>Landing page, webapps and hybrid apps</li>
                  <li>Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row-two__left__experience__item">
            <div class="row-two__left__experience__item__top">
              2017 - Present
            </div>
            <div class="row-two__left__experience__item__bottom">
              <div class="row-two__left__experience__item__bottom__job">
                <div class="row-two__left__experience__item__bottom__job__title">
                  Graphic / Web designer
                </div>
                <div class="row-two__left__experience__item__bottom__job__sub-title">
                  <div class="row-two__left__experience__item__bottom__job__sub-title__item">
                    Freelance
                  </div>
                </div>
              </div>
              <div class="row-two__left__experience__item__bottom__description">
                <ul>
                  <li>Development of internal projects from scratch, product design of brands </li>
                  <li>Landing page, webapps and hybrid apps</li>
                  <li>Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row-two__left__experience__item">
            <div class="row-two__left__experience__item__top">
              Sep. 2021 - Jun. 2023
            </div>
            <div class="row-two__left__experience__item__bottom">
              <div class="row-two__left__experience__item__bottom__job">
                <div class="row-two__left__experience__item__bottom__job__title">
                  Legal Assistant
                </div>
                <div class="row-two__left__experience__item__bottom__job__sub-title">
                  <div class="row-two__left__experience__item__bottom__job__sub-title__item">
                    Law Firm
                  </div>
                  <div class="row-two__left__experience__item__bottom__job__sub-title__item">
                    Intern
                  </div>
                </div>
              </div>
              <div class="row-two__left__experience__item__bottom__description">
                <ul>
                  <li>Provide administrative support to lawyer and enhance office effectiveness</li>
                  <li>Handle communication with clients, witnesses etc.</li>
                  <li>repare case briefs and summarize depositions, interrogatories and testimony</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row-two__right block-grey-radius ripple-container">
        <div class="row-two__right__title">
          Tools
        </div>
        <div class="row-two__right__inner">
          <div class="row-two__right__inner__block">
            <span class="row-two__right__inner__block__overlay">design</span>
            <img src="img/tools_logo/figma.svg" alt="Figma">
            <img src="img/tools_logo/ps.svg" alt="Photoshop">
            <img src="img/tools_logo/ai.svg" alt="Illustrator">
            <img src="img/tools_logo/pr.svg" alt="Premiere">
            <img src="img/tools_logo/notion.svg" alt="Notion">
            <img src="img/tools_logo/meets.svg" alt="Meets">
          </div>
          <div class="row-two__right__inner__block">
              <span class="row-two__right__inner__block__overlay">no-code</span>
              <img src="/img/tools_logo/zapier.svg" alt="Zapier">
              <img src="/img/tools_logo/webflow.svg" alt="Webflow">
              <img src="/img/tools_logo/framer.svg" alt="Framer">
              <img src="/img/tools_logo/wp.svg" alt="WordPress">
          </div>
          <div class="row-two__right__inner__block">
              <span class="row-two__right__inner__block__overlay">artificial intelligence</span>
              <img src="/img/tools_logo/gpt.svg" alt="GPT">
              <img src="/img/tools_logo/copilot.svg" alt="GitHub Copilot">
              <img src="/img/tools_logo/mj.svg" alt="MidJourney">
              <!-- <img src="/img/tools_logo/mj3.svg" alt="MidJourney v3"> -->
          </div>
        </div>
      </div>
    </div>
    <div class="row-three">
      <div class="row-three__left block-grey-radius">
        <div class="row-three__left__title">
          Education
        </div>
        <div class="row-three__left__inner">
          <div class="row-three__left__inner__item">
            <div class="row-three__left__inner__item__year">
              2023<img src="/img/heart.svg" alt="">
            </div>
            <div class="row-three__left__inner__item__direction">
              <div class="row-three__left__inner__item__direction__title">
                UI/UX
              </div>
              <div class="row-three__left__inner__item__direction__tags">
                <div class="row-three__left__inner__item__direction__tags__item">
                  #UX
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #UI
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #research
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #DesignSystem
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #Ui
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #wireframing
                </div>
              </div>
            </div>
            <div class="row-three__left__inner__item__school">
              Coursera
            </div>
          </div>

          <div class="row-three__left__inner__item">
            <div class="row-three__left__inner__item__year">
              2023
            </div>
            <div class="row-three__left__inner__item__direction">
              <div class="row-three__left__inner__item__direction__title">
                UI/UX
              </div>
              <div class="row-three__left__inner__item__direction__tags">
                <div class="row-three__left__inner__item__direction__tags__item">
                  #UX
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #UI
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #research
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #DesignSystem
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #Ui
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #wireframing
                </div>
              </div>
            </div>
            <div class="row-three__left__inner__item__school">
              Coursera
            </div>
          </div>

          <div class="row-three__left__inner__item">
            <div class="row-three__left__inner__item__year">
              2023
            </div>
            <div class="row-three__left__inner__item__direction">
              <div class="row-three__left__inner__item__direction__title">
                UI/UX
              </div>
              <div class="row-three__left__inner__item__direction__tags">
                <div class="row-three__left__inner__item__direction__tags__item">
                  #UX
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #UI
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #research
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #DesignSystem
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #Ui
                </div>
                <div class="row-three__left__inner__item__direction__tags__item">
                  #wireframing
                </div>
              </div>
            </div>
            <div class="row-three__left__inner__item__school">
              Coursera
            </div>
          </div>


        </div>
      </div>
      <div class="row-three__right">
        <div class="row-three__right__top block-grey-radius">
          <div class="row-three__right__top__title">
            Interests
          </div>
          <div class="row-three__right__top__tags">
            <div class="row-three__right__top__tags__item">
              branding
            </div>
            <div class="row-three__right__top__tags__item">
              design
            </div>
            <div class="row-three__right__top__tags__item">
              photography
            </div>
            <div class="row-three__right__top__tags__item">
              artificial intelligence
            </div>
            <div class="row-three__right__top__tags__item">
              illustration
            </div>
            <div class="row-three__right__top__tags__item">
              typography
            </div>
            <div class="row-three__right__top__tags__item">
              social networks
            </div>
            <div class="row-three__right__top__tags__item">
              research
            </div>
             <div class="row-three__right__top__tags__item">
              dron pilot
            </div>
            <div class="row-three__right__top__tags__item">
              games
            </div>
          </div>
        </div>
        <div class="row-three__right_bottom">
          <div class="row-three__right_bottom__title">
            Let´s chat! I´m ready to work on excinting projects
          </div>
          <div class="row-three__right_bottom__email">
            srkarthik.designscape@gmail.com
          </div>
        </div>
      </div>
    </div>
    
  </div>
`;document.querySelectorAll(".ripple-container").forEach(i=>{i.addEventListener("click",function(_){const e=document.createElement("span");e.className="ripple";const r=i.getBoundingClientRect();e.style.width=e.style.height=Math.max(r.width,r.height)+"px",e.style.left=_.clientX-r.left-e.offsetWidth/2+"px",e.style.top=_.clientY-r.top-e.offsetHeight/2+"px",i.appendChild(e),setTimeout(()=>e.remove(),600)})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll('[contenteditable="true"]').forEach(i=>{const _=i.getAttribute("data-key");if(!_){console.error("Element does not have a data-key:",i);return}console.log(`Loading data for ${_}`);const e=localStorage.getItem(_);e&&(i.innerText=e,console.log(`Loaded data for ${_}:`,e)),i.addEventListener("input",()=>{console.log(`Saving data for ${_}:`,i.innerText),localStorage.setItem(_,i.innerText)})}),document.getElementById("download-pdf").addEventListener("click",async()=>{n()})});function n(){const i=document.getElementById("app"),_={margin:1,filename:"resume.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0},jsPDF:{unit:"pt",format:"a4",orientation:"portrait"}};html2pdf().from(i).set(_).save()}
