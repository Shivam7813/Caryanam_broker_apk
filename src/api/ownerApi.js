import api from './axiosConfig';

export const addProperty = (ownerId, data) =>
  api.post(`/api/owner/addPropertyByOwner/${ownerId}`, data);

export const getPropertyById = id =>
  api.get(`/api/owner/getPropertyById/${id}`);

export const deleteProperty = id =>
  api.delete(`/api/owner/deletePropertyById/${id}`);

export const buyPremiumOwner = ownerId =>
  api.post(`/api/owner/buyPremiumByOwner/${ownerId}`);

export const getOwnerProperties = ownerId =>
  api.get(`/admin/owner/${ownerId}/properties`);