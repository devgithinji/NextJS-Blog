import {MongoClient} from "mongodb";


const handler = async (req, res) => {
    if (req.method === 'POST') {
        const {email, name, message} = req.body;
        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({
                message: 'Invalid input.'
            });
            return;
        }

        //store in database
        const newMessage = {email, name, message}


        let client;

        try {
            client = await MongoClient.connect('mongodb+srv://user:Densoft1@cluster0.lorgx6p.mongodb.net/next-blog?retryWrites=true&w=majority');
        } catch (e) {
            res.status(500).json({message: 'Could not connect to database'})
            return;
        }

        const db = client.db()

        try {
            const result = await db.collection('messages').insertOne(newMessage)
            newMessage.id = result.insertedId;
        }catch (e) {
            await client.close()
            res.status(500).json({message: 'Storing message failed'})
            return;
        }

        await client.close();

        res.status(201).json({message: 'Successfully stored message!', messages: newMessage})
    }
}
export default handler;