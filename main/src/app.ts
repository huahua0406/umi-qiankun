import { useState } from 'react'

export function useQiankunStateForSlave() {
  const [globalState, setQiankunGlobalState] = useState({ str: 'aaa', num: 1 })

  return {
    globalState,
    setQiankunGlobalState
  };
}




export function onRouteChange({ matchedRoutes }) {
  console.log(matchedRoutes);
  if (matchedRoutes.length) {
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
  }
}
