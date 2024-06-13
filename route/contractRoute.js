const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.subject.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please fill all the fields" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "karolina.anna.knap@gmail.com",
      pass: "xtzi dxkh aoyd gvmm",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "karolina.anna.knap@gmail.com",
    subject: `message from ${data.name}`,
    html: `

            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please fill all the fields" });
      res.status(200).json({ msg: "Thank you for contact!" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});
module.exports = router;


export const errorUtils = {
  getError: (error) => {
    let e = error;
    if (error.response) {
      e = error.response.data;                   // data, status, headers
      if (error.response.data && error.response.data.error) {
        e = error.response.data.error;           // my app specific keys override
      }
    } else if (error.message) {
      e = error.message;
    } else {
      e = "Unknown error occured";
    }
    return e;
  },
};