import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    //create new user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed user creations" });
  }
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
