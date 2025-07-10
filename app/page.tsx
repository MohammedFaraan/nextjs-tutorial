import Hello from "./(root)/components/Hello";

export default async function Home() {
  console.log('Where am I -- Server | Client')
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 second delay

  return (
    <div>
      <h1 className="text-green-500 font-bold">Welcome to Next.js</h1>
      <Hello />
    </div>
  );
}
