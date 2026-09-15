// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function ParticipatePage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">About TEDxUNSW</h1>
      <p className="mt-4">This is the about the participatePage content...</p>
    </main>
  );
}
