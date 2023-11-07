import axios from "axios";

export const sendForm = async (name: string | undefined, email: string | undefined, phone: string | undefined, subject: string | undefined, message: string | undefined) => {

    try {
        const response = await axios.post(`https://pharma-backend-nodejs-zhantore.onrender.com/about`, {
            name,
            email,
            phone,
            subject,
            message
        })
        console.log(response.data)
    } catch (e) {
        console.log(e)
    }
}