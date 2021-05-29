import axios from "axios";
export interface IBookingRequest {
  name: string;
  notes: string;
  email: string;
  guests: number;
  experience: any;
  startDate: any;
  endDate: any;
  resourceId: string;
}

export interface IBookingRequestResponse {
  Session: any;
  client: any;
  signInUserSession: any;
  username: string;
  pool: any;
  authenticationFlowType: any;
  storage: any;
  keyPrefix: any;
  userDataKey: any;
  attributes: any;
  preferredMFA: any;
}
export async function sendBookingRequest(req: IBookingRequest): Promise<IBookingRequestResponse> {
  const request = {
    name: req.name,
    email: req.email,
    requests: [
      {
        req: {
          name: "ResourceID",
          value: req.resourceId,
        },
      },
      {
        req: {
          name: "Location:",
          value: req.experience,
        },
      },
      {
        req: {
          name: "Email:",
          value: req.email,
        },
      },
      {
        req: {
          name: "Villa:",
          value: req.experience,
        },
      },

      {
        req: {
          name: "Dates:",
          value: `From: ${req.startDate} to ${req.endDate}`,
        },
      },
      {
        req: {
          name: "Notes:",
          value: req.notes,
        },
      },
      {
        req: {
          name: "Guests:",
          value: req.guests,
        },
      },
    ],
  };

  try {
    const res: IBookingRequestResponse = await axios.post(process.env.NEXT_PUBLIC_BOOKING_REQUEST_API!, request);
    // await addDealToPipeDrive();
    return res;
  } catch (err: any) {
    console.log(err);
    return err;
  }
}

/** TODO:
 * Adds a deal to the Pipedrive CRM. The function first checks to see, using the
 * traveler's provided email, if the traveler currently has a deal in progress.
 * Once verified the deal is added to the CRM and the response is passed back to
 * the function. if (lead) add deal to lead else new lead + new deal  pass deal
 * object off to pipedrive dealObj
 * @param bookingRequest
 */
// async function addDealToPipeDrive(bookingRequest) {
//
//   return response;
// }

export async function sendBookingRequestTEST(req: IBookingRequest): Promise<IBookingRequestResponse> {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Booking request test done.");
      resolve({
        username: "f905593e-1332-4ca7-b5cb-395a04cc8fa8",
        pool: {
          userPoolId: "us-east-1_vzsWxPa02",
          clientId: "2spkbnc7lofvsd99j80nai0tn7",
          client: {
            endpoint: "https://cognito-idp.us-east-1.amazonaws.com/",
            fetchOptions: {},
          },
          advancedSecurityDataCollectionFlag: true,
          storage: {
            "CognitoIdentityServiceProvider.2spkbnc7lofvsd99j80nai0tn7.f905593e-1332-4ca7-b5cb-395a04cc8fa8.deviceGroupKey": "-ptF4OyFP",
            "CognitoIdentityServiceProvider.2spkbnc7lofvsd99j80nai0tn7.f905593e-1332-4ca7-b5cb-395a04cc8fa8.deviceKey":
              "us-east-1_1bb6a76e-312a-4ebe-8393-66e3fc746c78",
            "CognitoIdentityServiceProvider.2spkbnc7lofvsd99j80nai0tn7.f905593e-1332-4ca7-b5cb-395a04cc8fa8.randomPasswordKey":
              "iwqKanKTlheulW3SUBZq8MbaXhbe74oY84srhp0DnB5DaFv2oITJzg==",
            signUpStep: "0",
          },
        },
        Session: null,
        client: {
          endpoint: "https://cognito-idp.us-east-1.amazonaws.com/",
          fetchOptions: {},
        },
        signInUserSession: {
          idToken: {
            jwtToken:
              "eyJraWQiOiJEY0Y4bWpBSE1Bc0NscXRxSHJvRDJ1QkptbGdsaXE1V3FTZmlLeTdUOEJnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmOTA1NTkzZS0xMzMyLTRjYTctYjVjYi0zOTVhMDRjYzhmYTgiLCJhdWQiOiIyc3BrYm5jN2xvZnZzZDk5ajgwbmFpMHRuNyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6IjU4YmY0MTI1LWE0Y2YtNDI5Yy04ZDVhLWRhYjE4ODkyMDVmYiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjE3NDA5MjA1LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV92enNXeFBhMDIiLCJuYW1lIjoiQW50aG9ueSBIaWxsIiwiY29nbml0bzp1c2VybmFtZSI6ImY5MDU1OTNlLTEzMzItNGNhNy1iNWNiLTM5NWEwNGNjOGZhOCIsImV4cCI6MTYxNzQxMjgwNSwiaWF0IjoxNjE3NDA5MjA1LCJlbWFpbCI6InRvbnlAaWxhbmx5ZmUuY29tIn0.nUj10U59SHYq7PPZfXj60TO5WqVWTbpGK7Ku84fMxgflvcz4YKoIm_g8IUDJXg89hdTFLOT1ru2dawiMOsCqNz7RDkFR2lb0vBNZb24ehIKH8cBYOoH1kI16XOy7x0qvBytrGUkDCyDaKH2WwhkgwHlmeueqBKQkwsvM2x2N8TXxHC4uUZWllhAkEqR7k6lUvdxba9mUekqaBZP9KDCiDgDBdKaaKQC-mVaBM-Cx68HxQfymJ3K63ITDpXbHr5Tp0KvHU_J15tQknP5mGsr9OfdZ_ZNlkB0xZzE-Rwz_O9oQtzuardwUro9WvmyTyYZEerSWlOhrq64J_KSnUIdzOQ",
            payload: {
              sub: "f905593e-1332-4ca7-b5cb-395a04cc8fa8",
              aud: "2spkbnc7lofvsd99j80nai0tn7",
              email_verified: true,
              event_id: "58bf4125-a4cf-429c-8d5a-dab1889205fb",
              token_use: "id",
              auth_time: 1617409205,
              iss: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_vzsWxPa02",
              name: "Anthony Hill",
              "cognito:username": "f905593e-1332-4ca7-b5cb-395a04cc8fa8",
              exp: 1617412805,
              iat: 1617409205,
              email: "tony@ilanlyfe.com",
            },
          },
          refreshToken: {
            token:
              "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.Ryn9gwSzSt9PU71gTCBhDE4_WFxAwJKauDoqufdjqh2EEkdJEV0tNyxKDuvHVcijPA71s7UV8vOCdmjwwzLXftJTHKosog-c_7Kcce8nFgxyv48V1pFERl3W0RknUnFV4BezUb-18Cy94ocJdM0bqICZHBfSKG2wS_f642_fyiagpFTnge6aOvNH3gq4JRXW_-jPNmOiV1CiOpaOv0KftRRaOx25GlEh982KnGgPGT2l0sEEvQsGI4VWo98-TVDv7gM6vGJMKaZbgcEdwjdQKkn06wQPmDkRvECcUUcLSzapQlPwsGXyJCGoTh90ujKIn_N99a20eltXDybVRZmKRA.lx2sv2PDyC3__ktG.5a1btxED7cPbuhA2zGr8UsHQ_RddgeEQHz_OrZmC17FCXn_QOIApo37gUvrNOjV7zcgjaHZ02tqKc_NV0r4DcBn8tjS1dR-26XTTfaruh_xDRzRO2bqLNHY-CGJpRlVU4uB-m1MgR3v90Hib6pRiYMs-xi2wqUn7j3FRfsBxHTAzix5-LqmVenmHMb6uNpfCVcWDTJCtI_ryAn1A2-KVKVi5nkBZrpEoJMM-HkRn4L3aQQ8NfgqTwfhRBt1zyreRo9wQVjq108hujeesFN0weoPRXKc1mZHTNXyOZ7pljYUYwXCOwelbgOXHjJS4uuZmclkOzWFC614_LlnFELPb8x037S6bBesPcwvyq-bgABm0cF9KwtLQl79XO9pRSH8FHabv_TfpokZYYbCFb2mjSEP20OkitL00cEMXo-FBsIWP_JQoGKVN0O4jgRulfTmf0met7IAQ_bqBb2Niq-Ee6w0Gdr4MaffoFd0a1dAjTPEsW8nJg-nFhRPTNegYsbX6l6H5OpuAqJ4_jlhisQ4-hhrQaIC5rnl3zU2E_f_wDuNe1PdcsVJf7LDyhpf1-IC72Cu4Xaa8j8QDePlRLZzbohyBpTnTiQCmbF7k4YPXNT5A2rS4-VYg4e0Rl3ayPQODRxPyembJdL6IFePv1Znhz-QrZJLghl8b1D190v3KdEQ1IoVa6etjqxzI2a5FcKPqU2Tb8uAbu5YUMy1qcBDpCj8YFY2dfh2QcUsRarfI6vhhF0RdTinH-gSvtFbIk_MrB9wQsoig7gHUuyq5Nl6SG0NwpAkYG-S4gG4yvOHxSl3xZFENi2JZ665Kls9TPRLBM1jqADCN51ikk6rm869lugGPu63JwMGKlB_eVUIR0IrBQ2PL3E7NdLcTdhzlm-x5yrXfhTjmQoZpHHKlTv9O53hVlWDUTb5YNz4qOJSxGX9rFdsviNCyXWT1WazRsZY_qPIm5_lYY0iqr0_0JcbeMSsOxbe6EVTh_3hz5mgVMuMOHurYpb9AreXXvZaKuNi9EW0Z6dmdu3HS92gD752-_eprG5U5y4D--f4Jfbp0sum5zw_z6RnSUhG0SepgxK6g3e89yQU_xit_gJwEXgY4ZeT0R3FoXDQHZC7VXEs2KZuxQARZDNEz-gTggXfCMpGzXrVZz2br8YXfP0fyX-1VaK_pU6kKdzVkDjVh47iMaF8hDx8MELXzmnegH54jQEdzTHRL1gKMONWJdKXRJRcL5VvdX7d_LuA_CQjiZ5czjOr4bBZYfGqpyEWcVTu9dSwRPug7S5RyzT3KDK6I7Gc-BFK4j_-GvprerKY7eVE_dfhAHZCCT_C0f8aS1S3QiukFOgiVVuJfha1cVN8uAEKjYzs6FwN5isO9mNUzWtrMcKG-043NQ2CfnV84JTDcfcZ2vHH_hahGLG8-Q9CltSIePCdzHlwiV0Je3kgM15AV.yNBgLFtHg8aMnFIrwt5feg",
          },
          accessToken: {
            jwtToken:
              "eyJraWQiOiI5VmlxaFhMemZMc2RMTThHUlRhTEhiV2ZXZVgyeUJlZ0E3dENXRkpvMHZZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmOTA1NTkzZS0xMzMyLTRjYTctYjVjYi0zOTVhMDRjYzhmYTgiLCJkZXZpY2Vfa2V5IjoidXMtZWFzdC0xXzFiYjZhNzZlLTMxMmEtNGViZS04MzkzLTY2ZTNmYzc0NmM3OCIsImV2ZW50X2lkIjoiNThiZjQxMjUtYTRjZi00MjljLThkNWEtZGFiMTg4OTIwNWZiIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTYxNzQwOTIwNSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfdnpzV3hQYTAyIiwiZXhwIjoxNjE3NDEyODA1LCJpYXQiOjE2MTc0MDkyMDUsImp0aSI6IjQ0NzRhMTEyLWZkYTQtNGMxNy1hNmFkLTIwZWZlZDQ1ODUyZCIsImNsaWVudF9pZCI6IjJzcGtibmM3bG9mdnNkOTlqODBuYWkwdG43IiwidXNlcm5hbWUiOiJmOTA1NTkzZS0xMzMyLTRjYTctYjVjYi0zOTVhMDRjYzhmYTgifQ.P9k9w6cW2PVzPN1S-Qrevvoh200p8pIGSYst7lr3zBRMMXMeKZn6BwGF8Ke6W6Trjk25GZ1XNQIAngVPfVKoU4-jiBVYrRvKXslL7-lpw4tC1Wz6yRx9qAU34BYV2vlKjlahfFHuiaCk2jsHVye2GhMkDh9mOcb21GCpwItaemPZOairswEBiTh-sJlIGiS3PEOkEC55Z6CZqCe1AGB4OMWBZWhKqQxftPC8kqQC5_EaEY984SMtTKHew8EJZ7qwPud5UoMibfkHUJGvwJ76ilg1jEdyCHLZ9jgCuJtpJXL_kY7g5O5dCw4V6Az6vPHe5wv5VK7cKUFFbj_2dQ4h-A",
            payload: {
              sub: "f905593e-1332-4ca7-b5cb-395a04cc8fa8",
              device_key: "us-east-1_1bb6a76e-312a-4ebe-8393-66e3fc746c78",
              event_id: "58bf4125-a4cf-429c-8d5a-dab1889205fb",
              token_use: "access",
              scope: "aws.cognito.signin.user.admin",
              auth_time: 1617409205,
              iss: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_vzsWxPa02",
              exp: 1617412805,
              iat: 1617409205,
              jti: "4474a112-fda4-4c17-a6ad-20efed45852d",
              client_id: "2spkbnc7lofvsd99j80nai0tn7",
              username: "f905593e-1332-4ca7-b5cb-395a04cc8fa8",
            },
          },
          clockDrift: -1,
        },
        authenticationFlowType: "USER_SRP_AUTH",
        storage: {
          "CognitoIdentityServiceProvider.2spkbnc7lofvsd99j80nai0tn7.f905593e-1332-4ca7-b5cb-395a04cc8fa8.deviceGroupKey": "-ptF4OyFP",
          "CognitoIdentityServiceProvider.2spkbnc7lofvsd99j80nai0tn7.f905593e-1332-4ca7-b5cb-395a04cc8fa8.deviceKey":
            "us-east-1_1bb6a76e-312a-4ebe-8393-66e3fc746c78",
          "CognitoIdentityServiceProvider.2spkbnc7lofvsd99j80nai0tn7.f905593e-1332-4ca7-b5cb-395a04cc8fa8.randomPasswordKey":
            "iwqKanKTlheulW3SUBZq8MbaXhbe74oY84srhp0DnB5DaFv2oITJzg==",
          signUpStep: "0",
        },
        keyPrefix: "CognitoIdentityServiceProvider.2spkbnc7lofvsd99j80nai0tn7",
        userDataKey: "CognitoIdentityServiceProvider.2spkbnc7lofvsd99j80nai0tn7.f905593e-1332-4ca7-b5cb-395a04cc8fa8.userData",
        attributes: {
          sub: "f905593e-1332-4ca7-b5cb-395a04cc8fa8",
          email_verified: true,
          name: "Anthony Hill",
          email: "tony@ilanlyfe.com",
        },
        preferredMFA: "NOMFA",
      });
    }, 2500)
  );
}
