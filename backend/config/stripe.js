import dotenv from 'dotenv';
dotenv.config()
import Stripe from 'stripe';
const stripe =new Stripe(process.env.STRIPE_SECRETKEY)

export default stripe;