export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" data-cursor="native">
      {children}
    </div>
  );
}
