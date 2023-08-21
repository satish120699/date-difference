import { useState } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-bootstrap';

function App() {
  // const [showData, setShowData] = useState(false);
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
  });

  // const date3 = new Date('06/30/2019');
  // console.log(date3);

  const handleStartDateChange = date => {
    setDates({ ...dates, startDate: date });
  };

  const handleEndDateChange = date => {
    // console.log('i amm running');
    // console.log(date);
    setDates({ ...dates, endDate: date });
  };

  const calculateDifference = (date1, date2) => {
    // console.log('i am inside', date1, date2);
    const diffTime = Math.floor(date2.getTime() - date1.getTime());
    const day = 1000 * 60 * 60 * 24;
    const days = Math.floor(diffTime / day);
    const months = Math.floor(days / 31);
    const years = Math.floor(months / 12);
    console.log('days:', days);
    console.log('months:', months);
    console.log('years:', years);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const date1 = new Date(`${dates.startDate}`);
    const date2 = new Date(`${dates.endDate}`);
    calculateDifference(date1, date2);
  };
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='text-center'>Welcome to Date Time Convertor</h1>
            <div className='row mt-5'>
              <div className='col-6'>
                <h3>Date Time Converter</h3>
                <div>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Label>Start Date : </Form.Label>
                      <DatePicker selected={dates.startDate} onChange={handleStartDateChange} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>End Date : </Form.Label>
                      <DatePicker selected={dates.endDate} onChange={handleEndDateChange} />
                    </Form.Group>
                    <div>
                      <button type='submit'>Calculate</button>
                    </div>
                  </Form>
                </div>
              </div>
              <div className='col-6'>
                <div>hii</div>
                {/* {showData ? <div>hello</div> : 'hiii'} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
