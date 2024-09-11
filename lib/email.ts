'use server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { ContactUsQueryProps } from './Contentful/Contact/create-contact';

const CLIENT_ID = process.env.NODEMAILER_CLIENT_ID;
const CLIENT_SECRET = process.env.NODEMAILER_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.NODEMAILER_REFRESHTOKEN;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'; //DONT EDIT THIS
const MY_EMAIL = process.env.NODEMAILER_EMAIL;

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export const sendEmail = async (
  data: ContactUsQueryProps
): Promise<boolean> => {
  try {
    const ACCESS_TOKEN = (
      await oAuth2Client.getAccessToken()
    ).token?.toString();
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: MY_EMAIL,
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    const mailOptions = {
      from: MY_EMAIL,
      to: 'artistbuildingstudio@gmail.com, grbmax@gmail.com',
      subject: 'Contact Form Query',
      html: `<html>
      <head>
      <h1>Contact Form Query</h1>
      </head>
      <body>
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Contact Number: ${data.contact}</p>
      <p>Message: ${data.message}</p>
      </html>`,
    };

    await transport.sendMail(mailOptions);
    console.info('Email sent');

    return true;
  } catch (error) {
    console.error('Error in sendTestEmail: ', error);
    return false;
  }
};
