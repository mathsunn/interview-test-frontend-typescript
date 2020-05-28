import React from "react";
import Head from "next/head";
import Company from "../../components/User/Company";
import Information from "../../components/User/Information";
import Receipt from "../../components/User/Receipt";
import LastActivities from "../../components/User/LastActivities";
import Block from "../../components/Block";
import Link from "next/link";

const Index: React.FC<{}> = () => (
  <div className="container" id="dashboard">
    <Head>
      <title>Easyblue: test frontend</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div id="menu">
      <img className="logo" src="/img/icons/logo.svg" />
    </div>

    <div id="main">
      <div className="container">
        <Information />

        <div id="welcome">
          Retrouver ici la liste des contrats que vous avez souscrit.
        </div>

        <div className="column left">
          <Block title="Moi et ma société">
            <Company />
          </Block>
          <Block title="Mon moyen de paiement">
            <p>CB visa</p>
            <p>**** ****</p>
            <div className="actions">
              <Link href="/">Editer mon mode de paiement</Link>
            </div>
          </Block>
          <Block title="Mes dernières quittances">
            <Receipt />
          </Block>
        </div>

        <div className="column right">
          <Block title="Mes dernières activités">
            <LastActivities count={5} />
          </Block>
        </div>

        <div id="footer"></div>
      </div>
    </div>
  </div>
);

export default Index;
