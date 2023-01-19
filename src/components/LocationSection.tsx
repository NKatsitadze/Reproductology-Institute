import styled from "styled-components";

type propsTypes = {
    mapSettings: {
        width: string,
        height: string,
    }
}

const LocationSection = function(props:propsTypes) {

    return (
        <LocationWrap>
            <div className="center-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.793214975275!2d44.791790614675854!3d41.724980779234585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472ceb7b39dab%3A0x9940aa1905fa4f5!2z4YOQ4YOg4YOp4YOY4YOaIOGDruGDneGDm-GDkOGDoeGDo-GDoOGDmOGDq-GDmOGDoSDhg6Dhg5Thg57hg6Dhg53hg5Phg6Phg6Xhg6Lhg53hg5rhg53hg5Lhg5jhg5jhg6Eg4YOY4YOc4YOh4YOi4YOY4YOi4YOj4YOi4YOY!5e0!3m2!1ska!2sge!4v1672583381064!5m2!1ska!2sge" width={props.mapSettings.width} height={props.mapSettings.height} style={{border:0}} loading="lazy"  referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </LocationWrap>
    )
}

export default LocationSection;

const LocationWrap = styled.section`
    width: 100%;
    padding: 1rem 0;
    background: var(--Background-Lightblue);

    .center-container {
        width: 95%;
        margin: 0 auto;
    }

    // Below 800px
    @media(max-width: 50em) {
        .center-container{
            width: 100%
        }
    }

`