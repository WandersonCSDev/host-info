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
        
        <label htmlFor="search">Buscar um servidor: </label> <br />
        <input type="text" name="search"/> <br />
        <button type="submit"> Buscar </button>

        <div>
          <h3>Resultado da busca:</h3>
        </div>

        <form action="#" method="get">
          <input type="text" name="cliente" placeholder="Cliente" /> <br />
          <input type="text" name="parceiro" placeholder="Parceiro" /> <br />
          <input type="text" name="versao" placeholder="Versão" /> <br />
          <input type="text" name="licenca" placeholder="Licença" /> <br />
          <input type="text" name="DNS" placeholder="DNS" /> <br />
          <input type="text" name="ip-publico" placeholder="IP Público" /> <br />
          <input type="text" name="zabbix" placeholder="Zabbix" /> <br />
          <input type="text" name="backup" placeholder="Backup" /> <br />
          <input type="text" name="vpnpfense" placeholder="VPN PFSense" /> <br />
          <input type="text" name="vpnopennew" placeholder="VPN Opennew" /> <br />
          <input type="text" name="vpnunion" placeholder="VPN Union" /> <br />
          <input type="text" name="iplocal" placeholder="IP Local" /> <br />
          <textarea name="observacao" placeholder="Observação" ></textarea> <br />
          <button type="reset"> Limpar </button>
        </form>
      </main>
    </>
  )
}
