import FooterPart1 from "./FooterPart1";
import VerySmallContainer from "./very samll container";
import SmiFinalFooter from "./smi final footer";
function Footer() {
  return (
    <div className="flex flex-col gap-5">
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
