import nodemailer  from  "nodemailer";
import logger from "../config/logger";


export const mailSend =(userMailID, token) => {
    const transport = nodemailer.createTransport({

       
            service:"gmail",
            auth:  {
                user: process.env.SENDE_ID,
                pass: process.env.PASSWORD
            } 
    })
    const mailoption = {
        from: process.env.SENDE_ID,
        to: userMailID,
        subject: "Password Rest Link ",
        html: `<h1>Hello,<br>Click the Link  to rest your password</br><h1>href=http://localhost:3000/${token}</h1>`
    }
    return new Promise((resolve,reject)=>{
        transport.sendMail(mailoption,(err,info)=> {
            if(err){
                logger.log('error', err);
                //throw new Error("Something went wrong while sending reset password link....")
                return reject('Something went wrong while sending reset password link....');
            }
            else{
                logger.log('info', info);
                return resolve('Reset password link send successfully');
            }
        })

    });
    
}

    
export const mailSend1 =(userMailID, msg) => {
    const transport = nodemailer.createTransport({

       
            service:"gmail",
            auth:  {
                user: process.env.SENDE_ID,
                pass: process.env.PASSWORD
            } 
    })
    const mailoption2 = {
        from: process.env.SENDE_ID,
        to: userMailID,
        subject: "Password Rest Link ",
        html: `<h1>Hello,<br>Registration is done</br><h1>`
    }
    return new Promise((resolve,reject)=>{
        transport.sendMail(mailoption2,(err,info)=> {
            if(err){
                logger.log('error', err);
                //throw new Error("Something went wrong while sending reset password link....")
                return reject('Something went wrong ');
            }
            else{
                logger.log('info', info);
                return resolve('Registration done  successfully');
            }
        })

    });
    
}

    