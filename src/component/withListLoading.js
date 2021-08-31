import React from 'react';

function WithlistLoading(Component) {
  return function withLoadingComponent({isLoading, ...props }) {
    if(!isLoading) return <Component {...props} />;
    return (
      <p>It may take some time fetching data </p>
    );
  }
}

export default WithlistLoading;