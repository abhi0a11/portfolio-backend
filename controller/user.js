import { User } from "../model/user.js";

export const fetchData = async (req, res) => {
  try {
    const { name, email, phone, description } = req.body;
    await User.create({
      name,
      email,
      phone,
      description,
    });

    res.status(200).json({
      success: true,
      message: "form submitted successfully",
    });
  } catch (error) {
    error.essage = error.message || "Error Occoured. Please retry!";

    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
