import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from '../components/Header/index'
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const response = await fetch('http://localhost:4000/api/drinks')
const { data: drinks } = await response.json()

document.addEventListener('DOMContentLoaded', () => {
  const navBtn = document.querySelector('.nav-btn')
  const rolloutNav = document.querySelector('.rollout-nav')

  navBtn.addEventListener('click', () => {
    rolloutNav.classList.toggle('nav-closed')
  })

  rolloutNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') { // 'A' - kontrolujeme, jestli bylo kliknuto na <a>
      rolloutNav.classList.add('nav-closed')
    }
  })
})

document.querySelector('#root').innerHTML = render(
  <div className="page">
    < Header />
    <main>
      < Banner />
      < Menu drinks={drinks} />
      < Gallery />
      < Contact />
    </main>
    < Footer />
  </div>
);


const orderForms = document.querySelectorAll(".drink__controls");
orderForms.forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = form.querySelector(".order-id").value;
    const currentOrdered = form.getAttribute('data-ordered') === 'true';
    
    //console.log("Order button clicked", id);

    await fetch(`http://localhost:4000/api/drinks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        { op: "replace", path: "/ordered", value: !currentOrdered },
      ]),
    });

    const button = form.querySelector('button');
      form.setAttribute('data-ordered', !currentOrdered);
      button.className = !currentOrdered ? 'order-btn order-btn--ordered' : 'order-btn';
      button.textContent = currentOrdered ? 'Objednat' : 'Zrušit';
  });
});



