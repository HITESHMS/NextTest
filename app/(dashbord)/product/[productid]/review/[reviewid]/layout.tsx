export default function reiviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>reiview title</h1>
      {children}
    </>
  );
}