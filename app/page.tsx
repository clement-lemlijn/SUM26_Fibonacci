import FibCard from "@/app/components/FibCard";
import FibTable from "@/app/components/FibTable";


export default function Home() {
  return (
      <main className="p-10 min-h-screen">
        <h1 className="text-4xl font-bold mb-8">Dashboard Fibonacci</h1>

        <FibCard title="Suite de Fibonacci" subtitle="">
          <FibTable />
        </FibCard>

        {}
      </main>
  );
}