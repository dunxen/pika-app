/* eslint-disable camelcase */
import { ChainMonitor, Option_FilterZ } from 'lightningdevkit';

export const initChainMonitor = (
  tx_broadcaster,
  logger,
  fee_estimator,
  persister
) => {
  const chainMonitor = ChainMonitor.constructor_new(
    Option_FilterZ.constructor_none(),
    tx_broadcaster,
    logger,
    fee_estimator,
    persister
  );

  return chainMonitor;
};
