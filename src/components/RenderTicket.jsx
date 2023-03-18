import React from "react";
import axios from "axios";
import Ticket from "./Ticket";
export default function RenderTicket() {
  const [tickets, setTickets] = React.useState([]);
  const token = localStorage.getItem("jwt_token");
  const getTicketOwner = async () => {
    const res = await axios.get("http://localhost:3000/ticket/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = res;
    const { tickets } = data;
    setTickets(tickets);
    console.log(tickets);
  };

  React.useEffect(() => {
    getTicketOwner();
    console.log(tickets);
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {tickets.map((ticket) => (
            <Ticket
              key={ticket._id}
              ticket_id={ticket.ticket_id}
              title={ticket.ticket_name}
              imageUrl={ticket.image}
              eventId={ticket.event_id}
              quantity={ticket.ticket_quantity}
              isOwner={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
