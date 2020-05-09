import React, { useState } from 'react'
import { CursorProvider } from 'react-cursor-custom'

import styled from 'styled-components'

const App = () => {
  
  const [ color, setColor ] = useState('black')
  const [ transition, setTransition ] = useState(100)
  const [ ring, setRing ] = useState(false)
  const [ ringSize, setRingSize ] = useState(36)

  return (
    <CursorProvider color={color} 
                    noRing={ring}  
                    ringSize={ringSize}
                    transitionTime={transition}>
      <Text>Simple React Custom Cursor Component<br/>No lags is achieved by using transform property, which is rendered by GPU, not CPU<br/>You can play with props in the form under</Text>
      
      <ControlsWrapper>
        <Controls>
          <div>Color</div>
          <div>color prop :string</div>
          <input type="text"
          value={color}
          onChange={e => setColor(e.target.value)}
          placeholder="Type color here in hex or valid css color like yellow"
          />
        </Controls>
        <Controls>
          <div>Transition in ms</div>
          <div>transitionTime prop :number</div>
          <input
          value={transition}
          onChange={e => setTransition(e.target.value)}
          placeholder="Type transition duration in ms"
          />
        </Controls>
        <Controls>
          <div>Ring</div>
          <div>noRing prop :boolean</div>
          <button onClick={() => setRing(!ring)}>{ring ? 'Enable ring' : 'Disable ring'}</button>
        </Controls>
        <Controls>
          <div>Ring Size</div>
          <div>ringSize prop :number</div>
          <input
          value={ringSize}
          onChange={e => setRingSize(e.target.value)}
          placeholder="Type size of the ring"
          />
        </Controls>
      </ControlsWrapper>

    </CursorProvider>
  )
}

export default App;


const ControlsWrapper = styled.div`
  width: 70%;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 50%
`
const Text = styled.div`
  font-size: 36px;
  text-align: center;
  height: 300px;
`