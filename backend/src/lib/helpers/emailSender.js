import nodemailer from 'nodemailer';
import getEnv from './getEnv.js';

const SENDER_EMAIL_ADDRESS = getEnv('SENDER_EMAIL_ADDRESS');
const SENDER_EMAIL_PASSWORD = getEnv('SENDER_EMAIL_PASSWORD');

export default async function emailSender(sendTo, subject, html) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDER_EMAIL_ADDRESS,
        pass: process.env.SENDER_EMAIL_PASSWORD,
      },
    });

    return await transporter.sendMail({
      from: process.env.SENDER_EMAIL_ADDRESS,
      to: sendTo,
      subject,
      html,
    });
  } catch (error) {
    return error;
  }
}
