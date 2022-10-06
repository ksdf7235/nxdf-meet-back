import client from "../client";
import * as nodemailer from "nodemailer";

export default {
  Query: {
    users: () => client.user.findMany(),
    user: (_, { email }) => client.user.findUnique({ where: { email } }),
    verifyuser: async (_, { email }) => {
      const data = await client.users.findUnique({
        where: { email },
      });

      if (data) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: "not allow mintingpage",
        };
      }
    },
    sendemailuser: async (_, { email }) => {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,

        auth: {
          user: "jeun@daiblab.com", // generated ethereal user
          pass: "cuqyuoocvngpwohf", // generated ethereal password
        },
      });
      let info = await transporter.sendMail({
        from: " nxdf@nxdf.com", // sender address
        to: email, // list of receivers
        subject: "[NXDF_MEET] 이메일 인증",
        text: "Hello world?", // plain text body
        html: `  <div>가나?</div>
    `, // html body
      });
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      if (info) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: "안가네",
        };
      }
    },
  },
};
