export const USER_VALIDATE = {
  username: {
    presence: {allowEmpty: false, message: 'Username cannot be empty'},
  },
  password: {
    presence: {allowEmpty: false, message: 'Password cannot be empty'},
  },
};

export const OTP_RULES = {
  code: {
    presence: {message: 'Otp cannot be empty'},
    length: {is: 4, message: 'Otp should be 4 number'},
  },
};
