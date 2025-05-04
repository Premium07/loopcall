import { StreamChat } from "stream-chat";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error("STREAM API KEY and STREAM SECRET are required");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    throw error;
  }
};

export const generateStreamToken = async (userId) => {
  try {
    // ensure userId is a string
    const userIdString = userId.toString();
    const token = streamClient.createToken(userIdString);
    return token;
  } catch (error) {
    throw error; // handle the error as needed
  }
};

export default streamClient;
