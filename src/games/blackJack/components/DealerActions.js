import React from 'react'

const DealerActions = (props) => {
  return (
    <React.Fragment>
      <button onClick={props.addCardToDealer}>Hit</button>

      {/* A button to reset the hand */}
      <button onClick={props.resetDealerHand}>Reset Hand</button>

      {/* resets the hand count i.e resets the state in BlackJack component */}
    </React.Fragment>
  )
}
export default DealerActions
