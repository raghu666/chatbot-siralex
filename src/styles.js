const customStyles = {
    darkTheme: { 
        palette: { mode: 'dark' }
    },
    requestItem: {
        marginRight: "10px",
        marginBottom: "10px",
        padding: "10px",
        backgroundColor: "greenyellow",
        border: "1px solid greenyellow",
        borderRadius: "10px",
        font: "400 .9em 'Roboto', sans-serif",
        color: "black",
    },
    responseItem: {
        marginLeft: "10px",
        marginBottom: "10px",
        padding: "10px",
        backgroundColor: "#66cfff",
        border: "1px solid #66cfff",
        borderRadius: "10px",
        font: "400 .9em 'Roboto', sans-serif",
        color: "black",
    },
    progressDiv: {
        marginLeft: "10px",
        marginBottom: "10px",
        padding: "20px"
    },
    paperContainer: {
        width: '100vw',
        height: '100vh',
        maxWidth: '600px',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    },
    paperBody: {
        width: '100%',
        height: '93%',
        maxHeight: '93%', 
        marginBottom: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    }
}

export default customStyles;