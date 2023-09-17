import SmallContainer from "./small container"

let data = [
    {
        imgUrl: 'https://dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/magazadanteslimal.svg',
        header:'Click&Collect From Store ',
        smallHeader: 'Free Cargo',
        array: {
            arrayHeader: 'Corporate Information',
            arrayData: ['DeFacto','About Us','Human Resources']
        }
    },
    {
        imgUrl: 'https://dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/kapidaodeme.svg',
        header:'cash on delivery',
        smallHeader: 'Cash on delivery fee is 15 EGP',
        array: {
            arrayHeader: 'Help',
            arrayData: ['Frequently Asked Questions','Return And Changes' ,'iconOrder Tracking',' iconHow to shop on DeFacto?',' How to pay on DeFacto?','Conditions of competition']
        }
    },
    {
        imgUrl: 'https://dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/magazadandegisim.svg',
        header:' Product Replacement at Store',
        smallHeader: 'buy online, change in store',
        array: {
            arrayHeader: 'Contact Us',
            arrayData: ['Contact Form','Customer Services','WhatsApp +2010 334 558 58']
        }
    },
    {
        imgUrl: 'https://dfcdn.defacto.com.tr/AssetsV2/dist/img/footer/iade.svg',
        header:'Easy & Free Return via Aramex ',
        smallHeader: 'Return Within 30 Days',
        array: {
            arrayHeader: 'Social Media',
            arrayData: []
        }
    }
]
function Footer (){
    console.log(data[0].imgUrl)
    return(
        <div className="flex gap-4 justify-between p-3">
        <SmallContainer singleData = {data[0]}/>
        <SmallContainer singleData = {data[1]}/>
        <SmallContainer singleData = {data[2]}/>
        <SmallContainer singleData = {data[3]}/>
        </div>
    )
}

export default Footer;