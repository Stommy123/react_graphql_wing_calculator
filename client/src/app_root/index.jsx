import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo';
import { toast } from 'react-toastify';
import { GetTotalWings } from '../graphql/queries';
import { CommitOrder } from '../graphql/mutations';
import { Appetite, Header, Flavors, CommitOrderButton } from '../components';

const AppRoot = _ => {
  const [appetites, setAppetites] = useState({ snacker: 0, average: 0, bigEater: 0 });
  const [selectedFlavor, setSelectedFlavor] = useState('');

  const { data } = useQuery(GetTotalWings, { variables: { input: appetites } });
  const [executeCommitOrder] = useMutation(CommitOrder);

  const updateAppetiteCount = (appetiteType, delta) => _ => {
    const currentCount = appetites[appetiteType];
    setAppetites({ ...appetites, [appetiteType]: currentCount + delta });
  };

  const handleSelectFlavor = flavor => _ => setSelectedFlavor(flavor);

  const partySize = Object.values(appetites).reduce((acc, count) => acc + count, 0);

  const handleCommitOrder = async _ => {
    try {
      const commitOrderInput = { total: partySize, flavor: selectedFlavor };
      const { data } = await executeCommitOrder({ variables: { input: commitOrderInput } });

      if (!data?.commitOrder?.success) throw new Error('Failed to commit order');

      toast.success('Order successfully commited!');
    } catch (error) {
      toast.error(`Failed to commit order - ${error.message}`);
    }
  };

  return (
    <>
      <div className='container'>
        <Header partySize={partySize} totalWings={data?.wings?.total || 0} />
        {Object.keys(appetites).map(appetiteKey => (
          <Appetite
            appetite={appetiteKey}
            updateAppetiteCount={updateAppetiteCount}
            appetiteCount={appetites[appetiteKey]}
          />
        ))}
      </div>
      <Flavors selectedFlavor={selectedFlavor} handleSelectFlavor={handleSelectFlavor} />
      <CommitOrderButton isDisabled={partySize <= 0 || !selectedFlavor} handleCommitOrder={handleCommitOrder} />
    </>
  );
};

export default AppRoot;
