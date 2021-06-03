/*import React from 'react';


const Places = ({institutosData,setInstitutosData, organismosData, setOrganismosData})=> {
    const [status, setStatus]= React.useState();
    React.useEffect(()=> {
         fetch(`https://www.cultura.gob.ar/api/v2.0/institutos/?format=json`).then(response=> response.json().then((dataI)=> {
          if(dataI.results === null ){
            setStatus("error");
          } else {
            setInstitutosData(dataI);
            setStatus("success");
          }
        }))
        
    }, []);

    React.useEffect(()=> {
      fetch(`https://www.cultura.gob.ar/api/v2.0/organismos/?format=json`).then(response=> response.json().then((data)=> {
        if(data.results === null ){
          setStatus("error");
        } else {
          setOrganismosData(data);
          setStatus("success");
        }
      }))
    }, []);
    
}*/