import User from '../model/user.model.js'
import bcrypt from 'bcryptjs'


export const signup = async(req , res) => {
    try {
        const {fullName , email , password} = req.body
        const user = await User.findOne({email})

        if(user)
        {
            return res.status(400).json({message : "User Already exists"})
        }
        const hashPasswd = await bcrypt.hash(password,10)
        const createdUser = new User({
            fullname : fullName,
            email : email,
            password : hashPasswd,
        })
        await createdUser.save()


        res.status(201).json({message : "successfully Created User",
            user : {
                _id : createdUser._id,
                fullname : createdUser.fullname,
                email : createdUser.email
            }
        })
    } catch (error) {
        res.status(500).json({message : "Internal service error"})
    }
}


export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        }
    } catch (error) {
        console.log("Error : " + error.message);
        res.status(500).json({ message: " Internal server error" });
    }
};