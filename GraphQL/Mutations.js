import { gql } from '@apollo/client';

export const SIGNUP_PHONE_MUTATION = gql`
  mutation signUp($phoneNumber: String!, $phoneCountryCode: String!) {
    signUp(phoneNumber: $phoneNumber, phoneCountryCode: $phoneCountryCode)
  }
`;

export const CONFIRM_OTP = gql`
  mutation confirm($storeId: String!, $code: String!) {
    confirm(storeId: $storeId, code: $code)
  }
`;
