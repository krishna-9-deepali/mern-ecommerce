import { RiExchangeFill, RiFontSize } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
const Footer = () => {
  return (
    <footer>
      <div className="footer_contents">
        <div className="footer_container flex-wrap lg:flex-nowrap ">
          <div className="footer_column ">
            <h3 style={{ width: "245px" }}>ONLINE SHOPPING</h3>

            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Card</a>
            <a href="#">E-commerce Insider</a>
          </div>

          <div className="footer_column">
            <h3 style={{ width: "245px" }}>CUSTOMER POLICIES </h3>

            <a href="#">Contact Us</a>
            <a href="#">FAQ</a>
            <a href="#">T&amp;C</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Track Orders</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation</a>
            <a href="">Returns</a>
            <a href="">Privacy policy</a>
            <a href="">Grievance Officer</a>
          </div>

          <div className="footer_column">
            <h3 style={{ width: "245px" }}>USEFUL LINKS</h3>

            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Site Map</a>
            <a href="#">Corporate Information</a>
            <a href="#">Whitehat</a>
            <a href="#">Cleartrip</a>
          </div>
          <div className="footer_column ">
            <div className="orignal_return exchangeGuarenty">
              <div>
                {/* <MdOutlineSecurity
                  size={50}
                  style={{ color: "rgb(136 136 143)" }}
                /> */}
                <img
                  src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                  style={{
                    width: "48px",
                    height: "40px",
                  }}
                />
              </div>
              <div>
                <strong>100% ORIGINAL</strong>
                guarantee for all products.
              </div>
            </div>
            <div className="orignal_return exchangeGuarenty">
              <div>
                {/* <RiExchangeFill
                  size={50}
                  style={{ color: "rgb(136 136 143)" }}
                /> */}
                <img
                  src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
                  style={{ width: "48px", height: "49px" }}
                />
              </div>
              <div>
                <strong> Return within 14days </strong> of receiving your order
              </div>
            </div>
            <div className="orignal_return exchangeGuarenty">
              EXPERIENCE E-COMMERCEAPP ON MOBILE
            </div>
            <div className="orignal_return exchangeGuarenty">
              <div className="flex flex-wrap">
                <img
                  class="desktop-androidDownLink"
                  src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                  style={{ width: "140px", height: "42px" }}
                ></img>
                <img
                  class="desktop-iOSDownLink"
                  src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                  style={{
                    width: "123px",
                    height: "42px",
                    paddingLeft: "20px",
                  }}
                ></img>
              </div>
            </div>
            <div className="orignal_return exchangeGuarenty">KEEP IN TOUCH</div>
            <div className="orignal_return exchangeGuarenty">
              <img
                src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"
                style={{ width: "20px", height: "20px" }}
              />
              <img
                src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"
                style={{ width: "20px", height: "20px" }}
              ></img>
              <img
                src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"
                style={{ width: "20px", height: "20px" }}
              ></img>
              <img
                src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"
                style={{ width: "20px", height: "20px" }}
              ></img>
            </div>
          </div>
        </div>
        <div className="copyright  ">
          <div>
            In case of any concern, <a href="">Contact Us</a>
          </div>
          <div>© 2024 www.E-commerce.com. All rights reserved.</div>
          <div>A E-commerce company</div>
        </div>
        <hr />
        <address className="address_column">
          <div className="footer_column">
            <h3>Registered Office Address</h3>

            <div>Buildings Alyssa,</div>
            <div>Begonia and Clover situated in Embassy Tech Village, </div>
            <div>Outer Ring Road,</div>
            <div>Devarabeesanahalli Village</div>
            <div>Varthur Hobli,</div>
            <div>Bengaluru – 560103, India</div>
            <div>CIN: U72300KA2007PTC041799</div>
            <div>
              Telephone: <a href="">+91-80-61561999</a>
            </div>
          </div>
        </address>
        <div
          class="desktop-gyanContainer"
          style={{ fontSize: "14px", color: "#94969F" }}
          data-reactid="354"
        >
          <hr />
          <h1>
            <strong>ONLINE SHOPPING MADE EASY AT E-COMMERCE</strong>
          </h1>
          <p>
            If you would like to experience the best of online shopping for men,
            women and kids in India, you are at the right place. E-commerce is
            the ultimate destination for fashion and lifestyle, being host to a
            wide array of merchandise including{" "}
            <a class="seolink" href="/clothing">
              clothing
            </a>
            , footwear, accessories, jewellery, personal care products and more.
            It is time to redefine your style statement with our treasure-trove
            of trendy items. Our online store brings you the latest in designer
            products straight out of fashion houses. You can shop online at
            E-commerce from the comfort of your home and get your favourites
            delivered right to your doorstep.
          </p>
          <h3>
            <strong>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</strong>
          </h3>
          <p>
            Be it clothing, footwear or accessories, E-commerce offers you the
            ideal combination of fashion and functionality for men, women and
            kids. You will realise that the sky is the limit when it comes to
            the types of outfits that you can purchase for different occasions.
          </p>
          <ul>
            <li>
              <strong>Smart men’s clothing</strong> - At E-commerce you will
              find myriad options in smart formal shirts and trousers, cool
              T-shirts and jeans, or kurta and pyjama combinations for men. Wear
              your attitude with printed T-shirts. Create the back-to-campus
              vibe with varsity T-shirts and distressed jeans. Be it gingham,
              buffalo, or window-pane style, checked shirts are unbeatably
              smart. Team them up with chinos, cuffed jeans or cropped trousers
              for a smart casual look. Opt for a stylish layered look with biker
              jackets. Head out in cloudy weather with courage in
              water-resistant jackets. Browse through our innerwear section to
              find supportive garments which would keep you confident in any
              outfit.
            </li>
            <li>
              <strong>Trendy women’s clothing</strong> -{" "}
              <a class="seolink" href="/shop/women">
                Online shopping for women
              </a>{" "}
              at E-commerce is a mood-elevating experience. Look hip and stay
              comfortable with chinos and printed shorts this summer. Look hot
              on your date dressed in a little black dress, or opt for red
              dresses for a sassy vibe. Striped dresses and T-shirts represent
              the classic spirit of nautical fashion. Choose your favourites
              from among Bardot, off-shoulder, shirt-style, blouson, embroidered
              and peplum tops, to name a few. Team them up with skinny-fit
              jeans, skirts or palazzos. Kurtis and jeans make the perfect
              fusion-wear combination for the cool urbanite. Our grand{" "}
              <a class="seolink" href="/saree">
                sarees
              </a>{" "}
              and lehenga-choli selections are perfect to make an impression at
              big social events such as weddings. Our salwar-kameez sets, kurtas
              and Patiala suits make comfortable options for regular wear.
            </li>
            <li>
              <strong>Fashionable footwear</strong> - While clothes maketh the
              man, the type of footwear you wear reflects your personality. We
              bring you an exhaustive lineup of options in casual shoes for men,
              such as sneakers and loafers. Make a power statement at work
              dressed in brogues and oxfords. Practice for your marathon with
              running shoes for men and women. Choose shoes for individual games
              such as tennis, football, basketball, and the like. Or step into
              the casual style and comfort offered by sandals, sliders, and
              flip-flops. Explore our lineup of fashionable footwear for ladies,
              including pumps, heeled boots, wedge-heels, and pencil-heels. Or
              enjoy the best of comfort and style with embellished and metallic
              flats.
            </li>
            <li>
              <strong>Stylish accessories</strong> - E-commerce is one of the
              best online shopping sites for classy accessories that perfectly
              complement your outfits. You can select smart analogue or digital
              watches and match them up with belts and ties. Pick up spacious
              bags, backpacks, and wallets to store your essentials in style.
              Whether you prefer minimal jewellery or grand and sparkling
              pieces, our online jewellery collection offers you many impressive
              options.
            </li>
            <li>
              <strong>Fun and frolic</strong> - Online shopping for kids at
              E-commerce is a complete joy. Your little princess is going to
              love the wide variety of pretty dresses, ballerina shoes,
              headbands and clips. Delight your son by picking up sports shoes,
              superhero T-shirts, football jerseys and much more from our online
              store. Check out our lineup of toys with which you can create
              memories to cherish.
            </li>
            <li>
              <strong>Beauty begins here </strong>- You can also refresh,
              rejuvenate and reveal beautiful skin with personal care, beauty
              and grooming products from E-commerce. Our soaps, shower gels,
              skin care creams, lotions and other ayurvedic products are
              specially formulated to reduce the effect of aging and offer the
              ideal cleansing experience. Keep your scalp clean and your hair
              uber-stylish with shampoos and hair care products. Choose makeup
              to enhance your natural beauty.
            </li>
          </ul>
          <p>
            E-commerce is one of the best online shopping sites in India which
            could help transform your living spaces completely. Add colour and
            personality to your bedrooms with bed linen and curtains. Use smart
            tableware to impress your guest. Wall decor, clocks,{" "}
            <a class="seolink" href="/photo-frames">
              photo frames
            </a>{" "}
            and artificial plants are sure to breathe life into any corner of
            your home.
          </p>
          <h3>
            <strong>AFFORDABLE FASHION AT YOUR FINGERTIPS</strong>
          </h3>
          <p>
            E-commerce is one of the unique online shopping sites in India where
            fashion is accessible to all. Check out our new arrivals to view the
            latest designer clothing, footwear and accessories in the market.
            You can get your hands on the trendiest style every season in
            western wear. You can also avail the best of ethnic fashion during
            all Indian festive occasions. You are sure to be impressed with our
            seasonal discounts on footwear, trousers, shirts, backpacks and
            more. The end-of-season sale is the ultimate experience when fashion
            gets unbelievably affordable.
          </p>
          <h3>
            <strong> INSIDER</strong>
          </h3>
          <p>
            Every online shopping experience is precious. Hence, a cashless
            reward-based customer loyalty program called{" "}
            <a class="seolink" href="/myntrainsider">
              Insider
            </a>
            was introduced to enhance your online experience. The program is
            applicable to every registered customer and measures rewards in the
            form of Insider Points.
          </p>
          <p>
            There are four levels to achieve in the program, as the Insider
            Points accumulate. They are - Insider, Select, Elite or Icon. Apart
            from offering discounts on E-commerce and partner platform coupons,
            each tier comes with its own special perks.
          </p>
          <p>
            <strong>Insider</strong>
          </p>
          <ul>
            <li style={{ liststyletype: "disc" }}>
              Opportunity to master any domain in fashion with tips from
              celebrity stylists at E-commerce Masterclass sessions.
            </li>
            <li style={{ liststyletype: "disc" }}>
              Curated collections from celeb stylists.
            </li>
          </ul>
          <p>
            <strong>Elite</strong>
          </p>
          <ul>
            <li style={{ liststyletype: "disc" }}>
              VIP access to special sale events such as the End of Reason Sale
              (EORS) and product launches.
            </li>
            <li style={{ liststyletype: "disc" }}>
              Exclusive early access to Limited Edition products
            </li>
          </ul>
          <p>
            <strong>Icon</strong>
          </p>
          <ul>
            <li style={{ liststyletype: "disc" }}>
              Chance to get on guest lists for special events.
            </li>
          </ul>
          <h3>
            <strong>
              E-commerce Studio - The Personalised Fashion Feed You Wouldn’t
              Want To Miss Out On
            </strong>
          </h3>
          <p>
            The world wide web is evolving at a relentless pace, and with an
            accelerated growth each passing year, there is bound to be an
            overwhelming surge of online content. It was for this very reason
            that personalisation of search feeds was proposed as a solution to
            combat the overload of irrelevant information.
          </p>
          <p>
            Several social media platforms such as Facebook and Instagram along
            with various online shopping websites have chosen to help filter
            content, increasing user engagement, retention and customer loyalty.
          </p>
          <p>
            E-commerce is one such online shopping website that joins the list
            of platforms that help curate a personalised fashion feed. Named the
            <a class="seolink" href="/studio/home">
              E-commerce Studio
            </a>
            , this personalised search feed brings you the latest men and
            women’s fashion trends, celebrity styles, branded content and daily
            updates from your favourite fashion labels.
          </p>
          <p>
            If you are wondering how impactful E-commerce Studio can be, we are
            listing out five perks of having a rich, meaningful, and
            personalised fashion feed in your life.
          </p>
          <ul>
            <li>
              <strong>
                Keep Up With What Your Favourite Fashion Icons Are Upto
              </strong>
            </li>
            <p>
              The #OOTD, AKA outfit of the day hashtag trend has been a rage
              among fashion bloggers and stylists. The whole concept of building
              an outfit from scratch and showcasing it to a huge community of
              enthusiasts using the hashtag has helped individuals with
              understanding trends and making suitable for daily wear.
            </p>
            <p>
              Imagine if you could keep up with every piece of clothing and
              accessory worn by the fashion icons you look upto. From Sonam
              Kapoor to Hailey Baldwin Bieber, E-commerce Studio has a ‘Stories’
              feature to help track celebrity fashion trends, exploring details
              such as their outfit of the day. This way, you would not ever miss
              out on the latest celebrity fashion trends, from all around the
              world.
            </p>
            <li>
              <strong>Quick Fashion Tip And Tricks</strong>
            </li>
            <p>
              Whether it is draping a saree into a dhoti style, wearing the
              right lingerie under certain dresses or discovering multiple uses
              out of heavy ethnic wear, E-commerce Studio will help you acquire
              some unique and useful fashion hacks. Each hack is designed with
              the intention to help you get the best wear out of everything in
              your wardrobe.
            </p>
            <li>
              <strong>
                Updates on What Is Trending and New Product Launches
              </strong>
            </li>
            <p>
              Since fast fashion seems to be extremely hard to keep up with
              these days, a quick update on what is trending in accessories,
              clothing and footwear would certainly be of great help. E-commerce
              Studio helps you stay connected to the most beloved and sought
              after brands such as Puma, Coverstory, The Label Life and so many
              more.
            </p>
            <p>
              Your feed keeps you updated with stories of what the brands are
              creating including clothing, footwear and jewellery, along with
              their new seasonal collections.
            </p>
            <li>
              <strong>
                Explicit Step-By-Step Beauty Routines From Experts
              </strong>
            </li>
            <p>
              Just like fashion, the beauty community keeps on growing, and with
              brands such as Huda Beauty, MAC and the latest Kay Beauty by
              Katrina Kaif, are constantly coming up with mind-blowing products.
              Whether it is creating a no-makeup look, different winged
              eyeliners, do-it-yourself facial masks and other personal care
              beauty routines, E-commerce Studio is here for you.
            </p>
            <li>
              <strong>Celebrity Confessions And A Look Into Their Lives</strong>
            </li>
            <p>
              A bonus feature that E-commerce Studio has in store for you is
              celebrity confessions and a peek into their lives. So, E-commerce
              helps you stay connected to your most beloved celebrities in a
              matter of clicks.
            </p>
            <p>
              If you are very particular when it comes to the content you wish
              to view and engage with on social media, the ability to
              intricately filter content helps achieve that. Applying the same
              formula for hardcore fashion lovers and shoppers, E-commerce
              Studio brings you a daily fashion fix incorporating everything
              that you love, all at one place. Sign up on E-commerce today and
              start organising your fashion feed, just the way you want to.
            </p>
          </ul>
          <h3>
            <strong>E-COMMERCE APP</strong>
          </h3>
          <p>
            Ecommerce, India’s no. 1 online fashion destination justifies its
            fashion relevance by bringing something new and chic to the table on
            the daily. Fashion trends seem to change at lightning speed, yet the
            Ecommerce shopping app has managed to keep up without any hiccups.
            In addition, Ecommerce has vowed to serve customers to the best of
            its ability by introducing its first-ever loyalty program, The
            Ecommerce Insider. Gain access to priority delivery, early sales,
            lucrative deals and other special perks on all your shopping with
            the Ecommerce app. Download the Ecommerce app on your
            <a
              class="seolink"
              href="https://play.google.com/store/apps/details?id=com.myntra.android"
            >
              Android
            </a>{" "}
            or{" "}
            <a
              class="seolink"
              href="https://itunes.apple.com/in/app/myntra-indias-fashion-store/id907394059"
            >
              IOS
            </a>{" "}
            device today and experience shopping like never before!
          </p>
          <h3>
            <strong>HISTORY OF E-COMMERCE</strong>
          </h3>
          <p>
            Becoming India’s no. 1 fashion destination is not an easy feat.
            Sincere efforts, digital enhancements and a team of dedicated
            personnel with an equally loyal customer base have made E-commerce
            the online platform that it is today. The original B2B venture for
            personalized{" "}
            <a class="seolink" href="/gifts">
              gifts
            </a>{" "}
            was conceived in 2007 but transitioned into a full-fledged ecommerce
            giant within a span of just a few years. By 2012, E-commerce had
            introduced 350 Indian and international brands to its platform, and
            this has only grown in number each passing year. Today E-commerce
            sits on top of the online fashion game with an astounding social
            media following, a loyalty program dedicated to its customers, and
            tempting, hard-to-say-no-to deals.
          </p>
          <p>
            The E-commerce shopping app came into existence in the year 2015 to
            further encourage customers’ shopping sprees. Download the app on
            your Android or IOS device this very minute to experience fashion
            like never before
          </p>
          <h3>
            <strong>SHOP ONLINE AT E-COMMERCEWITH COMPLETE CONVENIENCE</strong>
          </h3>
          <p>
            Another reason why E-commerce is the best of all online stores is
            the complete convenience that it offers. You can view your favourite
            brands with price options for different products in one place. A
            user-friendly interface will guide you through your selection
            process. Comprehensive size charts, product information and
            high-resolution images help you make the best buying decisions. You
            also have the freedom to choose your payment options, be it card or
            cash-on-delivery. The 14-day returns policy gives you more power as
            a buyer. Additionally, the try-and-buy option for select products
            takes customer-friendliness to the next level.
          </p>
          <p>
            Enjoy the hassle-free experience as you shop comfortably from your
            home or your workplace. You can also shop for your friends, family
            and loved-ones and avail our gift services for special occasions.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
