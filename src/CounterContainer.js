import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  counter: state
});

const CounterComponent = ({ counter, dispatch }) => (
  <>
    <h1>Redux counter</h1>
    <p>{counter}</p>
    <button onClick={() => dispatch({type: 'REMOVE TEN'})}>- 10</button>
    <button onClick={() => dispatch({type: 'REMOVE ONE'})}>- 1</button>
    <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
    <button onClick={() => dispatch({type: 'ADD ONE'})}>+ 1</button>
    <button onClick={() => dispatch({type: 'ADD TEN'})}>+ 10</button>
  </>
);

export default connect(
  mapStateToProps
)(CounterComponent);
