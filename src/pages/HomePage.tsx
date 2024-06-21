
import landingImage from '../assets/landing.png'
import appDownloadImg from '../assets/appDownload.png'
import { Footer } from '@/components/Footer'
import SearchBar, { SearchForm } from '@/components/SearchBar'
import { useNavigate } from 'react-router-dom'
export const HomePage = () => {

  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
    <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
      <h1 className="text-5xl font-bold tracking-tight text-orange-600">
        Tuck into a takeway today
      </h1>
      <span className="text-xl">Food is just a click away!</span>
<SearchBar  placeHolder="Search By City Dhaka or Chittagong"  onSubmit={handleSearchSubmit} />
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
