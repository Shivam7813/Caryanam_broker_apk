import api from './axiosConfig';

export const getPendingUsers = () =>
  api.get('/admin/pending-users');

export const getPendingOwners = () =>
  api.get('/admin/pending-Owner');

export const approveUser = id =>
  api.post(`/admin/approveUserPremium/${id}`);

export const rejectUser = id =>
  api.post(`/admin/rejectUserPremium/${id}`);

export const approveOwner = id =>
  api.post(`/admin/approveOwnerPremium/${id}`);

export const rejectOwner = id =>
  api.post(`/admin/rejectOwnerPremium/${id}`);