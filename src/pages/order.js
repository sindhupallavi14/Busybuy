import { useAppContext } from "../components/context"

export default function Order()
{
    const {orders}=useAppContext();
    const totalBill = orders.reduce((sum, order) => {
      return sum + order.price * order.quantity;
    }, 0);
    return(
        <>
        <div className="Orders">
            <h1>Your Orders</h1>
            <div className="order-details">
                <table border="2" className="order-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Date and Time</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                {orders.length > 0 ? (
                  <>
                    {orders.map((order, index) => (
                      <tr key={index}>
                        <td>{order.title}</td>
                        <td>${order.price}</td>
                        <td>{order.quantity}</td>
                        <td>{order.date}</td>
                        <td>${(order.price * order.quantity).toFixed(2)}</td>
                    </tr>
                    ))}
                   
                    <tr>
                      <td colSpan="4" style={{ fontWeight: "bold" }}>Total Bill</td>
                      <td style={{ fontWeight: "bold" }}>${totalBill.toFixed(2)}</td>
                        </tr>
                      </>
                    ) : (
                      <tr>
                        <td colSpan="4">No orders found</td>
                      </tr>
                    )}
                  </tbody>  
                </table>
            </div>
        </div>
        </>
    )
}