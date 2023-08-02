const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const { OAuth2 } = google.auth;

const REDIRECT_URL = "https://developers.google.com/oauthplayground";
const { MAILING_ID, MAILING_SECRET, MAILING_REFRESH, EMAIL } = process.env;
const auth = new OAuth2(MAILING_ID, MAILING_SECRET, REDIRECT_URL);

const sendVerificationEmail = async (email, name, url) => {
  try {
    auth.setCredentials({
      refresh_token: MAILING_REFRESH,
    });
    const accessToken = await auth.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "developer2860@gmail.com",
        clientId: MAILING_ID,
        clientSecret: MAILING_SECRET,
        refreshToken: MAILING_REFRESH,
        accessToken,
      },
    });

    const mailOptions = {
      from: EMAIL,
      to: email,
      subject: "Verification email",
      html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Document</title></head><body><p>Dear ${name}, please click this link below to verify your email.</p><a href='${url}'>Verify email</a></body></html>`,
    };
    transport.sendMail(mailOptions, (err, res) => {
      if (err) {
        console.error(err);
        return err;
      }
      return res;
    });
  } catch (error) {
    throw new Error("Something broken when sending verification email.");
  }
};
const sendCodeEmail = async (email, name, code) => {
  try {
    auth.setCredentials({
      refresh_token: MAILING_REFRESH,
    });
    const accessToken = await auth.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "developer2860@gmail.com",
        clientId: MAILING_ID,
        clientSecret: MAILING_SECRET,
        refreshToken: MAILING_REFRESH,
        accessToken,
      },
    });

    const mailOptions = {
      from: EMAIL,
      to: email,
      subject: "Verification email",
      html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Document</title></head><body><p>Dear ${name}, please click this link below to verify your email.</p><button>${code}</button></body></html>`,
    };
    transport.sendMail(mailOptions, (err, res) => {
      if (err) {
        console.error(err);
        return err;
      }
      return res;
    });
  } catch (error) {
    throw new Error("Something broken when sending code email.");
  }
};

module.exports = { sendVerificationEmail, sendCodeEmail };
