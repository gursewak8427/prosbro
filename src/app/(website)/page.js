import { redirect } from 'next/navigation';

export default async function Home() {
  redirect('/my-projects?search=&tab=all&view=list');
}
