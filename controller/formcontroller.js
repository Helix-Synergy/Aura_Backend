const formmodel = require("../model/formmodel");
async function consultationform(req, res) {
  try {
    const { name, companyname, email, phone,industry, serviceofinterest, message } =
      req.body;

    // Validation
    if (
      !name ||
      !companyname ||
      !email ||
      !phone ||
      !industry ||
      !serviceofinterest ||
      !message
    ) {
      return res.status(403).json({ message: "Please Fill All The Details" });
    }
const emailRegex = /\S+@\S+\.\S+/;
if (!emailRegex.test(email)) {
  return res.status(400).json({ message: "Invalid email address" });
}
if (phone.toString().length < 10) {
  return res.status(400).json({ message: "Invalid phone number" });
}
    // Create new form data
    const FormData = new formmodel({
      name,
      companyname,
      email,
      phone,
      industry,
      serviceofinterest,
      message,
    });

    // Save to DB
    await FormData.save();

    return res.status(201).json({
      message: "Message Sent Successfully",
      data: FormData,
    });
  } catch (error) {
    return res.status(501).json({ message: error.message });
  }
}
async function getconsultationform(req, res) {
  try {
    const GetFormData = await formmodel.find({}).sort({ createdAt: -1 }); 
    // -1 = newest first, 1 = oldest first

    return res.status(200).json({
      message: "Forms fetched successfully",
      data: GetFormData
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


module.exports = {consultationform,getconsultationform};
