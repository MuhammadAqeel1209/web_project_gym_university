import { NextResponse } from 'next/server';
import { connectDB } from '@/app/libs/mongodb';
import Table  from "@/app/Model/Table";

export async function PUT(request, { params }) {
  await connectDB();
  const { id } = params;
  const data = await request.json();
  console.log(id)
  try {
    await Table.findByIdAndUpdate(id, data);
    return NextResponse.json({ message: "Record updated" }, { status: 200 });
  } catch (error) {
    console.error("Error updating record:", error);
    return NextResponse.error(new Error("Failed to update record"), { status: 500 });
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectDB();
  try {
    const table = await Table.findOne({ _id: id });
    if (!table) {
      return NextResponse.error(new Error("Record not found"), { status: 404 });
    }
    return NextResponse.json({ table }, { status: 200 });
  } catch (error) {
    console.error("Error fetching record:", error);
    return NextResponse.error(new Error("Failed to fetch record"), { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  await connectDB();
  try {
    const deletedRecord = await Table.findByIdAndDelete(id);
    if (!deletedRecord) {
      return NextResponse.error(new Error("Record not found"), { status: 404 });
    }
    return NextResponse.json({ message: "Record deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting record:", error);
    return NextResponse.error(new Error("Failed to delete record"), { status: 500 });
  }
}
