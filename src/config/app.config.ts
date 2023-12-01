import dotenv from 'dotenv';

dotenv.config({ path: process.env.NODE_ENV != 'production' ? `.env.${process.env.NODE_ENV}` : '.env' });

export const port = process.env.PORT;
export const httpsPort = process.env.HTTPS_PORT;
export const nodeMailerPort = <string>process.env.NODEMAILER_PORT;
export const nodeMailerHost = <string>process.env.NODEMAILER_HOST;
export const nodeMailerUser = <string>process.env.NODEMAILER_SENDER;
export const nodeMailerPass = <string>process.env.NODEMAILER_PASS;
export const nodeMailerReceiver = <string>process.env.NODEMAILER_RECEIVER;
export const mongoDBConnectionString = <string>process.env.MONGODB_CONNECTION_STRING;
export const openAIApiKey = <string>process.env.OPENAI_API_KEY;
export const googleClientID = <string>process.env.GOOGLE_CLIENT_ID;
export const googleClientSecret = <string>process.env.GOOGLE_CLIENT_SECRET;
export const googleCallbackURL = <string>process.env.GOOGLE_CALLBACK_URL;
export const googleWebCallbackURL = <string>process.env.GOOGLE_WEB_CALLBACK_URL;
export const jwtSecret = <string>process.env.JWT_SECRET;
export const appScheme = <string>process.env.APP_SCHEME;
export const appCallbackURL = <string>process.env.APP_CALLBACK_URL;
export const stripePublishableKey = <string>process.env.STRIPE_PUBLISHABLE_KEY;
export const stripeSecretKey = <string>process.env.STRIPE_SECRET_KEY;
export const stripeCurrency = <string>process.env.STRIPE_CURRENCY;
export const stripeWebhookSecret = <string>process.env.STRIPE_WEBHOOK_SECRET;
export const stripeSubscriptionProductId = <string>process.env.STRIPE_SUBSCRIPTION_PRODUCT_ID;
export const elevenLabsAPIKey = <string>process.env.ELEVENLABS_API_KEY;
export const elevenLabsBaseURL = <string>process.env.ELEVENLABS_BASE_URL;
export const appleTeamID= <string>process.env.APPLE_TEAM_ID;
export const appleSignInKeyID = <string>process.env.APPLE_SIGN_IN_KEY_ID;
export const appleSignInKeyFileName = <string>process.env.APPLE_SIGN_IN_KEY_FILENAME;
export const appleSignInServiceID = <string>process.env.APPLE_SIGN_IN_SERVICE_ID;
export const appleSignInCallbackURL= <string>process.env.APPLE_SIGN_IN_CALLBACK_URL;
export const appleSignInWebCallbackURL= <string>process.env.APPLE_SIGN_IN_WEB_CALLBACK_URL;
export const googleStoragePostsBucketName = <string>process.env.GOOGLE_STORAGE_POSTS_BUCKET_NAME;
export const googleStorageProfileBucketName = <string>process.env.GOOGLE_STORAGE_PROFILE_BUCKET_NAME;
export const googleCloudKeyFileName= <string>process.env.GOOGLE_CLOUD_KEYFILE_NAME;
export const whisperinChatServiceURL=<string>process.env.WHISPERIN_CHAT_SERVICE_URL;
export const frontendOrigin=<string>process.env.FRONTEND_ORIGIN