import trollface from '../images/troll-face.png'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'

export default function Memenav() {
    return (
          <Row className='nav--meme align-items-center p-2'>
            <Stack direction="horizontal" gap={3}>
              <img src={trollface} className='img-fluid' style={{maxWidth: '64px'}} alt='troll-face'></img>
              <h3 className='text-sm text-md text-lg text-xl fw-semibold'>Meme Generator</h3>
              <div className="p-2 ms-auto"><h4 className='fs-5'>React Project</h4></div>
            </Stack>
          </Row>
    );
  }