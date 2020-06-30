import Property from '../Models/propertyModel';
import User from '../Models/userModel';
let controller = {
    addProperty: async (req, res) =>{                
        const {title, type, address, rooms, price, area} = req.body;
        const newProperty = new Property({title, type, address, rooms, price, area});
        res.setHeader('Access-Control-Allow-Origin', '*')
        await newProperty.save();        
        return res.status(200).json({            
            response: "Property added successfully"
        });
    },
    getProperty: async (req,res) =>{
        const id = req.query.id;
        //console.log(name);
        const property = await Property.findById({_id: id});
        return res.status(200).json({property});
    },
    listProperty: async (req,res) =>{
        res.setHeader('Access-Control-Allow-Origin', '*')
        const properties = await Property.find({});
        return res.status(200).json({properties});
    },
    updateProperty: async (req,res) =>{
        const {id, title, type, address, rooms, price, area} = req.body;
        await Property.findByIdAndUpdate(id,{title, type, address, rooms, price, area});
        return res.status(200).json({
            response: "Property updated successfully"
        });
    },
    deleteProperty: async (req,res) =>{
        const {id} = req.body;
        await Property.findByIdAndDelete(id);
        return res.status(200).json({
            response: "Property deleted successfully"
        });
    },
    addUser: async (req, res) =>{                
        const {name, surname, email, password} = req.body;
        const newUser = new User({name, surname, email, password});
        res.setHeader('Access-Control-Allow-Origin', '*')
        await newUser.save();        
        return res.status(200).json({            
            response: "User added successfully"
        });
    },
    getUser: async (req, res) => {
        const {email, password} = req.body;        
        const user = await User.find({email: email, password: password});
        return res.status(200).json({user});
    }
}

module.exports = controller;