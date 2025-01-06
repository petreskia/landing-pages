import { useState } from "react";
import { ContactI } from "./Contacts";
import { v4 as uuidv4 } from "uuid";

interface Error {
  [key: string]: string;
}
const initialValue = {
  id: "",
  email: "",
  phone: "",
  name: "",
};
const AddContact = ({
  handleAdd,
}: {
  handleAdd: (contact: ContactI) => void;
}) => {
  const [newContact, setNewContact] = useState<ContactI>(initialValue);

  const [error, setError] = useState<Error>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, phone } = newContact;

    let localErrors: Error = {};

    if (name === "") localErrors["name"] = "Name is required";
    if (email === "")
      localErrors = { ...localErrors, email: "Email is Required" };
    if (phone === "") localErrors.phone = "Phone number is required";

    if (Object.keys(localErrors).length > 0) {
      setError(localErrors);
      return;
    }
    handleAdd({ ...newContact, id: uuidv4() });
    setError({});
    setNewContact(initialValue);
  };

  return (
    <div className="AddContact">
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          id="name"
          value={newContact?.name}
          onChange={handleChange}
        />
        <br />
        {error.name && <p>{error.name}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          id="email"
          value={newContact?.email}
          onChange={handleChange}
        />
        <br />
        {error.email && <p>{error.email}</p>}
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          placeholder="Enter phone number"
          id="phone"
          value={newContact?.phone}
          onChange={handleChange}
        />
        <br />
        {error.phone && <p>{error.phone}</p>}
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddContact;
