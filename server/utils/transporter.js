import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';


dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'albertarakelyan1998@gmail.com',
    pass: process.env.NODEMAILER_PASSWORD,
  }
});

export default transporter;