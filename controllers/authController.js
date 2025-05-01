import bcrypt from 'bcryptjs';

const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
    } catch (error) {

    }

}