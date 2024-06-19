
import landingImage from '../assets/landing.png'
import appDownloadImg from '../assets/appDownload.png'
import { Footer } from '@/components/Footer'
export const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">

<div className="bg-white rounded-lg shadow-md py-8 gap-8 text-center -mt-16">
<h1 className="text-5xl font-bold tracking-tighter text-orange-500 mb-3">  Tuck into a takeway today</h1>

  <span className="text-xl"> food is just a click away</span>
</div>

<div className="grid md:grid-cols-2 gap-5"> <img src={landingImage} alt="" /> 

<div className="flex flex-col items-center justify-center gap-4 text-center">
    <span className="text-3xl  font-bold tracking-tighter">
        Order takeway even faster!
    </span>
    <span>
        DownLoad the app for faster ordering and personalized recomendations
    </span>

<img src={appDownloadImg} alt="" />
</div>

</div>
<Footer/>
    </div>



  )
}
