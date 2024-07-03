import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';

import { Header } from '../components/Header'
import { Footer } from '../components/Footer' 
import { Order } from '../components/Order'

const response = await fetch('http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image')
const json = await response.json()
const orderItem = json.data

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      < Header showMenu={false} />

      <main className="order">
        <div className="container order__content">
          <h1>Vaše objedávnka</h1>
          < Order items={orderItem} />
        </div>
      </main>

      < Footer />
    </div>
  </div>
);
