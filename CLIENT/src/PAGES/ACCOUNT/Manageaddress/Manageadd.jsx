import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../CONTEXT/Store';
import './Manageadd.css';

const Manageadd = () => {
  const [editMode, setEditMode] = useState(null);
  const [addMode, setAddMode] = useState(false);
  
  const [newAddress, setNewAddress] = useState({
    addressType: '',
    phone: '',
    addressInfo: '',
    pincode: '',
    city: '',
    state: '',
    localityAreaStreet: '',
    flatNoBuildingName: '',
    landmark: ''
  });
  
  const [addresses, setAddresses] = useState([]);
  const { token } = useAuth();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users/address', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAddresses(response.data);
      } catch (error) {
        console.error('Error fetching user address:', error);
      }
    };
    fetchData();
  }, [token]);
  
  const handleEditClick = (index) => {
    setEditMode(index);
  };

  const handleSaveClick = async (index) => {
    try {
      const updatedAddress = addresses[index];
      if (!updatedAddress || !updatedAddress._id) {
        throw new Error('Address or ID not found');
      }

      await axios.put(`http://localhost:3000/api/users/updateAddress/${updatedAddress._id}`, updatedAddress, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEditMode(null);
    } catch (error) {
      console.error('Error updating address:', error);
    }
  };

  const handleAddClick = () => {
    setAddMode(true);
  };

  const handleAddSaveClick = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/addAddress', newAddress, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAddresses([...addresses, response.data]);

      setNewAddress({
        addressType: '',
        phone: '',
        addressInfo: '',
        pincode: '',
        city: '',
        state: '',
        localityAreaStreet: '',
        flatNoBuildingName: '',
        landmark: ''
      });
      setAddMode(false);
    } catch (error) {
      console.error('Error posting user address:', error);
    }
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (addMode) {
      setNewAddress(prev => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setAddresses(prev => {
        const updatedAddresses = [...prev];
        updatedAddresses[index][name] = value;
        return updatedAddresses;
      });
    }
  };

  const handleDeleteClick = async (index) => {
    try {
      const addressToDelete = addresses[index];
      if (!addressToDelete || !addressToDelete._id) {
        throw new Error('Address or ID not found');
      }

      await axios.delete(`http://localhost:3000/api/users/deleteAddress/${addressToDelete._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const updatedAddresses = addresses.filter((_, i) => i !== index);
      setAddresses(updatedAddresses);
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };

  return (
    <div className="main">
      <div className="heading">
        <h2>Manage Address</h2>
      </div>
      <div className="add_button">
        <button onClick={handleAddClick}>Add address</button>
      </div>

      {addMode ? (
        <div className="address_form">
          <select
            name="addressType"
            value={newAddress.addressType}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Select Address Type</option>
            <option value="home">Home</option>
            <option value="office">Office</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            name="phone"
            value={newAddress.phone}
            placeholder="Phone Number"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="addressInfo"
            value={newAddress.addressInfo}
            placeholder="Address Info"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            name="pincode"
            value={newAddress.pincode}
            placeholder="Pincode"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="city"
            value={newAddress.city}
            placeholder="City"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="state"
            value={newAddress.state}
            placeholder="State"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="localityAreaStreet"
            value={newAddress.localityAreaStreet}
            placeholder="Locality/Area/Street"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="flatNoBuildingName"
            value={newAddress.flatNoBuildingName}
            placeholder="Flat No/Building Name"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="landmark"
            value={newAddress.landmark}
            placeholder="Landmark"
            onChange={(e) => handleChange(e)}
          />
          <button className="save_button" onClick={handleAddSaveClick}>Save</button>
        </div>
      ) : (
        addresses.map((address, index) => (
          <div className="address_info" key={index}>
            <div className="address_info_head">
              {editMode === index ? (
                <select
                  name="addressType"
                  value={address.addressType}
                  onChange={(e) => handleChange(e, index)}
                >
                  <option value="home">Home</option>
                  <option value="office">Office</option>
                  <option value="other">Other</option>
                </select>
              ) : (
                <h2>{address.addressType}</h2>
              )}
            </div>
            <div className="address_info_detail">
              <ul>
                <li>Phone: {editMode === index ? (
                  <input
                    type="text"
                    name="phone"
                    value={address.phone}
                    onChange={(e) => handleChange(e, index)}
                  />
                ) : (
                  address.phone
                )}</li>
                <li>Address Info: {editMode === index ? (
                  <input
                    type="text"
                    name="addressInfo"
                    value={address.addressInfo}
                    onChange={(e) => handleChange(e, index)}
                  />
                ) : (
                  address.addressInfo
                )}</li>
                <li>Pincode: {editMode === index ? (
                  <input
                    type="number"
                    name="pincode"
                    value={address.pincode}
                    onChange={(e) => handleChange(e, index)}
                  />
                ) : (
                  address.pincode
                )}</li>
                <li>City: {editMode === index ? (
                  <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={(e) => handleChange(e, index)}
                  />
                ) : (
                  address.city
                )}</li>
                <li>State: {editMode === index ? (
                  <input
                    type="text"
                    name="state"
                    value={address.state}
                    onChange={(e) => handleChange(e, index)}
                  />
                ) : (
                  address.state
                )}</li>
                <li>Locality/Area/Street: {editMode === index ? (
                  <input
                    type="text"
                    name="localityAreaStreet"
                    value={address.localityAreaStreet}
                    onChange={(e) => handleChange(e, index)}
                  />
                ) : (
                  address.localityAreaStreet
                )}</li>
                <li>Flat No/Building Name: {editMode === index ? (
                  <input
                    type="text"
                    name="flatNoBuildingName"
                    value={address.flatNoBuildingName}
                    onChange={(e) => handleChange(e, index)}
                  />
                ) : (
                  address.flatNoBuildingName
                )}</li>
                <li>Landmark: {editMode === index ? (
                  <input
                    type="text"
                    name="landmark"
                    value={address.landmark}
                    onChange={(e) => handleChange(e, index)}
                  />
                ) : (
                  address.landmark
                )}</li>
              </ul>
              {editMode === index ? (
                <button className="save_button" onClick={() => handleSaveClick(index)}>
                  Save
                </button>
              ) : (
                <div className="action_buttons">
                  <button className="edit_button" onClick={() => handleEditClick(index)}>
                    Edit
                  </button>
                  <button className="edit_button" onClick={() => handleDeleteClick(index)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Manageadd;
