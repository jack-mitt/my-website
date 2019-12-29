import {isMobile} from 'react-device-detect';

export default (theme) => ({
    main: {
        backgroundColor: "#E0E3E6",
        textAlign: isMobile ? "center" : "justify",
        float: 'none',
        margin: '0 auto',
        fontFamily: "Roboto",
        marginTop: 15,
        width: "75vw",
        padding: 15,
        bordeWidth: "5px",  
        borderStyle: 'groove',
        borderColor: "#ACAFB2",
    },

    header: {
        fontSize: isMobile ? '20px' : '36px',
        fontFamily: "Roboto",
    },

    about: {
        fontFamily: "Roboto",
        fontSize: isMobile ? '15px' : '26px',
    }
});