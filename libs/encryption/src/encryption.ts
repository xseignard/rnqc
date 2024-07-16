import { TextEncoder, TextDecoder } from 'text-encoding';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const keyAES = {
  alg: 'A256GCM',
  ext: true,
  k: 'Gdt36opbEL8KIoMF3GlqbTHcDb73f0XqzKjG_G86qVc',
  key_ops: ['encrypt', 'decrypt'],
  kty: 'oct',
};

const keyRSAPub = {
  alg: 'RSA-OAEP-256',
  e: 'AQAB',
  ext: true,
  key_ops: ['encrypt'],
  kty: 'RSA',
  n: 'l396lOQ9-4HCGL6X5S37QHYjUiQWGHAM8evlFbbPYSK23xshrNB-6t4tdhWUlJtTU7mZ29A4ZmG5ymwpFuNZvSnOxwfHIykwHOlKHtlEg5D9GVdEv2_RQtbmmqVP7k8wxvDI7_JJrv6QLzlDSyNOeBwEnZUsLLi6uuT7O2JB1e6RFIu_1_9658VpvAmA6mt6lj4iagTJ707OF_z4x99Gz-L4wn5_L76rRKZQ26PzmWyi5qcPn58i84mt8_pH4xWt2joZhlzI_a4n1qmRHVXpKoO4s6Y1GPsLlIeDWX_YWO74aB6QY9qpONLFQI2DTKPX-MTOCTZdGXAa6vbI3kptLGXG49iZnIPWfOF93eLrhvD6FB7DgSOl4frd3Ps-sG_obPFn10YVx5pl5i1jGbSTDdsa_e6jq1nOtoqmMDgYYOzHw_GovTRNJCI6e6TIjqnVA2Y_HVWfvSvrqXDFFZN55t5GXjyml4OQ_cYemHQuXyWPIGF1QxWwASnV6rPU6toNoJ2NxdPTu32Mm7jeLuNYaRBEjzKoxzGYkvgihUVhBOm-B9DuAynFRCt1oDEKrzZipHY1uAX2GyTQTd_523it7kzc7eplGUi-wq_v9oJUUfaGLmaHDsg3PpZhIvo4y9m_V7busNEDpYlnRAibCdq6ERNGgZX2wdXNnoxMAAZpX8c',
};

const keyRSAPriv = {
  alg: 'RSA-OAEP-256',
  d: 'PyOUgZA8WuFB9REd-hh3Ue7KmrXKdaXhZ0QCplGZzWhr4cELgFwmwRkWxlOJKIQxrr-4JXn6v4S0K253k3_uSx2s_Zs6vecxE6OQzhmL6e9X5KNP1h8yjhJFaqdCEFZ1xDve6s3GMsYKbnwFlT-iOQGoVMqybfMRc8nyANZbDN-QHIl_y3RBE25duk4Vqd1galR8AEZ9qJxl3W6Der2N5B86wMh6lnn3JDXSli-W21cA73Mp2kM3DFvRoVCqfDRxT_WN5McvxzY5iUgDYEAJXLwoEstO7tnWAjGWJwtWrf3ujmpKkCs2AqYpKlWwJpVUcewH2KQNGgh0V3_ByI8pP0cE2ziae9oIxuEDEhXcYnqr1ObjmiSpnFPZuQ0LW3CEgNHZFt2KQNsom6f_1reW8T6Ch2IhDSA1PXuPxhUsMbXFMCR8q6Bwo4B4UWa1uZwYWRtNa-FO-CpaMWsui_Q3A1Y_7wiNjSzVcLdELDW9Oj0HButXSQFEHG6R1-BaIQ6OpH3x5CUK9OBOd5zAPwAMoVks_Z8e3trSD-HIKGTvrI6JLdOGXXI7eoUr74kZFlkFxsHDFW5MxbHu1VUoPpl2lBsXcCixlnPE9JwElOT6P5c04YkOZHcQKlqNhvsogH6V0F7KnFcexUBp-2-8Vyh6DgobmiGJwfCZ-pnTB69FkdE',
  dp: 'ljAt1Or1lhfPb6efl-kiIHNx5ZXsM-JBF4btLkhP7GmmJKLHUvF4XnJHyy_nT5ZgW2dZKkEJZm8ee4fqAM07iJNA-vNvXfqCW1i_eiw7PJ1OGzXDzKLEwUhFiKdBA4N2mGtBZAxsy9veI4OtlHlKsjuwErO75c25nagXA71dD2bXoS1VHYTiTxNjFfn27TOKZ31KelItAmlHXyb2TdjTihKR-exKWDs8BPvWnjeHEO1Xx2jYdPW5250RaRSxTpuPh4Xa3GXa16C02MCV0sBBsjjWxWHuFFcXtzMB136OVT-88IIahJ5Z60DQHDwbEZTHwE1nlgOZjgOlExlazxXtoQ',
  dq: 'pfvM4IU5M__DEKxdFXD2Fmw12wNc3THs28TbalikmfAzyhNnkvnFtguXcTJwoXhuZ_XTVUuDkndqwcCrrblmskOqt1JVP6F_XkOKefuoxaKZp7B1x4RrhUC-P69wvMi-qU9EFrgkzRCzlmpoQgG-UedWZSyq1Xgn2iVjJigKOBwGYcvvqtS5v_TNyiNHw-uarsUtAQjwLWwLZXl50xxs9M3ASALgyiFsTJ_ZCTdAfb4DSy4KNm4m2YHkwXgvddgl1P8eYB4aUXbDvl8SLl7xGuzHPabE_JKqIi9rKQHT-lZqK3glNRnxGRlawAnUvEAx1zlaTzEkHwgnDUCOUXNuNQ',
  e: 'AQAB',
  ext: true,
  key_ops: ['decrypt'],
  kty: 'RSA',
  n: 'l396lOQ9-4HCGL6X5S37QHYjUiQWGHAM8evlFbbPYSK23xshrNB-6t4tdhWUlJtTU7mZ29A4ZmG5ymwpFuNZvSnOxwfHIykwHOlKHtlEg5D9GVdEv2_RQtbmmqVP7k8wxvDI7_JJrv6QLzlDSyNOeBwEnZUsLLi6uuT7O2JB1e6RFIu_1_9658VpvAmA6mt6lj4iagTJ707OF_z4x99Gz-L4wn5_L76rRKZQ26PzmWyi5qcPn58i84mt8_pH4xWt2joZhlzI_a4n1qmRHVXpKoO4s6Y1GPsLlIeDWX_YWO74aB6QY9qpONLFQI2DTKPX-MTOCTZdGXAa6vbI3kptLGXG49iZnIPWfOF93eLrhvD6FB7DgSOl4frd3Ps-sG_obPFn10YVx5pl5i1jGbSTDdsa_e6jq1nOtoqmMDgYYOzHw_GovTRNJCI6e6TIjqnVA2Y_HVWfvSvrqXDFFZN55t5GXjyml4OQ_cYemHQuXyWPIGF1QxWwASnV6rPU6toNoJ2NxdPTu32Mm7jeLuNYaRBEjzKoxzGYkvgihUVhBOm-B9DuAynFRCt1oDEKrzZipHY1uAX2GyTQTd_523it7kzc7eplGUi-wq_v9oJUUfaGLmaHDsg3PpZhIvo4y9m_V7busNEDpYlnRAibCdq6ERNGgZX2wdXNnoxMAAZpX8c',
  p: 'xpC6RpdfH6T4ODmsG1q_0IQjdDAkPivsV9YhbionK7BQ4vMj8WDkJIlSsJnJ2oklWRBfxvR1_ml7k9QHHCRhPrM2lB4W6qj18GDQ_OkBRlo53WCJ1xxxRCUDLPxx9kCGVgx3RhHfjFyjpZH2WoljyMtdqfBwA4UqpQBiuNi-h44Ws-7i-vrteu6gs_RKsZtKuVwM42xrElhx027OCyvaYHDaX-eQOV_c9zrnO1RctsKpJhXqxfPzUrfRLiELPpY7x01IQwRixZvaqJLo7qsr8Pls-GQqi7wEFNZEPsKQMH6EzzD8DuDEteJVEtnp_NauZcP9KrnlYXAiqDUJvgs90Q',
  q: 'w1GHPbRZSfZ9c29dLiZHIiBJk_Mz4RGh8a9fcr0-f09C9rhweq3FXZnRAi_6WuNFYc5td5_YISVImmxDsMdmay8VEzpCXWCt28-caLgYWWi7zpZxRvQEWMm_0NjipcIcDGH8hAhA0RzqTzeCz3XibvMom7VQu_564quoytByJGDQkBWz0gSZZif6xgF2FOJBAY2QOOCcdXhn2iWYtYmAWbNC1Spf6C6Cg7gi1AyVgKs3hcZY6vC3v_uUTygmh0PtH2YWHXT03XwjzZkYVzqtVcoVUhzcK-eTw7NRQnrTACYd7EhCxBWv-psRgDf9Top1Iryq66KAy8Z6rdbsXRQyFw',
  qi: 'G8Rl0mxfS4werPYaIgFeN9GCxd_qMrUwmVqEFD4iq4EIs--gXrBI5vrbSpVrwjM-sd1lgswERC4txZZs1QeoarZrbulfe8EInPLQNQisjHr_YjUMx5N2zSjPoL8yPjzW4U7vE-fx6N0nt1LCLgj0gdApZpFisg5P0O4fTg3DpM7JdvdNl4lbbUYEghau6aXdKz6spCcLLsrsfC5rVOTkDs4nqsIZjac4q9neSzzkxE__R5MZfvKzjQTGHhzKCpqTmyheQCOd8TulQ8aeKp4OGBKXuCeN67r_GHDWJ4eI7Qzb3QwWLd9E4kgYZRFgSlVgnQVUi4N3jRZNvVSQZfWt9g',
};

export const importAESKey = async () => {
  return crypto.subtle.importKey(
    'jwk',
    keyAES,
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
};

export const importRSAPubKey = async () => {
  return crypto.subtle.importKey(
    'jwk',
    keyRSAPub,
    { name: 'RSA-OAEP', hash: 'SHA-256' },
    true,
    ['encrypt']
  );
};

export const importRSAPrivKey = async () => {
  return crypto.subtle.importKey(
    'jwk',
    keyRSAPriv,
    { name: 'RSA-OAEP', hash: 'SHA-256' },
    true,
    ['decrypt']
  );
};

export const encryptAES = async (toEncrypt: string, key: CryptoKey) => {
  const encrypted = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: new Uint8Array(12),
    },
    key,
    new TextEncoder().encode(toEncrypt)
  );
  return encrypted;
};

export const decryptAES = async (toDecrypt: ArrayBuffer, key: CryptoKey) => {
  const decrypted = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv: new Uint8Array(12),
    },
    key,
    toDecrypt
  );
  return new TextDecoder().decode(decrypted);
};

export const encryptRSA = async (toEncrypt: string, key: CryptoKey) => {
  const encrypted = await crypto.subtle.encrypt(
    {
      name: 'RSA-OAEP',
      length: 256,
    },
    key,
    new TextEncoder().encode(toEncrypt)
  );
  return encrypted;
};

export const decryptRSA = async (toDecrypt: ArrayBuffer, key: CryptoKey) => {
  const decrypted = await crypto.subtle.decrypt(
    {
      name: 'RSA-OAEP',
      length: 256,
    },
    key,
    toDecrypt
  );
  return new TextDecoder().decode(decrypted);
};

export const runFlow = async (input: string, type: 'AES' | 'RSA') => {
  try {
    if (type === 'AES') {
      const aesKey = await importAESKey();
      const aesEncrypted = await encryptAES(input, aesKey);
      const aesDecrypted = await decryptAES(aesEncrypted, aesKey);
      console.log(
        'encrypted ========================================================'
      );
      console.log(aesEncrypted);
      console.log('========================================================');
      console.log(
        'decrypted ========================================================'
      );
      console.log(aesDecrypted);
      console.log('========================================================');
      return aesDecrypted;
    } else {
      const rsaPriv = await importRSAPrivKey();
      const rsaPub = await importRSAPubKey();
      const rsaEncrypted = await encryptRSA(input, rsaPub);
      const rsaDecrypted = await decryptRSA(rsaEncrypted, rsaPriv);
      console.log(
        'encrypted ========================================================'
      );
      console.log(rsaEncrypted);
      console.log('========================================================');
      console.log(
        'decrypted ========================================================'
      );
      console.log(rsaDecrypted);
      console.log('========================================================');
      return rsaDecrypted;
    }
  } catch (e) {
    console.error(e);
  }
};
