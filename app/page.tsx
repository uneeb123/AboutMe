import Image from "next/image";

function Abstract() {
  return (
    <div className="abstract">
      <i>
        {`I'm not trying to be like Satoshi Nakamoto, I just wish for people to judge me
        based on my work and nothing else.`}
      </i>
    </div>
  );
}

function TableOfContents() {
  return (
    <nav role="navigation" className="toc">
      <h2>Contents</h2>
      <ol>
        <li>
          <a href="#projects">Projects</a>
          <ol>
            <li>
              <a href="#virtuoso-club">Virtuoso Club (2024)</a>
            </li>
            <li>
              <a href="#blockalizer">Blockalizer (2023)</a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#work-history">Work History</a>
          <ol>
            <li>
              <a href="#coinbase">Coinbase (2020-2022)</a>
            </li>
            <li>
              <a href="#amazon-microsoft">Amazon & Microsoft (2015-2018)</a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#writings">Writings & Research</a>
          <ol>
            <li>
              <a href="#account-abstraction">
                A complete guide on account abstraction
              </a>
            </li>
            <li>
              <a href="#game-theory">Game theory and consumer crypto</a>
            </li>
          </ol>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ol>
    </nav>
  );
}

function Content() {
  return (
    <main>
      <article>
        <h2 id="projects">Projects</h2>
        <h3 id="virtuoso-club">Virtuoso Club</h3>
        <p>
          I&apos;m currently building{" "}
          <a href="https://virtuoso.club/" target="_blank">
            Virtuoso Club
          </a>
          : a web3 chess puzzle platform designed to be open and transparent.
        </p>
        <figure>
          <Image
            src="/virtuoso-club.png"
            alt="Virtuoso Club"
            width="1000"
            height="1000"
          />
        </figure>
        <h3 id="blockalizer">Blockalizer</h3>
        <p>
          Evan Luza (Cool Cats founder and brand designer) and I teamed up to
          build{" "}
          <a
            href="https://opensea.io/collection/blockalizer-chroma"
            target="_blank"
          >
            Blockalizer
          </a>
          , a generative art project that issues NFT based on your onchain
          history.
        </p>
        <figure>
          <Image
            src="/blockalizer.webp"
            alt="Blockalizer"
            width="1000"
            height="1000"
          />
        </figure>
        <h2 id="work-history">Work History</h2>
        <h3 id="coinbase">Coinbase</h3>
        <p>
          I was responsible for building onramp integrations. I worked on
          Braintree (Paypal) integration as well as Apple Pay and Google Pay.
          Hooking up to 3rd party APIs is easy, but doing them at scale is
          challenging. Tiniest of bugs can result in millions of dollars of lost
          revenue and brand deterioration. During my time, I also pitched an
          idea to the executive leadership team to build a competitor product to
          Moonpay - later called Coinbase Pay.
        </p>
        <h3 id="amazon-microsoft">Amazon & Microsoft</h3>
        <p>
          I started my career at Microsoft and later transitioned to Amazon.
          Both giant organizations with lots of hierarchy and process. Despite
          all the criticism corporations get, they teach you how to be concise
          with communication and how to coordinate within a team effectively. I
          got familiar with best practices in software development; ranging from
          naming variables all the way to deploying code reliably.
        </p>
        <h2 id="writings">Writings & Research</h2>
        <h3 id="account-abstraction">
          A complete guide on account abstraction
        </h3>
        <p>
          For the longest time, crypto had limited use-cases. Big part of this
          was simply UX constraints - long wait times, wallet awkwardness, poor
          onboarding. We have come a long way since.{" "}
          <a
            href="https://medium.com/@0xasdf_eth/a-complete-guide-on-account-abstraction-b885542e7552"
            target="_blank"
          >
            In this article
          </a>
          , I explore how wallets will continue to transform in the coming years
          and how they&apos;ll evolve.
        </p>
        <h3 id="game-theory">Game Theory and Consumer Crypto</h3>
        <p>
          Crypto has disrupted money and financial markets, but I believe that
          we will soon see its use-cases expand to the mainstream Internet
          products - which will benefit from better economic models.{" "}
          <a
            href="https://medium.com/@0xasdf_eth/game-theory-and-consumer-crypto-b044c97ad7b3"
            target="_blank"
          >
            In this article
          </a>
          , I expand on how products broadly on the Internet can benefit from
          adopting web3 primitives.
        </p>
        <h2 id="contact">Contact</h2>
        <p>hi@asdf.codes</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <a href="https://twitter.com/0xasdf_eth" target="_blank">
            <Image src="/twitter.png" alt="Twitter" width="20" height="20" />
          </a>
          <a
            href="https://warpcast.com/0xasdf"
            target="_blank"
            style={{ marginLeft: "5px" }}
          >
            <Image
              src="/farcaster.png"
              alt="Farcaster"
              width="20"
              height="20"
            />
          </a>
        </div>
      </article>
    </main>
  );
}

export default function Home() {
  return (
    <>
      <Abstract />
      <TableOfContents />
      <Content />
    </>
  );
}
