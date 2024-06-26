import { Drink } from "../Drink"

const response = await fetch('http://localhost:4000/api/drinks')
const json = await response.json()
const list = json.data

export const Menu = () => {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <h2>Naše nabídka</h2>
                <p className="menu-intro">
                    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
                </p>
                <div className="drinks-list">
                    {
                        list.map((drink) => (
                            < Drink 
                                id={drink.id}
                                name={drink.name}
                                ordered={drink.ordered}
                                image={`http://localhost:4000${drink.image}`}
                                layers={drink.layers}
                            />
                        ))
                    }
                    
                    {/* < Drink 
                        id={0}
                        name="Romano"
                        ordered={false}
                        image="http://localhost:4000/assets/cups/romano.png"
                        layers={[
                        {
                            color: '#fbdf5b',
                            label: 'citrón',
                        },
                        {
                            color: '#613916',
                            label: 'espresso',
                        },
                        ]}
                    /> */}
                </div>
                

                <div className="order-detail">
                    <a href="/order.html">Detail objednávky</a>
                </div>
            </div>
        </section>
    )
}