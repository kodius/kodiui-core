import { GraphQLClient } from 'graphql-request'

export const graphQlClient = new GraphQLClient('http://116.203.201.51:4001/api/graphql ', {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoxLCJpbXBlcnNvbmF0ZSI6ZmFsc2UsImF1ZCI6Ikpva2VuIiwiZXhwIjoxNjg0NTE5NzU1LCJpYXQiOjE2ODQ1MTI1NTUsImlzcyI6Ikpva2VuIiwianRpIjoiMnRnOWVmbDZsbTNzZmNlcDYwMDAwNWQxIiwibmJmIjoxNjg0NTEyNTU1fQ.V_fdzn_smL8LK1OL1si1KOmsHOZlLce2TLltfcFNYGZtQR0jKFEnxW4xHFZimgE37NdCtqM6t3gZCI1_zJIExak90l2Ndr1MlJDccZ9IRBfNR_S5j2HK5mFuQUs-MmB-ZyrS9ZdYaLT7zrpcGri5wkE3DPnfvt0POXi6MIqlTDfwQ8GxNhsyfxs5M167jvTycIujBRL_Ve3amdb3MiG4RwRSfz10XE7J6YZiRcrf3pEqvYnR_PS6Jlx8vzUR-dTU9zn0ns51NN-67dcFJL6Is-PpRE-pQ0g08m2LVosT5Wa6OK_CXHS5g1RyChLFsZKgm5qOvcwKxHkTapSdEhMFphZRVeZxNzNwNAQyHc3R9Nmd3OJ_yIS0YxmjmpaTUzgZe0dOaUW41HHy5roL_VCk5WnrV5xYT1dfDXNwLwTAxTWHfCsRwEVwLJ8N3LkouidLGqrHFh3g4oWYQpeYl6L2Kz17_skA3AiGvdHX3vz563g19zT2JcPyzY4zycze2ejFaQDe8Zlugiu2qnXnq3ed6PDWBT_O9NpaHCLrON6AgGe_5s28UWhExIDYKkKEVULw54buHa33ZZk3CbUPI5xDwOed7yIEMoY4XZxhk3N3PxDibyUWJYybi5Y47c3UPoHwcdHrguPFJkIg8QCuj4BADrtOQ0tWUvg1GO9sWwtc74E',
  },
})
