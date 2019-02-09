/**
 * Reusable GraphQL component wrapper that is placed around children/ child components
 * that will add the data obtained to the objects and return them
 * The base level data object is returned
 */
import * as React from 'react';
import { Query } from 'react-apollo';
import PongLoader from 'src/components/pongLoader';
import { isObjectEmpty } from 'src/utils/generic/generalUtil';

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
        return <PongLoader />;
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
        const output = isObjectEmpty(variables)
          ? 'Looks like there is nothing here'
          : `No data for: ${JSON.stringify(variables)}`;

        return <p style={{ textAlign: 'center' }}>{output}</p>;
      }
    }}
  </Query>
);

export default GraphQlQueryWrap;
