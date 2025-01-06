import { useEffect, useState } from "react";
import { Contact } from "./Contact";
import AddContact from "./AddContact";

export type ContactI = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

const Contacts = () => {
  const [contacts, setContact] = useState<ContactI[]>([
    {
      id: "1",
      name: "blagica",
      email: "blagica@brainster.co",
      phone: "5641231234",
    },
    {
      id: "2",
      name: "kristijan",
      email: "kristijan@brainster.co",
      phone: "5654744",
    },
    { id: "3", name: "ognen", email: "ognen@brainster.co", phone: "123456789" },
  ]);

  useEffect(() => {
    const localstorageList = localStorage.getItem("contacts");
    if (localstorageList) setContact(JSON.parse(localstorageList));
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAdd = (newContact: ContactI) => {
    setContact([...contacts, newContact]);
  };

  const handleDeleteContact = (id: string) => {
    setContact(contacts.filter((el) => el.id !== id));
  };

  return (
    <div>
      <AddContact handleAdd={handleAdd} />
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDelete={handleDeleteContact}
        />
      ))}
    </div>
  );
};

export default Contacts;
