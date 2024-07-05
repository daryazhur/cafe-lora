import { OrderItem } from "../OrderItem"

export const Order = ( { items } ) => {
    if (items.length === 0) {
        return (
            <p className="empty-order">Zatím nemáte nic objednáno</p>
        )
    }
    
    return (
        <div className="order__items">
            {items.map(item => (
                < OrderItem 
                    key={item.id}
                    name={item.name}
                    image={`http://localhost:4000${item.image}`}
                />
            ))}
        </div>
    )
}