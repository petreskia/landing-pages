import { useState } from "react";
import { ContactI } from "./Contacts";

interface ContactProps {
  contact: ContactI;
  handleDelete: (id: string) => void;
}

export const Contact = ({ contact, handleDelete }: ContactProps) => {
  const [listShown, setListShown] = useState<boolean>(false);

  return (
    <div className="Contact">
      <h4>
        {contact.name}
        <i
          className="fas fa-sort-down"
          onClick={() => setListShown(!listShown)}
        />
        <i
          className="fas fa-times"
          style={{ float: "right" }}
          onClick={() => handleDelete(contact.id)}
        />
      </h4>
      {listShown && (
        <ul>
          <li>Email: {contact.email} </li>
          <li>{contact.phone} </li>
        </ul>
      )}
    </div>
  );
};
