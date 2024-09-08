import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start font-[family-name:var(--font-geist-mono)">
        <h1 className="text-xl font-bold">BlackFriday, Say Hi!</h1>
        <div className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p className="mb-2">
          Nếu một ngày bạn bị lạc đường, điều đó không đáng sợ. Cái đáng sợ chính là không biết mình đi về đâu...
          </p>
          <Link href="/dashboard">Rõ rồi thì cứ đi thôi →</Link>
        </div>
      </main>
    </div>
  );
}
