import emailjs from '@emailjs/browser';

const public_key = "9_66Gz36slYB-nUQo"
const serviceID="service_s4q446u"
const templateID="template_46pu88v"

emailjs.init(public_key)

const sendEmail = async(from_name:string, from_email:string, message:string, timestamp:string)=>{
    try {
        const data = {
            from_email:from_email,
            from_name:from_name,
            message:message,
            timestamp:timestamp
        }
        await emailjs.send(serviceID, templateID, data);
        // console.log('Email sent successfully!');
        return true;
      } catch (error) {
        // console.error('Error sending email:', error);
        return false;
      }
}

export default sendEmail


