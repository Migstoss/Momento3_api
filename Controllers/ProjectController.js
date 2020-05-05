//import Task from '../Models/ProjectModel';
import Session from '../Models/ProjectModel';
let controller = {
    addSession: async (req, res) =>{                
        const {name, surname, identification, birthdate, city, district, cellphone} = req.body;
        const newSession = new Session({name, surname, identification, birthdate, city, district, cellphone});
        res.setHeader('Access-Control-Allow-Origin', '*')
        await newSession.save();        
        return res.status(200).json({            
            response: "Session added successfully"
        });
    },
    getSession: async (req,res) =>{
        const id = req.query.id;
        //console.log(name);
        const session = await Session.findById({_id: id});
        return res.status(200).json({session});
    },
    listSession: async (req,res) =>{
        res.setHeader('Access-Control-Allow-Origin', '*')
        const sessions = await Session.find({});
        return res.status(200).json({sessions});
    },
    updateSession: async (req,res) =>{
        const {id, name, surname, identification, birthdate, city, district, cellphone} = req.body;
        await Session.findByIdAndUpdate(id,{name, surname, identification, birthdate, city, district, cellphone});
        return res.status(200).json({
            response: "Session updated successfully"
        });
    },
    deleteSession: async (req,res) =>{
        const {id} = req.body;
        await Session.findByIdAndDelete(id);
        return res.status(200).json({
            response: "Session deleted successfully"
        });
    },
}

module.exports = controller;