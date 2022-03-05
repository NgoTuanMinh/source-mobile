/* eslint-disable prettier/prettier */
export {
  setUserPhone,
  createUserAccount,
  showLoading,
  verifyUserAccount,
  saveScreenName,
  savePasscode,
  getTransactionsOfWallet,
  updateProfileDetails,
  handelLogOut,
  userLoggedOut,
  sendSMS,
  resetCode,
  setupVaultEncryptForSecretKey,
  getVaultSecretKeyFlow,
  updateRecoveryInfo,
  resetPasscode,
  getTransactionsOfWalletNoReload,
} from "./account";

export {
  fetchAccessTokens,
  refreshToken,
  verifyLoginPasscode,
  reVerifyLoginPasscode,
  verifyEmailUrl,
  checkCurrentDevice,
  insertCurrentDevice,
  getAccessToken,
  getUserId,
} from "./authAction";

export {
  getWallet,
  pairWallet,
  unPairWallet,
  getPairedWearables,
  fetchTokenPrice,
  sendTokens,
  sentBarAction,
  activeWearables,
  deactiveWearables,
  stellarSign,
  getTransactionDetail,
  getPendingTransferTransactionTicket,
} from "./wallets";

export { buyTokens, resetPaymentToken, refundToken, refundFee, deletePendingTopUpTransaction } from './tokens';

export {
  uploadProfilePicture,
  getProfileDetails,
  toggleFaceId,
  setCrewMode,
} from "./profile";
export { getEvtxContacts } from "./contacts";
export {
  submitRegisterToken,
  fetchNotifications,
  getNotifications,
  getNumUnread,
  readNotifications,
  plusNumUnread,
  minusNumUnread,
  reSetNoti,
} from "./notifications";

export {
  getchGetDetailEvent,
  getEventTicketDefinitions,
  getEventSellTickets,
  lockTickets,
  unlockTickets,
  getQrCode,
  checkedInTicket,
  getAvailableTickets,
  buyTicketOfficial,
  buyMarketPlaceTicket,
  getDataListTicket,
  getEventComing,
  getEventToday,
  getOwnTickets,
  getTotalOwnTickets,
  setNumberMyTickets,
  getPriceRangeInEvent,
  searchEvent,
  sellTicket,
  getListSaleTicket,
  setNumberSaleTickets,
  getDetailSaleTicket,
  transferTickets,
  cancelTransferTicket,
  acceptTransferTicket,
  autoAcceptTransferTicket,
  getPastEvent,
  editSellTickets,
  requestUnsellTicket,
  shareTickets,
  getchGetDetailPrivateEvent,
  getFeeMarket,
  getTicketDefinitions,
  getEventAddress,
  setShowScanTicket,
  getProducts,
  addLockedTicketIds,
} from "./event";
