import { AppShell, MantineProvider } from "@mantine/core";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MantineProvider defaultColorScheme="light">
    <AppShell
    header={{ height: 100}}
    >
      <AppShell.Header style={{ width: '100%' }}>
        <Header/>
      </AppShell.Header>
      
      <AppShell.Main>
        {children}
      </AppShell.Main>
      <Footer/>
    </AppShell>
    </MantineProvider>
  );
}
