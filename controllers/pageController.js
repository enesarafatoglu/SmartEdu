const nodemailer = require('nodemailer');

exports.getIndexPage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

exports.sendEmail = async (req, res) => {
  
  const outputMessage = `
  
  <h1>Mail Details</h1>
  <ul>
    <li>Name: ${req.body.name}</li> 
    <li>Email: ${req.body.email}</li> 
  </ul>
  <h1>Message</h1>
  <p>${req.body.message}</p>
  `

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "", 
      pass: "", 
    },
  });
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Smart EDU Contact Form 👻" <>', // sender address
      to: "", // list of receivers
      subject: "Hello ✔", // Subject line
      html: outputMessage, // html body
    });
  
    //console.log("Message sent: %s", info.messageId);
    //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.status(200).redirect('contact');
};
