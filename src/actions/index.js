import { SET_GEOLOCATION, ADD_MUNICIPIO, SET_MUNICIPIO, SET_CULTURA, SET_CICLO, SET_TEXTURA } from './actionTypes';

export const setGeolocation = (geolocationNome, geolocationIBGE) => ({
  type: SET_GEOLOCATION,
  geolocationNome: geolocationNome,
  geolocationIBGE: geolocationIBGE,
})
export const addMunicipio = (favoritos) => ({
  type: ADD_MUNICIPIO,
  favoritos: favoritos,
})
export const setMunicipio = (municipioNome, codigoIBGE) => ({
  type: SET_MUNICIPIO,
  municipioNome: municipioNome,
  codigoIBGE: codigoIBGE
})
export const setCultura = (culturaNome, culturaID) => ({
  type: SET_CULTURA,
  culturaNome: culturaNome,
  culturaID: culturaID,
})
export const setCiclo = (cicloNome, cicloID) => ({
  type: SET_CICLO,
  cicloNome: cicloNome,
  cicloID: cicloID,
})
export const setTextura = (texturaNome, texturaID) => ({
  type: SET_TEXTURA,
  texturaNome: texturaNome,
  texturaID: texturaID,
})