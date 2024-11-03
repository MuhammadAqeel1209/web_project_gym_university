import { connectDB } from '@/app/libs/mongodb';
import UserRegistration from "@/app/Model/Table";

export const POST = async (request) => {
  try {
    await connectDB(); // Using connectDB function
    const { name, email, phoneNumber, gender, packageType, price, message } = await request.json();
    console.log("Request", request);
    const newTable = await UserRegistration.create({ name, email, phoneNumber, gender, packageType, price, message });
    return new Response(JSON.stringify({
      success: true,
      status: 200,
      message: "Registration Complete",
      // data: newTable
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({
      success: false,
      status: 500,
      error: "Internal Server Error"
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500
    });
  }
};

export const GET = async (request) => {
  try {
    await connectDB();
    const inventory = await UserRegistration.find();
    return new Response(JSON.stringify({
      success: true,
      status: 200,
      inventory
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({
      success: false,
      status: 500,
      error: "Internal Server Error"
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500
    });
  }
};
