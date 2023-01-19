import Header from "../components/Header";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import CarouselSection from "../components/CarouselSection";
import LocationSection from "../components/LocationSection";

const MainPage = function() {
    type mapSettingsType = {
        width: string,
        height: string,
    }
    const mapSettings: mapSettingsType = {
        width: '100%',
        height: '550px',
    }

    return ( 
    <>
        <Header />
        {/* StatsSection and FB messanger will only be available after website sinks into production */}
        {/* <StatsSection /> */}
        <ServicesSection />
        <CarouselSection />
        <LocationSection  mapSettings={mapSettings} />
    </>
    )
}

export default MainPage;

