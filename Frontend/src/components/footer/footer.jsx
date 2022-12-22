import CardGiftcard from "@mui/icons-material/CardGiftcard";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GppGoodIcon from "@mui/icons-material/GppGood";
import BrightnessAutoOutlinedIcon from "@mui/icons-material/BrightnessAutoOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import styles from  "./footer.module.css";
export const Footer = () => {
  const Fone = [
    "About Us",
    "Contact Us",
    "Inquiry / Feedback",
    "Our Stores",
    "Sportsjam Team",
  ];
  const Ftwo = [
    "Register / Login ",
    "Delivery &amp; Charges",
    "Payment Options",
    "Returns Policy",
    "Track My Order",
    "Buy in Bulk",
  ];

  return (
    <div className={styles.footermain}>
      <div className={styles.footerdiv1}>
       <div className={styles.subfooter}>
       <div>
          <CardGiftcard style={{ fontSize: 50 }}></CardGiftcard>
          <a className="flink" href="#">E-gift Voucher</a>
        </div>
        <div>
          <WorkspacePremiumOutlinedIcon
            style={{ fontSize: 50 }}
          ></WorkspacePremiumOutlinedIcon>
          <a className="flink" href="#">Reward Points</a>
        </div>
        <div>
          <MenuBookIcon  style={{ fontSize: 50 }}></MenuBookIcon>
          <a className="flink" href="#">Buyers Guide</a>
        </div>
        <div>
          <LocalShippingIcon style={{ fontSize: 50 }}></LocalShippingIcon>
          <a className="flink" href="#">Express Shipping</a>
        </div>
        <div>
          <GppGoodIcon style={{ fontSize: 50 }}></GppGoodIcon>
          <a className="flink" href="#">Secure Shopping</a>
        </div>
        <div>
          <BrightnessAutoOutlinedIcon
            style={{ fontSize: 50 }}
          ></BrightnessAutoOutlinedIcon>
          <a className="flink" href="#">100% Authentic</a>
        </div>
       </div>
      </div>

      <div className={styles.footerdiv2}>
        <div className={styles.footercol1}>
          <h2>GET TO KNOW US</h2>

          {Fone.map((e) => (
            <div>
              <a className="flink" href="#">{e}</a>
            </div>
          ))}
        </div>

        <div className="footer-col2">
          <h2>HERE TO HELP</h2>

          {Ftwo.map((e) => (
            <div>
              <a className="flink" href="#">{e}</a>
            </div>
          ))}
        </div>

        <div className="footer-col3">
          <h2>PAYMENTS</h2>
          <img src="https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Payments.png"></img>
        </div>

        <div className="footer-col4">
          <h2>SIGN UP FOR NEWSLETTER</h2>

          <br />
          <h2>CONNECT WITH US</h2>
          <li class="soc-icon">
            <a className="flink" href="https://www.facebook.com/Sportsjam.in" target="_blank">
              <FacebookIcon  sx={{ fontSize : "40px", color: "white"}}></FacebookIcon>
            </a>
            <a className="flink" href="https://twitter.com/SportsJamIn" target="_blank">
              <TwitterIcon  sx={{ fontSize : "40px", color: "white"}}></TwitterIcon>
            </a>
            <a className="flink" href="https://www.instagram.com/sportsjam.in/" target="_blank">
              <InstagramIcon  sx={{ fontSize : "40px", color: "white"}}></InstagramIcon>
            </a>
            <a className="flink"
              href="https://www.youtube.com/channel/UC-eZWeqy5zPUea1ykX7PWAg"
              target="_blank"
            >
              <YouTubeIcon  sx={{ fontSize : "50px", color: "white"}}></YouTubeIcon>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};
