import React, { useState } from 'react';
import RenderContextRadio from './ContextPages/RenderContextRadio';
import RenderDeliveryTopicSettings from './ContextPages/RenderDeliveryTopicSettings';
import RenderDeliveryTopicSetup from './ContextPages/RenderDeliveryTopicSetup';
import { Button } from 'antd';

function RenderNewTopicModal(props) {
  const [page, setPage] = useState(1);

  const nextPage = e => {
    e.preventDefault();
    setPage(page + 1);
  };

  const prevPage = e => {
    e.preventDefault();
    setPage(page - 1);
  };

  return (
    <>
      {page === 1 ? <RenderContextRadio /> : null}
      {page === 2 ? <RenderDeliveryTopicSettings /> : null}
      {page === 3 ? <RenderDeliveryTopicSetup /> : null}

      {/* next & prev buttons */}
      <div>
        {page !== 1 ? <Button onClick={prevPage}>Prev</Button> : null}
        <Button onClick={nextPage}>Next</Button>
      </div>
      {/* end next & prev buttons */}
    </>
  );
}

export default RenderNewTopicModal;
