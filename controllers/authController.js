import userModel from "../models/adminModel.js";

export const loginController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }
        // CHECK USER
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                succes: false,
                message: "Email is not registered"
            })
        }

        const match = (password != user.password) ? false : true;
        if (!match) {
            return res.status(200).send({
                succes: false,
                message: "Invalid Password"
            })
        }
        user.set({ name: name })
        res.status(200).send({
            success: true,
            message: "Login Successfully",
            user: {
                name: user.name,
                email: user.email,
            }
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            succes: false,
            message: "Error in Login",
            error
        })
    }
}
