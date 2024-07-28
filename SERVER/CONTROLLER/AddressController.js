const Address=require('../MODEL/AddressModel');





// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
// <                             <$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ USER SIDE $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$>                            > //
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//



// <-------------------------------------------------------| RENDERING A PAGE WITH ADDRESSES LISTED -------------------------------------------|>



const getAddress = async (req, res) => {
    try {
        const userId = req.user.id; // Extract userId from req.user object
         // Find addresses for the user with the given user ID
        const addresses = await Address.find({ userId });
        if (!addresses.length) {
            return res.status(404).json({ msg: "No addresses found" });
        }
        res.status(200).json(addresses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: "Internal error" });
    }
};


// <-------------------------------------------------------| POSTING & ADDING ADDRESS TO THE DATABASE -----------------------------------------|>


const addAddress = async (req, res) => {
    try {
        const userId = req.user._id; 
        const { phone, addressInfo, addressType, pincode, city, state, localityAreaStreet, flatNoBuildingName, landmark } = req.body;

        const newAddress = new Address({
            userId,
            phone,
            addressInfo,
            addressType,
            pincode,
            city,
            state,
            localityAreaStreet,
            flatNoBuildingName,
            landmark
        });
        const savedAddress = await newAddress.save();
        console.log('Saved Address:', savedAddress);
        res.status(201).json(savedAddress);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: "Internal error" });
    }
};


// <-------------------------------------------------------| RENDERING THE PAGE TO EDIT ADDRESSES----------------------------------------------|>


const updateAddress=async(req,res)=>{
    try {
        let { id } = req.params;
        id = id.trim();  // Trim any leading or trailing whitespace
        const updatedData = req.body;
        
        const updatedAddress = await Address.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedAddress) {
            return res.status(404).json({ msg: "Address not found" });
        }
        res.status(200).json(updatedAddress);
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: "Internal error" });
    }
}

// <-------------------------------------------------------| DELETING THE ADDRESSES FROM THE ARRAY---------------------------------------------|>


const deleteAddress=async(req,res)=>{
    try {
        const { id } = req.params;
        const deletedAddress = await Address.findByIdAndDelete(id);
        if (!deletedAddress) {
            return res.status(404).json({ msg: "Address not found" });
        }
        res.status(200).json({ msg: "Address deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: "Internal error" });
    }
}


module.exports = {addAddress, getAddress,updateAddress,deleteAddress};
