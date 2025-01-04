import { useEffect, useState } from 'react';
import useDataContext from 'context/DataContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FaRightFromBracket } from 'react-icons/fa6';
import ImageModal from 'components/ImageModal';
import axios from 'axios';
import 'assets/analytics.css';
import 'assets/react-circular-progressbar.css';

export default function Analytics() {
  const { userData, predictData, resetAllData } = useDataContext();
  const [modelPerf, setModelPerf] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const { result_arr, prediction, RISK_REV_MAP, dropout_score, percentile, FWMIODR_plot, DODRL_plot } = predictData;

  useEffect(() => {
    document.title = `Analytics - Early Edge`

    axios.get('/api/model_performance')
    .then(res => {
      if(res.data.success) {
        console.log(res.data.data)
        setModelPerf(res.data.data);
      } else {
        setModelPerf({});
      }
    })
    .catch(err => console.log(err))
  }, []);

  const openImageModal = (imageUrl) => {
    setModalImage(`data:image/png;base64,${imageUrl}`);
    setModalVisible(true);
  }

  const SUMMARY_MAP = [
    "Your child has a low risk of dropping out, suggesting that they are currently on a stable educational path. This indicates consistent engagement and a supportive environment for their learning journey.",
    "Your child has a moderate risk of dropping out, indicating that they may need additional support to stay on track. Factors such as inconsistent attendance or challenges in certain subjects could be contributing.",
    "Your child has a high risk of dropping out, highlighting an urgent need for targeted interventions. This may be due to multiple factors, such as academic struggles, socio-economic challenges, or lack of engagement."
  ]

  return (
    <div>

      <div className='flex justify-center'>
        <div className='py-4 md:w-[65%] w-[100%]'>
          
          <div className='flex gap-2 justify-between w-[100%] mb-5'>
            <div className='truncate flex-grow'>
              <h1 className='text-3xl truncate'>Hello, {userData.full_name.split(' ')[0]}!</h1>
              <h2 className='text-txt-secondary'>Dropout Risk Assessment</h2>
            </div>
            <button className='bg-accent px-3 py-3 h-fit w-fit text-screen-bg-black rounded-lg hover:opacity-80 transition-all duration-300' onClick={resetAllData}>
              <FaRightFromBracket className='text-xl' />
            </button>
          </div>

          <div className='grid gap-5'>

            {/* First Row */}
            <div className='grid 2xl:grid-cols-3 2xl:grid-rows-1 grid-cols-1 grid-rows-3 gap-5'>

              {/* First Row First Col */}
              <div className='bg-card-bg-dark-grey p-4 flex flex-col justify-center items-center rounded-lg'>
                <h3 className={`text-2xl font-medium text-center mb-4 ${prediction<1?"text-green-300":prediction>1?"text-red-300":"text-accent"}`}>
                  {RISK_REV_MAP[prediction].charAt(0).toUpperCase()+RISK_REV_MAP[prediction].slice(1)} Risk
                </h3>
                <div className='flex justify-center'>
                  <CircularProgressbar
                    className='h-36 w-36'
                    value={percentile}
                    text={`${percentile.toFixed(2)}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      strokeLinecap: 'butt',
                      textSize: '16px',
                      pathColor: `${prediction<1?"#86EFAC":prediction>1?"#FCA5A5":"#FFC44D"}`,
                      textColor: '#FFF',
                      trailColor: '#3F3F3F',
                    })}
                  />
                </div>
              </div>

              {/* First Row Second Col */}
              <div className='bg-card-bg-dark-grey p-4 rounded-lg'>
                <h2 className='text-center text-2xl font-medium mb-2'>Summary</h2>
                <p className='text-sm'>{SUMMARY_MAP[prediction]}</p>
              </div>

              {/* First Row Third Col */}
              <div className='bg-card-bg-dark-grey flex flex-col justify-center items-center rounded-lg overflow-hidden cursor-pointer' onClick={() => openImageModal(FWMIODR_plot)}>
                <img src={`data:image/png;base64,${FWMIODR_plot}`} />
              </div>

            </div>

            {/* Second Row */}
            <div className='flex flex-col 2xl:flex-row gap-5'>

              {/* Second Row First Col */}
              <div className='bg-card-bg-dark-grey basis-2/3 p-4 rounded-lg'>
                <div className='flex flex-col xl:flex-row xl:gap-4 gap-8'>
                  {Object.keys(modelPerf).map((key, ind) => {
                    const model = modelPerf[key];
                    return (
                      <div key={ind} className='basis-1/3 flex flex-col justify-center'>
                        <h3 className='text-center text-lg font-medium'>{model.name.replace(' Classifier','')}</h3>
                        
                        <div className='flex justify-evenly py-2'>
                          <div className='text-center'>
                            <h3>Accuracy:</h3>
                            <h3>{(model.accuracy*100).toFixed(2)}%</h3>
                          </div>
                          <div className='text-center'>
                            <h3>MSE:</h3>
                            <h3>{(model.mse*100).toFixed(2)}%</h3>
                          </div>
                        </div>
                        
                        <table className='xl:mr-0 xl:ml-0 ml-4 mr-4'>
                          <tr>
                            <th>A / P</th>
                            <th>Low</th>
                            <th>Med</th>
                            <th>Hig</th>
                          </tr>
                          <tr>
                            <th>Low</th>
                            <td>{model.cmatrix[0][0]}</td>
                            <td>{model.cmatrix[0][1]}</td>
                            <td>{model.cmatrix[0][2]}</td>
                          </tr>
                          <tr>
                            <th>Med</th>
                            <td>{model.cmatrix[1][0]}</td>
                            <td>{model.cmatrix[1][1]}</td>
                            <td>{model.cmatrix[1][2]}</td>
                          </tr>
                          <tr>
                            <th>Hig</th>
                            <td>{model.cmatrix[2][0]}</td>
                            <td>{model.cmatrix[2][1]}</td>
                            <td>{model.cmatrix[2][2]}</td>
                          </tr>
                        </table>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Second Row Second Col */}
              <div className='basis-1/3 bg-card-bg-dark-grey flex flex-col justify-center items-center rounded-lg overflow-hidden cursor-pointer' onClick={() => openImageModal(DODRL_plot)}>
                <img src={`data:image/png;base64,${DODRL_plot}`} />
              </div>

            </div>

            {/* Third Row */}
            {/* <div className='grid 2xl:grid-cols-3 2xl:grid-rows-1 grid-cols-1 grid-rows-3 gap-5'>

              <div className='bg-red-200 p-20'>06</div>
              <div className='bg-red-200'>07</div>
              <div className='bg-red-200'>08</div>

            </div> */}

          </div>

          <h2 className='text-lg text-txt-secondary mt-4'>Click Plots & Graphs to expand.</h2>

        </div>
      </div>

      {/* Image Modal Overlay */}
      <ImageModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        imageUrl={modalImage}
      />

    </div>
  );
}
