import dsm from 'redux-dsm';

const fetchingStates = [
  'initial', 'idle',
  ['fetch', 'fetching',
    ['cancel', 'idle'],
    ['report error', 'error',
      ['handle error', 'idle']
    ],
    ['report success', 'success',
      ['handle success', 'idle']
    ]
  ]
];
// }) => { actions: Object, actionCreators: Object, reducer: Function }
const CurrentMessageDSM = dsm({
  component: 'tradeBreachInbox',
  description: 'fetch selected message',
  actionStates: fetchingStates
});

export default CurrentMessageDSM
;
