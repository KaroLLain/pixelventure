const router = require('express').Router()
const nodemailer = require('nodemailer')

router.post('/contact', (req, res) => {
  let data = req.body
  if (!data.name || !data.email || !data.subject || !data.message) {
    return res.status(400).json({ msg: 'Please fill all the fields' })
  }

  let smtpTransporter = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  let mailOptions = {
    from: data.email,
    to: process.env.EMAIL_USER,
    subject: `Message from ${data.name}`,
    html: `
<h3>Informations</h3>
<ul>
<li>Name: ${data.name}</li>
<li>Email: ${data.email}</li>
</ul>
<h3>Message</h3>
<p>${data.message}</p>
`
  }

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

module.exports = router
