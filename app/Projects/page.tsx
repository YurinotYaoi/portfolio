import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Yuri | Projects',
};

export default function Projects() {

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem 1.5rem",
        fontFamily: "Arial, sans-serif",
      }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Projects</h1>
    </main>
  );
}
