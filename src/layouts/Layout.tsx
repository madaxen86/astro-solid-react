export default function ReactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>React Layout</h1>
      <main id="react-layout">{children}</main>;
    </>
  );
}
