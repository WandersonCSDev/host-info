import Head from 'next/head'
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import tema from '../ui/Themes/theme';
import Title from '@/ui/components/title/title';

export default function Home() {
  return (
    <>
      <Head>
        <title>Host Info</title>
        <meta name="description" content="Gerenciador de informações dos servidores de telefonia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Title title="Host Info" subtitle="Dados do Servidor"/>
      </main>
    </>
  )
}
