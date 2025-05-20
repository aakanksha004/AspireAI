import { getCoverLetters } from "@/actions/cover-letter";
import CoverLetterCard from "./_components/cover-letter-card";
import CoverLetterHeader from "./_components/cover-letter-header";
// import CoverLetterHeader from "./_components/CoverLetterHeader"; // no props!

export default async function HomePage() {
  const letters = await getCoverLetters();

  return (
    <main className="p-14 w-full mx-auto">
      <CoverLetterHeader /> {/* no props here */}

      <div className="flex flex-col gap-4">
        {letters.map((letter) => (
          <CoverLetterCard key={letter.id} letter={letter} />
        ))}
      </div>
    </main>
  );
}
