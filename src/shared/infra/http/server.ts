import 'reflect-metadata';
import 'dotenv/config';
import '@shared/container';
import { app } from './app';


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server open in port: ${PORT}.`);
});
