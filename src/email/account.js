const sendgridAPIKey = process.env.SENDGRID_API_KEY;

const sendWelcomeEmail = (email, name) => {
    console.log('Email sent to:', email, ':', name);
}

const sendCancelationEmail = (email, name) => {
    console.log('Email sent to:', email, ':', name);
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail,
}