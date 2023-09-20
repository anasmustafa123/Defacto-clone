import FooterPart1 from "./FooterPart1";
import VerySmallContainer from "./FooterPart2";
import SmiFinalFooter from "./FooterPart3";
function Footer() {
  return (
    <div className="flex flex-col gap-5 mt-10">
      <FooterPart1 />
      <hr />
      <VerySmallContainer />
      <hr />
      <SmiFinalFooter />
      <hr />
    </div>
  );
}
export default Footer;
