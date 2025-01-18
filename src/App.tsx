import { useState } from 'react'
import { useGAnimals } from './contexts/GAnimalsContext'
import { GAnimal, Genom } from './components/types/Data'
import Alert from './components/UI/Alert'
import PropertiesMenuBtn from './components/UI/PropertiesMenuBtn'
import InfoMainContainer from './components/InfoMainContainer'
import BreedingMenu from './components/BreedingMenu'
import BreedersMenuBtn from './components/UI/BreederMenuBtn'
import GAnimalsCourusel from './components/GAnimalsCourusel'
import BreedingContainer from './components/BreedingContainer'
import './App.css'
import { DownloadBtn } from './components/UI/DownloadBtn'
import ConditionGate from './components/UI/ConditionGate'
import { useAlert } from './contexts/AlertContext'
import axios from 'axios'
import { DOWNLOAD_GANIMAL } from './const/api'

const App = () => {
  const { setNewAlert } = useAlert()
  const [potentialPartner, setPotentialPartner] = useState<GAnimal>()
  const [breedersListActive, setBreederListActive] = useState(true)
  const [menuActive, setMenuActive] = useState(true)
  const { ganimals } = useGAnimals()
  const [currentInfoGanimalShow, setCurrentInfoGanimalShow] = useState(ganimals[0])
  const [currentGanimalIndex, setCurrentGanimalIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [child, setChild] = useState<GAnimal>()
  const { genome: genomeString } = currentInfoGanimalShow
  const { gender } = Genom.analyzeParentString(genomeString)

  const handleDownload = async () => {
    try {
      const res = await axios.get(`${DOWNLOAD_GANIMAL}/${currentInfoGanimalShow.id}`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([res.data], { type: 'text/plain' }));

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'animal_traits.txt');
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setNewAlert(`Error during download: ${String(err)}`);
    }
  };

  const handleBreedingPrepare = (ganimal: GAnimal) =>{
    setPotentialPartner(ganimal)
  }

  const handelBredingClose = () =>{
    setPotentialPartner(undefined)
    setChild(undefined)
  }

  return (
    <div className='app'>
      <BreedingMenu
        child={child}
        currentGanimalIndex={currentGanimalIndex}
        direction={direction}
        ganimals={ganimals}
        potentialPartner={potentialPartner}
        setChild={setChild}
      />
      <BreedersMenuBtn func={() => setBreederListActive(!breedersListActive)} />
      <BreedingContainer
        breedersListActive={breedersListActive}
        currentInfoGanimalShow={currentInfoGanimalShow}
        ganimals={ganimals}
        gender={gender}
        handleBreedingPrepare={handleBreedingPrepare}
      />
      <PropertiesMenuBtn func={() => setMenuActive(!menuActive)}/>
      <ConditionGate condition={!menuActive}>
        <DownloadBtn onClick={handleDownload}/>
      </ConditionGate>
      <InfoMainContainer
        child={child}
        currentGanimalIndex={currentGanimalIndex}
        ganimals={ganimals}
        menuActive={menuActive}
        potentialPartner={potentialPartner}
        currentInfoGanimalShow={currentInfoGanimalShow}
        setCurrentInfoGanimalShow={setCurrentInfoGanimalShow}
      />
      <GAnimalsCourusel
        handleClose={handelBredingClose}
        child={child}
        currentGanimalIndex={currentGanimalIndex}
        direction={direction}
        ganimals={ganimals}
        potentialPartner={potentialPartner}
        setCurrentGanimalIndex={setCurrentGanimalIndex}
        setCurrentInfoGanimalShow={setCurrentInfoGanimalShow}
        setDirection={setDirection}
      />
      <Alert className='ganimals-alert'/>
    </div>
  )
}

export default App
