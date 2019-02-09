/**
 * Reusable GraphQL component wrapper that is placed around children/ child components
 * that will add the data obtained to the objects and return them
 * The base level data object is returned
 */
import * as React from 'react';
import { Query } from 'react-apollo';

interface GraphQlQueryProps {
  query: any;
  variables?: {};
  children: React.ReactNode;
  returnedId?: string;
}

interface SafeData {
  data: object;
  returnedId?: string;
}

const safeDataCheck = ({ data, returnedId }: SafeData): boolean => {
  if (returnedId) {
    return !!data[returnedId];
  }
  return !!data;
};

const GraphQlQueryWrap = ({
  query,
  variables,
  children,
  returnedId,
}: GraphQlQueryProps) => (
  <Query query={query} variables={variables}>
    {({ loading, error, data }) => {
      if (loading) {
        return <p>LOADING...</p>;
      }
      if (error) {
        return <p>ERROR!!!</p>;
      }
      if (safeDataCheck({ data, returnedId })) {
        const ehancedChildren = React.Children.map(children, (child: any) =>
          React.cloneElement(child as React.ReactElement<any>, {
            data,
          }),
        );
        return <div>{ehancedChildren}</div>;
      } else {
        return <p>No Data for: {JSON.stringify(variables)}</p>;
      }
    }}
  </Query>
);

export default GraphQlQueryWrap;
