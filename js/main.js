import '../css/style.css'
import '../css/media.css'
import avatar from '/img/avatar.svg'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="row-one">
      <div class="row-one__left">
        <img src="${avatar}" class="row-one__left__avatar" alt="">
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
            <img src="/img/tools_logo/figma.svg" alt="Figma">
            <img src="/img/tools_logo/ps.svg" alt="Photoshop">
            <img src="/img/tools_logo/ai.svg" alt="Illustrator">
            <img src="/img/tools_logo/pr.svg" alt="Premiere">
            <img src="/img/tools_logo/notion.svg" alt="Notion">
            <img src="/img/tools_logo/meets.svg" alt="Meets">
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
`

document.querySelectorAll('.ripple-container').forEach(element => {
  element.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const rect = element.getBoundingClientRect();
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + 'px';
    ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + 'px';
    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600); // Убираем ripple элемент после анимации
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Save data to localStorage on input event
  document.querySelectorAll('[contenteditable="true"]').forEach(element => {
    const key = element.getAttribute('data-key'); // Use the data-key attribute as key
    if (!key) {
      console.error('Element does not have a data-key:', element);
      return;
    }

    console.log(`Loading data for ${key}`);
    const savedData = localStorage.getItem(key);
    if (savedData) {
      element.innerText = savedData;
      console.log(`Loaded data for ${key}:`, savedData);
    }

    element.addEventListener('input', () => {
      console.log(`Saving data for ${key}:`, element.innerText);
      localStorage.setItem(key, element.innerText);
    });
  });

  // Add event listener to the button
  document.getElementById('download-pdf').addEventListener('click', async () => {
    downloadPDF();
  });
});


// function downloadPDF() {
//     const element = document.getElementById('app');

//     html2pdf().from(element).save('resume.pdf'); // Используйте html2pdf.js библиотеку
// }


function downloadPDF() {
  const element = document.getElementById('app');
  const opt = {
    margin:       1,
    filename:     'resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'pt', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(element).set(opt).save();
}