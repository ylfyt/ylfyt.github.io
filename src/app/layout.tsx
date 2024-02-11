import RootProvider from "@/contexts/root";
import "@/index.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning className="dark">
			<head>
				<link rel="icon" type="image/svg+xml" href="/favicon.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Yudi Alfayat</title>
			</head>
			<body className="min-h-screen text-dark dark:text-light bg-light dark:bg-dark">
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	);
}
