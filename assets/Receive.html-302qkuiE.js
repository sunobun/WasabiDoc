import{_ as d}from"./Logo_without_text_with_bg_dark_with_yt-D8lqXhN0.js";import{_ as c,a as h}from"./AddressAwaitingPayment-B9ABKMdf.js";import{_ as u,r,o as p,c as b,a as e,d as a,w as i,b as t,e as l}from"./app-UXPNl8Ag.js";const y={},m=e("h1",{id:"receive-bitcoin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#receive-bitcoin"},[e("span",null,"Receive bitcoin")])],-1),w={class:"table-of-contents"},g={href:"https://youtu.be/Wjc00GBn-OQ",title:"Receive bitcoin in Wasabi Wallet",target:"_blank",rel:"noopener noreferrer"},f=e("img",{src:d,alt:"Receive bitcoin in Wasabi Wallet"},null,-1),v=l('<h2 id="generating-addresses-step-by-step" tabindex="-1"><a class="header-anchor" href="#generating-addresses-step-by-step"><span>Generating addresses step-by-step</span></a></h2><ol><li>Start Wasabi and open the wallet that you want to receive coins into.</li><li>Click the <code>Receive</code> button in the main view&#39;s top right corner.</li><li>Type in the name of the entities who know that this address is yours. If you have already used a label before, simply choose it from the suggested labels.</li></ol><p><img src="'+c+'" alt="Receive label in Wasabi" title="Receive label in Wasabi"></p><ol start="4"><li>Press <code>Continue</code> and the wallet will generate a new address.</li></ol><p><img src="'+h+'" alt="Bitcoin address in Wasabi" title="Bitcoin address in Wasabi"></p><h2 id="bitcoin-public-keys-and-addresses" tabindex="-1"><a class="header-anchor" href="#bitcoin-public-keys-and-addresses"><span>Bitcoin public keys and addresses</span></a></h2>',6),k={href:"https://en.wikipedia.org/wiki/Public-key_cryptography",target:"_blank",rel:"noopener noreferrer"},_={href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm",target:"_blank",rel:"noopener noreferrer"},x={href:"https://en.wikipedia.org/wiki/Cryptographic_hash_function",target:"_blank",rel:"noopener noreferrer"},T=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,'Wasabi Wallet does not "store your money", rather it stores your public keys and an encrypted secret that requires your password to derive the private keys. It creates addresses for receiving bitcoin, and it signs transactions that spend your bitcoin.')],-1),C=e("h2",{id:"the-problem-with-address-reuse",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-problem-with-address-reuse"},[e("span",null,"The problem with address reuse")])],-1),W=l('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This is why Wasabi removes the address from the <code>Addresses Awaiting Payment</code> list as soon as it has received a coin.</p></div><h2 id="the-importance-of-labeling" tabindex="-1"><a class="header-anchor" href="#the-importance-of-labeling"><span>The importance of labeling</span></a></h2><p>Satoshis are the base unit currency of the Bitcoin network and are truly fungible, meaning that any 100 000 000 satoshis are always equal to 1 bitcoin. Just like with gold atoms, it doesn&#39;t matter which specific gold atoms you have, as long as it&#39;s gold, it&#39;s gold. However, an unspent transaction output, a bitcoin, is a chunk of money and is not fungible, because it has a different amount of satoshis in it, a different public key locking it up, a unique transaction history, and a unique index number. This is just like a gold coin, with a unique amount of gold atoms, and either a pretty mintage or an old chipped broken coin. Because UTXOs are not fungible, it is very important to know exactly which coin is which, and that is done by carefully labeling.</p><p>For example, if I create a new address to receive a <code>0.5 BTC</code> payment from Andrew for a laptop that I sold to him then the label has to be: <code>Andrew</code>.</p><p>The label is not for describing the <code>reason for payment</code>, but rather to list those who know that this address is yours. Understanding this difference between labeling an address and describing a transaction is very important for your privacy.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>In Wasabi it is mandatory to give every receive address a label of those who know that this address is yours, so that later you know what to do with it, and it also helps the auto coin selection algorithm when sending.</p></div><h3 id="clusters" tabindex="-1"><a class="header-anchor" href="#clusters"><span>Clusters</span></a></h3><p>Following the previous example, if I have to send a fraction (<code>0.1 BTC</code>) of the previously received coin to Charlie then in the <code>Send</code> tab the observers should be: <code>Charlie</code>. In that way, the change (<code>0.4 BTC</code>) will be known by Andrew and Charlie because they both will be able to follow the change. That&#39;s exactly what Wasabi displays in the coins list (cluster column), Wasabi tells us who are the ones that know about each of our coins in order to allow us to decide what to do with the coins.</p><p>Let&#39;s take a look at another example: Imagine you have three coins, one known by Alice, one known by a KYC exchange and finally one known by Charlie. Imagine you need to sell a few sats to Charlie, which coin/s should you send? The obvious selection is the one already known by Charlie because by doing that he cannot learn anything new about our wallet, moreover, neither Alice nor the KYC exchange can learn anything new! But what if the coin is not big enough and we need to use more than one coin? You can use the one known by Alice or the one known by the KYC exchange, but are you okay with Charlie knowing about your deposit/withdrawal from the exchange? Are you okay with Alice knowing about your deal with Charlie? In case none of those combinations are acceptable for you then you should CoinJoin your coins.</p><h3 id="coinjoined-coins" tabindex="-1"><a class="header-anchor" href="#coinjoined-coins"><span>Coinjoined coins</span></a></h3>',10),B=l(`<h3 id="final-words-about-labels-and-examples" tabindex="-1"><a class="header-anchor" href="#final-words-about-labels-and-examples"><span>Final words about labels and examples</span></a></h3><p>4 coins with good labels:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Andrew
David, Me
Carlos, Sofia
KYC exchange
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 coins with bad labels:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Payment from Andrew for my laptop
From my old wallet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>In case we take the two first coins with good labels and send them to María, look how the change cluster will be displayed: <code>Maria, Andrew, David, Me</code> (these people know about the coin). Now, look how this will be displayed if I use the two coins with bad labels: <code>Maria, Payment from Andrew for my laptop, From my old wallet</code> (Is this high-quality info about the privacy level of my coin? Not really.).</p><p>So, think about coins, think about who knows and make sure to make decisions about privacy based on what you are going to reveal and to whom. Wasabi doesn&#39;t care about why you transact with bitcoins, it only cares about who you transact with because this is what helps you reclaim your privacy.</p>`,7);function I(A,R){const n=r("router-link"),o=r("ExternalLinkIcon"),s=r("RouteLink");return p(),b("div",null,[m,e("nav",w,[e("ul",null,[e("li",null,[a(n,{to:"#generating-addresses-step-by-step"},{default:i(()=>[t("Generating addresses step-by-step")]),_:1})]),e("li",null,[a(n,{to:"#bitcoin-public-keys-and-addresses"},{default:i(()=>[t("Bitcoin public keys and addresses")]),_:1})]),e("li",null,[a(n,{to:"#the-problem-with-address-reuse"},{default:i(()=>[t("The problem with address reuse")]),_:1})]),e("li",null,[a(n,{to:"#the-importance-of-labeling"},{default:i(()=>[t("The importance of labeling")]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#clusters"},{default:i(()=>[t("Clusters")]),_:1})]),e("li",null,[a(n,{to:"#coinjoined-coins"},{default:i(()=>[t("Coinjoined coins")]),_:1})]),e("li",null,[a(n,{to:"#final-words-about-labels-and-examples"},{default:i(()=>[t("Final words about labels and examples")]),_:1})])])])])]),e("p",null,[e("a",g,[f,a(o)])]),v,e("p",null,[t("The Bitcoin protocol utilizes "),e("a",k,[t("public key cryptography"),a(o)]),t(" to defend and verify the property rights of the individuals holding and transacting bitcoin. A private key is a large random number that should be kept secret. With the "),e("a",_,[t("elliptic curve digital signature algorithm"),a(o)]),t(", based on the private key you can calculate a public key. If someone has only the public key, it is computationally infeasible [pretty much impossible] to calculate the private key. Whoever knows the private key can calculate a cryptography signature over a message, which proves that the private key was known by the signer, without actually revealing the secret.")]),e("p",null,[t("For data size efficiency, in Bitcoin, the public key is "),e("a",x,[t("hashed"),a(o)]),t(" and encoded into a "),a(s,{to:"/using-wasabi/BIPs.html#bip-173-base32-address-format-for-native-v0-16-witness-outputs"},{default:i(()=>[t("bech32")]),_:1}),t(' address. This address commits to the public key, which commits to the private key. In a Bitcoin transaction, the output creates a new unspent transaction output which is "locked up" by an address. The input of the transaction spends a UTXO by providing a valid signature of the public key that the address committed to.')]),T,C,e("p",null,[t("Whenever you use the same address to lock up different UTXOs, then all these coins can be spent by anyone who knows the same private key. This makes it obvious for anyone that this one entity [you] owns all these coins, which is very bad for privacy. The first rule of Bitcoin privacy is "),a(s,{to:"/why-wasabi/AddressReuse.html"},{default:i(()=>[t("never reuse addresses")]),_:1}),t("!")]),W,e("p",null,[t("Those inputs that participate in a Wasabi "),a(s,{to:"/using-wasabi/CoinJoin.html"},{default:i(()=>[t("coinjoin")]),_:1}),t(" transaction get transformed into arbitrary sized outputs with an increased anonymity score. By default, Wasabi tries to create big coinjoin transactions with many inputs and outputs, but the individual coins' privacy varies depending on the final amounts and values of the inputs and outputs of other participants. The higher the anonymity score of a coin, the harder it is for an observer to know who that coin belongs to. For that reason, coins with a high anonymity score are usually the ones preferred when making a payment transaction. When coins achieve the target anonymity score of the selected coinjoin strategy, their values will the visible under the Privacy Progress bar.")]),B])}const S=u(y,[["render",I],["__file","Receive.html.vue"]]),N=JSON.parse('{"path":"/using-wasabi/Receive.html","title":"Receive","lang":"en-US","frontmatter":{"title":"Receive","description":"A step-by-step guide on how to receive bitcoin in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."},"headers":[{"level":2,"title":"Generating addresses step-by-step","slug":"generating-addresses-step-by-step","link":"#generating-addresses-step-by-step","children":[]},{"level":2,"title":"Bitcoin public keys and addresses","slug":"bitcoin-public-keys-and-addresses","link":"#bitcoin-public-keys-and-addresses","children":[]},{"level":2,"title":"The problem with address reuse","slug":"the-problem-with-address-reuse","link":"#the-problem-with-address-reuse","children":[]},{"level":2,"title":"The importance of labeling","slug":"the-importance-of-labeling","link":"#the-importance-of-labeling","children":[{"level":3,"title":"Clusters","slug":"clusters","link":"#clusters","children":[]},{"level":3,"title":"Coinjoined coins","slug":"coinjoined-coins","link":"#coinjoined-coins","children":[]},{"level":3,"title":"Final words about labels and examples","slug":"final-words-about-labels-and-examples","link":"#final-words-about-labels-and-examples","children":[]}]}],"git":{"updatedTime":1684228793000},"filePathRelative":"using-wasabi/Receive.md"}');export{S as comp,N as data};