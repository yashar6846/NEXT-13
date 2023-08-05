import { NextResponse } from "next/server";

export async function POST(req, res, next) {
    const {title, description}= await req.json();
    await connectMongoDB()
    await Topic.create({title, description});
    return NextResponse.json({message: "POST"}, {status: 201})
}