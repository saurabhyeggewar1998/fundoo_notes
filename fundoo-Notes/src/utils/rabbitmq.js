import amqp from 'amqplib';

export const sender = async (data) => {
    try {
        const strData = JSON.stringify(data);
        const amqpServer = "amqp://localhost"
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();
        await channel.assertQueue("register");
        channel.sendToQueue("register", Buffer.from(strData));
        console.log(`Job sent successfully ${strData}`);
    }
    catch (ex) {
        console.error(ex)
    }
}