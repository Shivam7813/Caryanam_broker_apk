import api from './axiosConfig';

// Owner
export const addProperty = (ownerId, data) =>
  api.post(`/api/owner/addPropertyByOwner/${ownerId}`, data);


export const getPropertyById = (id) =>
  api.get(`/api/owner/getPropertyById/${id}`);

export const deleteProperty = (id) =>
  api.delete(`/api/owner/deletePropertyById/${id}`);

export const updateProperty = (id, data) =>
  api.put(`/api/owner/updatePropertyById/${id}`, data);

export const uploadPropertyImages = (propertyId, formData) =>
  api.post(
    `/api/owner/uploadPropertyImagesByPropertyId/${propertyId}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  export const getOwnerProperties = (ownerId) =>
  api.get(`/admin/owner/${ownerId}/properties`);

  
  // User

export const getProperties = (userId) =>
  api.get(`/api/user/properties/${userId}`);


export const filterProperties = (userId, data) =>
  api.post(`/api/user/filter-properties/${userId}`, data);


export const searchCity = (city) =>
  api.get(`/api/user/properties-by-city`, {
    params: { city }, 
  });

