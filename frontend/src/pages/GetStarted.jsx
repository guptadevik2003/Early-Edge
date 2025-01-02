import 'assets/form.css';
import { useState } from 'react';
import { FaUser, FaGraduationCap, FaLandmark, FaCheck } from 'react-icons/fa6';
import useDataContext from 'context/DataContext';

export default function GetStarted() {
  // const {  } = useDataContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    full_name: '',
    address_type: '',
    family_size: '',
    parent_status: '',
    mother_education: '',
    father_education: '',
    mother_job: '',
    father_job: '',
    travel_time: '',
    study_time: '',
    class_failures: 0,
    school_support: '',
    family_support: '',
    internet_access: '',
    health: '',
    absences: 0,
    final_grade: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  
  const handleNext = () => {
    if(currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  }

  const handleBack = () => {
    if(currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  }

  const handleSubmit = (e) => {
    setCurrentStep(prev => prev+1)
    e.preventDefault();
    console.log('submitted', formData);
    alert('Submitted!');
  }

  return (
    <div>

      {/* Form Navigation */}
      <div className='pt-10 pb-5 flex flex-col items-center'>
        <div className='flex justify-between items-center w-[100%] max-w-[500px]'>

          <div className={`${currentStep<1?'bg-card-bg-grey':currentStep>1?'bg-accent bg-opacity-25':'bg-accent'} h-10 min-w-10 mr-1.5 flex items-center justify-center rounded-full transition-all duration-500`}>
            {currentStep<=1 ? (
              <FaUser className={`${currentStep<1?'text-txt-secondary':'text-black'} transition-all duration-500`} size={21} />
            ) : (
              <FaCheck className={`text-accent transition-all duration-500`} size={22} />
            )}
          </div>

          <div className='w-full bg-card-bg-grey rounded-full h-1'>
            <div className='bg-accent h-1 rounded-full transition-all ease-out duration-500' style={{ width: `${currentStep<2?'0%':'100%'}` }} />
          </div>

          <div className={`${currentStep<2?'bg-card-bg-grey':currentStep>2?'bg-accent bg-opacity-25':'bg-accent'} h-10 min-w-10 mx-1.5 flex items-center justify-center rounded-full transition-all duration-500`}>
            {currentStep<=2 ? (
              <FaGraduationCap className={`${currentStep<2?'text-txt-secondary':'text-black'} transition-all duration-500`} size={23} />
            ) : (
              <FaCheck className={`text-accent transition-all duration-500`} size={22} />
            )}
          </div>

          <div className='w-full bg-card-bg-grey rounded-full h-1'>
            <div className='bg-accent h-1 rounded-full transition-all ease-out duration-500' style={{ width: `${currentStep<3?'0%':'100%'}` }} />
          </div>

          <div className={`${currentStep<3?'bg-card-bg-grey':currentStep>3?'bg-accent bg-opacity-25':'bg-accent'} h-10 min-w-10 ml-1.5 flex items-center justify-center rounded-full transition-all duration-500`}>
            {currentStep<=3 ? (
              <FaLandmark className={`${currentStep<3?'text-txt-secondary':'text-black'} transition-all duration-500`} size={20} />
            ) : (
              <FaCheck className={`text-accent transition-all duration-500`} size={22} />
            )}
          </div>

        </div>
      </div>

      {/* Form */}
      <div className='flex flex-col items-center'>

        <div className='w-[100%] max-w-[600px] bg-card-bg-dark-grey rounded-lg p-4 pb-6'>
          
          <div className='overflow-x-hidden'>
            <form action='POST' onSubmit={handleSubmit}>

              <div className='form-slides' style={{ transform: `translateX(-${((currentStep-1)<0 ? 0 : (currentStep-1)>2 ? 2 : (currentStep-1))*100}%)`}}>

                {/* Step 1 */}
                <div className='form-part'>
                  <h2>Personal Details</h2>
                  
                  <h3>Full Name</h3>
                  <input
                    className='bg-card-bg-light-grey rounded-lg outline-none px-2 py-2 placeholder-txt-muted'
                    type='text'
                    name='full_name'
                    id='full_name'
                    placeholder='John Doe'
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                  />

                  <h3>Address Type</h3>
                  <select
                    className='bg-card-bg-light-grey rounded-lg outline-none px-2 py-2'
                    name='address_type'
                    id='address_type'
                    onChange={handleChange}
                    required
                  >
                    <option className='hidden'></option>
                    <option value='Urban'>Urban</option>
                    <option value='Rural'>Rural</option>
                  </select>

                  <h3>Family Size</h3>
                  <select
                    className='bg-card-bg-light-grey rounded-lg outline-none px-2 py-2'
                    name='family_size'
                    id='family_size'
                    onChange={handleChange}
                    required
                  >
                    <option className='hidden'></option>
                    <option value='Less than or equal to 3'>Less than or equal to 3</option>
                    <option value='Greater than 3'>Greater than 3</option>
                  </select>

                  <h3>Parent's Status</h3>
                  <select
                    className='bg-card-bg-light-grey rounded-lg outline-none px-2 py-2'
                    name='parent_status'
                    id='parent_status'
                    onChange={handleChange}
                    required
                  >
                    <option className='hidden'></option>
                    <option value='Living together'>Living together</option>
                    <option value='Apart'>Apart</option>
                  </select>

                  <h3>Mother's Education</h3>
                  <select
                    className='bg-card-bg-light-grey rounded-lg outline-none px-2 py-2'
                    name='mother_education'
                    id='mother_education'
                    onChange={handleChange}
                    required
                  >
                    <option className='hidden'></option>
                    <option value='none'>None</option>
                    <option value='primary education (4th grade)'>Primary Education (4th Grade)</option>
                    <option value='5th to 9th grade'>5th to 9th Grade</option>
                    <option value='secondary education'>Secondary Education</option>
                    <option value='higher education'>Higher Education</option>
                  </select>

                  <h3>Father's Education</h3>
                  <select
                    className='bg-card-bg-light-grey rounded-lg outline-none px-2 py-2'
                    name='father_education'
                    id='father_education'
                    onChange={handleChange}
                    required
                  >
                    <option className='hidden'></option>
                    <option value='none'>None</option>
                    <option value='primary education (4th grade)'>Primary Education (4th Grade)</option>
                    <option value='5th to 9th grade'>5th to 9th Grade</option>
                    <option value='secondary education'>Secondary Education</option>
                    <option value='higher education'>Higher Education</option>
                  </select>
                </div>

                {/* Step 2 */}
                <div className='form-part'>
                  <h2>Socio-economic Details</h2>

                  <h3>Mother's Job</h3>
                  <select
                    className='bg-card-bg-light-grey rounded-lg outline-none px-2 py-2'
                    name='mother_job'
                    id='mother_job'
                    onChange={handleChange}
                    required
                  >
                    <option className='hidden'></option>
                    <option value='teacher'>Teacher</option>
                    <option value='health'>Health Care Related</option>
                    <option value='services'>Civil Services</option>
                    <option value='at_home'>At Home</option>
                    <option value='other'>Others</option>
                  </select>

                  <h3>Father's Job</h3>
                  <select
                    className='bg-card-bg-light-grey rounded-lg outline-none px-2 py-2'
                    name='father_job'
                    id='father_job'
                    onChange={handleChange}
                    required
                  >
                    <option className='hidden'></option>
                    <option value='teacher'>Teacher</option>
                    <option value='health'>Health Care Related</option>
                    <option value='services'>Civil Services</option>
                    <option value='at_home'>At Home</option>
                    <option value='other'>Others</option>
                  </select>

                  <h3>Travel Time</h3>
                  <select
                    className='bg-card-bg-light-grey rounded-lg outline-none px-2 py-2'
                    name='travel_time'
                    id='travel_time'
                    onChange={handleChange}
                    required
                  >
                    <option className='hidden'></option>
                    <option value='<15 min.'>Less than 15 minutes</option>
                    <option value='15 to 30 min.'>15 to 30 minutes</option>
                    <option value='30 min. to 1 hour'>30 minutes to 1 hour</option>
                    <option value='>1 hour'>Greater than 1 hour</option>
                  </select>

                  <h3>Study Time</h3>
                  <select
                    className='bg-card-bg-light-grey rounded-lg outline-none px-2 py-2'
                    name='study_time'
                    id='study_time'
                    onChange={handleChange}
                    required
                  >
                    <option className='hidden'></option>
                    <option value='<2 hours'>Less than 2 hours</option>
                    <option value='2 to 5 hours'>2 to 5 hours</option>
                    <option value='5 to 10 hours'>5 to 10 hours</option>
                    <option value='>10 hours'>Greater than 10 hours</option>
                  </select>

                  <h3>Class Failures (0 - 3)</h3>
                  <div className='flex w-[100%]'>
                    <button
                      type='button'
                      className='bg-card-bg-light-grey px-4 py-2 rounded-l-lg'
                      onClick={() => { handleChange({ target: { name: 'class_failures', value: Number(formData.class_failures) - 1 } }) }}
                    >-</button>
                    <input
                      className='bg-card-bg-light-grey outline-none px-2 py-2 placeholder-txt-muted border-l border-r border-solid border-txt-muted w-full text-center'
                      type='number'
                      name='class_failures'
                      id='class_failures'
                      min={0}
                      max={3}
                      value={formData.class_failures}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type='button'
                      className='bg-card-bg-light-grey px-4 py-2 rounded-r-lg'
                      onClick={() => { handleChange({ target: { name: 'class_failures', value: Number(formData.class_failures) + 1 } }) }}
                    >+</button>
                  </div>

                  <h3>School Support</h3>
                  <select
                    className='bg-card-bg-light-grey rounded-lg outline-none px-2 py-2'
                    name='school_support'
                    id='school_support'
                    onChange={handleChange}
                    required
                  >
                    <option className='hidden'></option>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                  </select>
                </div>

                {/* Step 3 */}
                <div className='form-part'>
                  <h2>Academic Details</h2>

                  <h3>Family Support</h3>
                  <select
                    className='bg-card-bg-light-grey rounded-lg outline-none px-2 py-2'
                    name='family_support'
                    id='family_support'
                    onChange={handleChange}
                    required
                  >
                    <option className='hidden'></option>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                  </select>

                  <h3>Internet Access</h3>
                  <select
                    className='bg-card-bg-light-grey rounded-lg outline-none px-2 py-2'
                    name='internet_access'
                    id='internet_access'
                    onChange={handleChange}
                    required
                  >
                    <option className='hidden'></option>
                    <option value='yes'>Yes</option>
                    <option value='no'>No</option>
                  </select>

                  <h3>Health</h3>
                  <select
                    className='bg-card-bg-light-grey rounded-lg outline-none px-2 py-2'
                    name='health'
                    id='health'
                    onChange={handleChange}
                    required
                  >
                    <option className='hidden'></option>
                    <option value='1'>1 (Very Bad)</option>
                    <option value='2'>2 (Bad)</option>
                    <option value='3'>3 (Average)</option>
                    <option value='4'>4 (Good)</option>
                    <option value='5'>5 (Very Good)</option>
                  </select>

                  <h3>Absences (0 - 93)</h3>
                  <div className='flex w-[100%]'>
                    <button
                      type='button'
                      className='bg-card-bg-light-grey px-4 py-2 rounded-l-lg'
                      onClick={() => { handleChange({ target: { name: 'absences', value: Number(formData.absences) - 1 } }) }}
                    >-</button>
                    <input
                      className='bg-card-bg-light-grey outline-none px-2 py-2 placeholder-txt-muted border-l border-r border-solid border-txt-muted w-full text-center'
                      type='number'
                      name='absences'
                      id='absences'
                      min={0}
                      max={93}
                      value={formData.absences}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type='button'
                      className='bg-card-bg-light-grey px-4 py-2 rounded-r-lg'
                      onClick={() => { handleChange({ target: { name: 'absences', value: Number(formData.absences) + 1 } }) }}
                    >+</button>
                  </div>

                  <h3>Final Grade (0 - 20)</h3>
                  <div className='flex w-[100%]'>
                    <button
                      type='button'
                      className='bg-card-bg-light-grey px-4 py-2 rounded-l-lg'
                      onClick={() => { handleChange({ target: { name: 'final_grade', value: Number(formData.final_grade) - 1 } }) }}
                    >-</button>
                    <input
                      className='bg-card-bg-light-grey outline-none px-2 py-2 placeholder-txt-muted border-l border-r border-solid border-txt-muted w-full text-center'
                      type='number'
                      name='final_grade'
                      id='final_grade'
                      min={0}
                      max={20}
                      value={formData.final_grade}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type='button'
                      className='bg-card-bg-light-grey px-4 py-2 rounded-r-lg'
                      onClick={() => { handleChange({ target: { name: 'final_grade', value: Number(formData.final_grade) + 1 } }) }}
                    >+</button>
                  </div>
                </div>
              
              </div>

            </form>
          </div>

          <div className='form-controls pt-2'>
            {currentStep < 2 && <div></div>}
            {currentStep > 1 && <button className='bg-accent text-center font-medium text-screen-bg-black py-2 px-4 rounded-lg hover:opacity-80 transition-all duration-300' type='button' onClick={handleBack}>Back</button>}
            {currentStep < 3 && <button className='bg-accent text-center font-medium text-screen-bg-black py-2 px-4 rounded-lg hover:opacity-80 transition-all duration-300' type='button' onClick={handleNext}>Next</button>}
            {currentStep === 3 && <button className='bg-accent text-center font-medium text-screen-bg-black py-2 px-4 rounded-lg hover:opacity-80 transition-all duration-300' type='submit' onClick={handleSubmit}>Submit</button>}
          </div>

        </div>

      </div>

    </div>
  );
}
