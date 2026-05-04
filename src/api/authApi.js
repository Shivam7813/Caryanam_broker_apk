import api from './axiosConfig';

export const loginApi =
  data => {
    return api.post(
      '/api/auth/login',
      {
        email:
          data.email,
        password:
          data.password,
      }
    );
  };



export const registerUserApi =
  data => {
    return api.post(
      '/api/auth/register/user',
      {
        fullName:
          data.fullName,
        mobileNumber:
          data.mobileNumber,
        email:
          data.email,
        password:
          data.password,
        role:
          data.role,
      }
    );
  };

export const registerOwnerApi =
  data => {
    return api.post(
      '/api/auth/register/POwner',
      {
        fullName:
          data.fullName,
        mobileNumber:
          data.mobileNumber,
        email:
          data.email,
        password:
          data.password,
        role:
          data.role,
      }
    );
  };


export const registerAdminApi =
  data => {
    return api.post(
      '/api/auth/register/admin',
      {
        fullName:
          data.fullName,
        mobileNumber:
          data.mobileNumber,
        email:
          data.email,
        password:
          data.password,
        role:
          data.role,
      }
    );
  };