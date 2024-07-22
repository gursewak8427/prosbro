import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // const data = await req.json();
    // const response = await axios.post('http://127.0.0.1:8000/authentication/login/', data);
    // const res = NextResponse.json({ status: 'success', data: response.data });
    const res = NextResponse.json({ status: 'success' });
    // res.cookies.set('authToken', response.data['token'], {
    res.cookies.set('authToken', 'token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
    });
    return res;
  } catch (error) {
    const { status, data } = error.response;
    return new NextResponse(
      JSON.stringify({ error: data }),
      { status: status, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
