const sgMail = require('@sendgrid/mail');

const confirmationEmail = async (req) => {
	let response, status;
	if (!req.body.hasOwnProperty('receiver') || !req.body.hasOwnProperty('first_name')
		|| !req.body.hasOwnProperty('last_name') || !req.body.hasOwnProperty('pack'))
		return {status: 403, error: 'receiver, first_name, last_name and pack are required body parameters.'}
	const {receiver, first_name, last_name, pack} = req.body;
	const message = `Hi <strong> ${first_name} ${last_name} </strong>, <br>
	Please complete your payment for <strong>${pack}</strong> package in order to get started. You can do that by logging in to your account. <br> 
	Thank you! <br> Connectex`;
	const mailOptions = {
		to: receiver,
		from: {email: 'iamibadd@gmail.com', name: 'Ibad Shah'},
		subject: 'Connectex Package Confirmation',
		html: message
	};
	sgMail.setApiKey(process.env.SENDGRID_API);
	await sgMail
		.send(mailOptions)
		.then(() => {
			status = 201;
		})
		.catch(error => {
			if (error.response) {
				status = 401;
				response = error.response.body;
			}
		});
	if (status === 201) return {status: status, data: 'Email sent!'}
	else return {status: status, error: response}
};

const paymentEmail = async (req) => {
	let response, status;
	if (!req.body.hasOwnProperty('receiver') || !req.body.hasOwnProperty('first_name')
		|| !req.body.hasOwnProperty('last_name') || !req.body.hasOwnProperty('pack') || !req.body.hasOwnProperty('amount'))
		return {status: 403, error: 'receiver, first_name, last_name, amount and pack are required body parameters.'}
	const {receiver, first_name, last_name, pack, amount} = req.body;
	const message = `Hi <strong> ${first_name} ${last_name} </strong>, <br>
	Thank you for subscribing to Connectx. <br>
	We have recieved your payment of $<strong>${amount}</strong> and have started working on your <strong>${pack}</strong> package. We will let you know about the progress timely. <br> 
	Thank you! <br> Connectex`;
	const mailOptions = {
		to: receiver,
		from: {email: 'iamibadd@gmail.com', name: 'Ibad Shah'},
		subject: 'Connectex Payment Confirmation',
		html: message
	};
	sgMail.setApiKey(process.env.SENDGRID_API);
	await sgMail
		.send(mailOptions)
		.then(() => {
			status = 201;
		})
		.catch(error => {
			if (error.response) {
				status = 401;
				response = error.response.body;
			}
		});
	if (status === 201) return {status: status, data: 'Email sent!'}
	else return {status: status, error: response}
};

module.exports = {confirmationEmail, paymentEmail};