import { resendClient,sender } from "../lib/resend.js"; 

import { createWelcomeEmailTemplate } from "./emailtemplates.js";

// 
export const sendwelcomeEmail = async (email, name,clienturl) => {
    const {data,error} = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: email,
        subject: "Welcome to Chatify",
        html: createWelcomeEmailTemplate(name,clienturl)    
        
    })
      if (error) {
        console.error("Error sending welcome email:", error);
      } else {
        console.log("Welcome email sent successfully:", data);
      }




};