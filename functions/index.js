const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors");

admin.initializeApp();

// const pass = functions.config().mygmail.password;
// const user = functions.config().mygmail.email;

// console.log("creds", user, pass);

// let transporter = nodemailer.createTransport({
//   service: "iCloud",
//   auth: { user, pass }
// });

exports.sendInvites = functions.firestore
  .document("tournaments/{customerId}")
  .onWrite((event, context) => {
    const tournamentRecord = event.after.data();

    // tournamentRecord.invitees.map(invitee => {
    //   const mailOptions = {
    //     from: "Golf Classic <ianlenehan@me.com>",
    //     to: invitee,
    //     subject: "You've been challenged!", // email subject
    //     html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
    //           <br />
    //           <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
    //       ` // email content in HTML
    //   };

    //   return transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //       console.log("error!", error);
    //       return true;
    //     }
    //     console.log("Sent!");
    //     return true;
    //   });
    // });

    console.log("tournament record", tournamentRecord);
    return null;
  });

  exports.updatePlayers = functions.firestore.document("users/{userId}").onUpdate((user, context) => {

  })
