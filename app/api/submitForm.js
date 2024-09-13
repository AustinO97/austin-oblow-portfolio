export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstname, lastname, email, phone, service, message } = req.body;

    // Here you will add the logic to save the data to a database (in Step 3)
    console.log("Form Data:", {
      firstname,
      lastname,
      email,
      phone,
      service,
      message,
    });

    // Respond with success for now
    return res.status(200).json({ message: "Form data received!" });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
