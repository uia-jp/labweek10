import { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState(false);
  const [address, setAddress] = useState("");
  const [showAddress, setShowAddress] = useState(false);
  const [address2, setAddress2] = useState("");
  const [showAddress2, setShowAddress2] = useState(false);
  const [city, setCity] = useState("");
  const [showCity, setShowCity] = useState(false);
  const [province, setProvince] = useState("");
  const [showProvince, setShowProvince] = useState(false);
  const [postalCode, setPostalCode] = useState("");
  const [showPostalCode, setShowPostalCode] = useState(false);

  const showResult = (e) => {
    e.preventDefault();
    setShowName(true);
    setShowEmail(true);
    setShowAddress(true);
    setShowAddress2(true);
    setShowCity(true);
    setShowProvince(true);
    setShowPostalCode(true);
  };

  return (
    <>
      <form onSubmit={showResult}>
        <h1>Data Entry Form</h1>
        <div>
          <div className="section_a">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div  className="section_a">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)} />
        <label htmlFor="address2">Address 2</label>
        <input type="text" id="address2" placeholder="Apartment, studio, or floor" value={address2} onChange={(e) => setAddress2(e.target.value)} />
        <div className="section_b">
          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <label htmlFor="province">
              Province
            </label>
            <select id="province" value={province} onChange={(e) => setProvince(e.target.value)}>
              <option value="">Choose...</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </div>
          <div>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
          </div>
        </div>
        <input type="checkbox" /> Agree Terms &amp; Condition?
        <input type="submit" value="Submit" id="btn" />
      </form>

      <table>
        <tr>
          <th class="output_label">Email:</th>
          <th class="output">{showEmail && email}</th>
        </tr>
        <tr>
          <th class="output_label">Full Name:</th>
          <th class="output">{showName ? name : ''}</th>
        </tr>
        <tr>
          <th class="output_label">Address:</th>
          <th class="output">{showAddress && address}</th>
        </tr>
        <tr>
          <th class="output_label">Address 2:</th>
          <th class="output">{showAddress2 && address2}</th>
        </tr>
        <tr>
          <th class="output_label">City:</th>
          <th class="output">{showCity && city}</th>
        </tr>
        <tr>
          <th class="output_label">Province:</th>
          <th class="output">{showProvince && province}</th>
        </tr>
        <tr>
          <th class="output_label">Postal Code:</th>
          <th class="output">{showPostalCode && postalCode}</th>
        </tr>
      </table>
    </>
  );
}

export default App;