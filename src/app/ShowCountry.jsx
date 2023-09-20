import { useLocation } from "react-router-dom";
import { Header } from "./components/header";
import {
  BackButton,
  CountryView,
  CountryViewContainer,
  CountryViewImage,
  CountryViewDetails,

} from "./style/sharedStyles";

const ShowCountry = () => {
const location = useLocation();
const countryDetail = location.state;

  const goBack = () => {
    window.history.back();
  }

  // console.log(location.state);

  return (
    <div>
      <Header />
      <CountryViewContainer>
        <BackButton onClick={goBack}>Back</BackButton>
        <CountryView>
          <CountryViewImage
            src={countryDetail?.flags?.png}
            alt="country flag"
          />

          <CountryViewDetails>
            <h1>{countryDetail?.name?.common}</h1>
            <ul>
                {/* <li>{nativeOfficial}</li> */}
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div>{countryDetail?.name?.common}</div>
            <div>{countryDetail?.population}</div>
            <div>{countryDetail?.region}</div>
            <div>{countryDetail?.capital}</div>
          </CountryViewDetails>
        </CountryView>
      </CountryViewContainer>
    </div>
  );
};

export default ShowCountry;