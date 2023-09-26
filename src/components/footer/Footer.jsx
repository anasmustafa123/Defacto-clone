import FooterPart1 from "./FooterPart1";
import VerySmallContainer from "./FooterPart2";
import SmiFinalFooter from "./FooterPart3";
function Footer() {
  return (
    <div className="flex flex-col gap-5 pt-10  dark:bg-stone-900 dark:text-white ">
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
