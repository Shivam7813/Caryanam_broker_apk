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

  export const sendEmailOtpApi = data => {
  return api.post(
    '/api/auth/send-email-otp',
    {
      email: data.email,
    }
  );
};

export const verifyEmailOtpApi = data => {
  return api.post(
    '/api/auth/verify-email-otp',
    {
      email: data.email,
      otp: data.otp,
    }
  );
};

export const forgotPasswordApi = data => {
  return api.post(
    '/api/auth/forgot-password',
    {
      email: data.email,
    }
  );
};

export const verifyForgotOtpApi = data => {
  return api.post(
    '/api/auth/verify-otp',
    {
      email: data.email,
      otp: data.otp,
    }
  );
};

export const resetPasswordApi = data => {
  return api.post(
    '/api/auth/reset-password',
    {
      email: data.email,
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword,
    }
  );
};