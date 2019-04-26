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
export const setMunicipio = (value) => ({
  type: SET_MUNICIPIO,
  
})
export const setCultura = (value) => ({
  type: SET_CULTURA,
  
})
export const setCiclo = (value) => ({
  type: SET_CICLO,
  
})
export const setTextura = (value) => ({
  type: SET_TEXTURA,
  
})
